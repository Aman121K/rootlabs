import { createStorefrontApiClient } from "@shopify/storefront-api-client";

// Function to add delay for timeouts
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Retry function for API calls with exponential backoff
const withRetry = async (fn, retries = 3, delayMs = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn(); // Attempt the function call
    } catch (error) {
      if (i < retries - 1) {
        console.warn(`Retrying... (${i + 1}/${retries})`);
        await delay(delayMs); // Wait before retrying
        delayMs *= 2; // Exponential backoff
      } else {
        throw error; // Throw if all retries fail
      }
    }
  }
};

// Create API client with config
const createShopifyClient = (config) => {
  const client = createStorefrontApiClient({
    storeDomain: config.storeDomain,
    apiVersion: config.apiVersion,
    publicAccessToken: config.publicAccessToken,
  });

  // Function to fetch all products with retries
  const fetchAllProducts = async (
    limit = 50,
    imageLimit = 1,
    descriptionHtml = false
  ) => {
    const productsQuery = `
      query ProductsQuery {
        products(first: ${limit}) {
          edges {
            node {
              id
              title
              handle
              ${descriptionHtml ? `descriptionHtml` : `description`}
              images(first: ${imageLimit}) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    // Fetch products with retries and timeouts
    return withRetry(
      async () => {
        const response = await Promise.race([
          client.request(productsQuery),
          delay(config.timeout), // Enforce timeout
        ]);
        if (!response) throw new Error("Request timed out");
        return response.data.products.edges;
      },
      config.retries,
      config.retryDelay
    );
  };

  // Add more query functions here as needed
  const fetchProductByHandle = async (
    handle,
    imageLimit = 1,
    descriptionHtml = false,
    metafieldNamespace = "custom", // Default namespace
    metafieldKey = "root_lab"   // Default key
  ) => {
    const productQuery = `
      query ProductQuery($handle: String) {
        product(handle: $handle) {
          id
          title
          handle
          ${descriptionHtml ? `descriptionHtml` : `description`}
          images(first: ${imageLimit}) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
                sellingPlanAllocations(first: 5) {
                  edges {
                    node {
                      sellingPlan {
                        id
                        name
                        description
                      }
                    }
                  }
                }
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          metafield(namespace: "${metafieldNamespace}", key: "${metafieldKey}") {
            id
            namespace
            key
            value
            type
          }
        }
      }
    `;

    return withRetry(
      async () => {
        const response = await Promise.race([
          client.request(productQuery, { variables: { handle } }),
          delay(config.timeout),
        ]);
        if (!response) throw new Error("Request timed out");
        return response.data.product;
      },
      config.retries,
      config.retryDelay
    );
  };

  const createCheckout = async (lineItems) => {
    const checkoutQuery = `
      mutation CartCreate($cartInput: CartInput!) {
        cartCreate(input: $cartInput) {
          cart {
            id
            checkoutUrl
            updatedAt
            createdAt
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    `;

    if (!lineItems || lineItems.length === 0) {
      throw new Error("lineItems array is empty or undefined");
    }

    return withRetry(
      async () => {
        const variables = {
          cartInput: {
            lines: [...lineItems],
          },
        };

        // for (let i = 0; i < lineItems.length; i++) {
        //   const item = lineItems[i];
        //   variables.cartInput.lines.push({
        //     merchandiseId: item.merchandiseId,
        //     quantity: item.quantity,
        //   });
        // }

        // Ensure all input fields are valid and non-null before the request
        if (
          !lineItems ||
          lineItems.length === 0
        ) {
          throw new Error("Invalid input for CartInput");
        }

        const response = await Promise.race([
          client.request(checkoutQuery, {
            variables: {
              ...variables
            },
          }),
          delay(config.timeout),
        ]);

        if (!response) throw new Error("Request timed out");

        const { cartCreate } = response.data;
        if (cartCreate.userErrors.length > 0) {
          throw new Error(
            cartCreate.userErrors.map((error) => error.message).join(", ")
          );
        }

        return cartCreate.cart;
      },
      config.retries,
      config.retryDelay
    );
  };

  return {
    fetchAllProducts,
    fetchProductByHandle,
    createCheckout,
    // You can add more reusable API query functions here
  };
};

// Example config
// const config = {
//   storeDomain: "http://a88a8f-3.myshopify.com",
//   apiVersion: "2024-10",
//   publicAccessToken: "5d920647f31145b21a1b015b8c4630c4",
//   retries: 3, // Number of retry attempts
//   retryDelay: 1000, // Initial delay for retries (ms)
//   timeout: 5000, // Timeout for API calls (ms)
// };
const config = {
  storeDomain: "wmyrhe-3p.myshopify.com",
  apiVersion: "2024-10",
  publicAccessToken: "e5296621fe30ec212e29799e2275a3a2",
  retries: 3, // Number of retry attempts
  retryDelay: 1000, // Initial delay for retries (ms)
  timeout: 5000, // Timeout for API calls (ms)
};

// Initialize Shopify client
const shopifyClient = createShopifyClient(config);

export default shopifyClient;
