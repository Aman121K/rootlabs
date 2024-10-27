import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import SubscribeAndSave from "../product/SubscribeAndSave";
import AddToCart from "../product/AddToCart";
import Benefits from "../product/Benefits";

const ProductDescription = ({ descriptionHtml }) => {
  return <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />;
};

function ProductDetails({ product, quantity, setQuantity }) {
  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 768
  )
  useEffect(() => {
    // Function to update the layout based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileLayout(true);
      } else {
        setIsMobileLayout(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove resize event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      id="product_details"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "20px 10px",
        gap: 0,
        minWidth: isMobileLayout ? 500 : 100,
        fontSize: "large",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontFamily: "Reckless TRIAL",
              fontWeight:380,

            }}
          >
            {product.title}
          </div>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <div
              style={{
                color: "#E5732E",
                height: "14px",
                transform: "translateY(-2px)",
              }}
            >
              <IoStar
                style={{
                  height: "14px",
                }}
              />
              <IoStar
                style={{
                  height: "14px",
                }}
              />
              <IoStar
                style={{
                  height: "14px",
                }}
              />
              <IoStar
                style={{
                  height: "14px",
                }}
              />
              <IoStar
                style={{
                  height: "14px",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "Matter-TRIAL",
                fontSize: "14px",
              }}
            >
              5.0
            </span>
            <div
              style={{
                marginLeft: 10,
                fontFamily: "Matter-TRIAL",
                fontSize: "14px",
              }}
            >
              <GoDotFill /> 5243 reviews
            </div>
          </div>
        </div>
        {/* <ProductDescription
          descriptionHtml={product.descriptionHtml}
        ></ProductDescription> */}

        <ul
          id="product_description"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
            margin: "16px px 24px 0px",
            paddingLeft: "0",
          }}
        >
          {product?.metafield?.value &&
            JSON.parse(product?.metafield?.value).text.map((text, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "10px", // Dot width
                    height: "10px", // Dot height
                    borderRadius: "50%", // Make it round
                    backgroundColor: "#13523B", // Dot color
                    marginRight: "8px", // Space between dot and text
                  }}
                />
                <span
                  id="product_description"
                  style={{
                    fontFamily: "Matter-TRIAL",
                    fontSize: "16px",
                    fontWeight: "430",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                    textAlign: "left",
                    height: "auto", // Let height adjust dynamically
                    width: "100%", // Increased width for description
                    position: "relative",
                    color: "#13523B",
                    overflow: "hidden", // Hide overflowing text
                    textOverflow: "ellipsis", // Add ellipsis for long text
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <span
          style={{
            fontFamily: "Matter-TRIAL-Medium",
            fontSize: 18,
          }}
        >
          Subscribe and Save
        </span>
        <SubscribeAndSave product={product} quantity={quantity} />
        <AddToCart
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Benefits />
      </div>
    </div>
  );
}

export default ProductDetails;
