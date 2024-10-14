import React, { useState } from "react";
import Cart from "../Cart";

function AddToCart({ product, quantity, setQuantity }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productHandle = product.handle;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Get existing cart items from localStorage (if any)
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Create new cart item
    const newCartItem = {
      productHandle,
      quantity,
      name: product.title,
      image: product.images.edges[0].node.url,
      price: product.variants.edges[0].node.price.amount,
      // id: product.id,
      id: product.variants.edges[0].node.id,
    };

    // Check if the product is already in the cart
    const existingItemIndex = existingCart.findIndex(
      (item) => item.productHandle === productHandle
    );

    if (existingItemIndex !== -1) {
      // If product already exists, update its quantity
      existingCart[existingItemIndex].quantity = quantity;
    } else {
      // If product doesn't exist, add it to the cart
      existingCart.push(newCartItem);
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    setIsCartOpen(true);
  };

  return (
    <div
      id="_843_14039_Frame_1820554885"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: "16px",
      }}
    >
      <div
        id="_843_14040_Frame_2018776409"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: "16px",
        }}
      >
        <div
          id="_843_14041_Button_default"
          style={{
            position: "relative",
            overflow: "hidden",
            borderColor: "#13523bff",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "360px",
            width: "86.0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            padding: "4px 16px 4px 16px",
          }}
        >
          <span
            id="_1"
            style={{
              color: "#13523bff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "570",
              display: "flex",
              position: "relative",
            }}
          >
            <span style={{ cursor: "pointer" }} onClick={handleDecrease}>
              -
            </span>
          </span>

          <span
            id="_1"
            style={{
              color: "#13523bff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "570",
              display: "flex",
              position: "relative",
            }}
          >
            &nbsp;
            <span
              style={{
                textAlign: "center",
                width: "24.0px",
              }}
            >
              {quantity}
            </span>
            &nbsp;
          </span>

          <span
            id="_1"
            style={{
              color: "#13523bff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "570",
              display: "flex",
              position: "relative",
            }}
          >
            <span style={{ cursor: "pointer" }} onClick={handleIncrease}>
              +
            </span>
          </span>
        </div>

        <div
          id="_843_14047_Button_default"
          onClick={() => handleAddToCart()}
          style={{
            position: "relative",
            overflow: "hidden",
            background: "rgba(19, 82, 59, 1.00)",
            borderRadius: "360px",
            height: "56.0px",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <span
            id="Add_to_Cart"
            style={{
              color: "#ffffffff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "570",
              lineHeight: "24px",
              textAlign: "left",
              height: "24.0px",
              width: "104.0px",
              position: "relative",
            }}
          >
            Add to Cart
          </span>
        </div>
      </div>

      <div
        id="_843_14049_Frame_1820554885"
        style={{
          position: "relative",
          borderColor: "#13523bff",
          borderStyle: "solid",
          borderWidth: "0.0px 0.0px 1.0px 0.0px",
          height: "23.0px",
          // width: "205.0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          flexWrap: "nowrap",
          gap: "16px",
          padding: "0px 0px 4px 0px",
        }}
      >
        <div
          id="_843_14050_Frame_2018776368"
          style={{
            position: "relative",
            height: "23.0px",
            // width: "205.0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "8px",
          }}
        >
          <span
            id="One_Time_Order"
            style={{
              color: "#13523bff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "bold",
              lineHeight: "24px",
              textAlign: "left",
              height: "24.0px",
              width: "146.0px",
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            One Time Order
          </span>
          <div
            id="_843_14052_Ellipse_689"
            style={{
              background: "rgba(19, 82, 59, 1.00)",
              height: "6.0px",
              width: "6.0px",
              borderRadius: "50%",
              left: "154.0px",
              top: "9.0px",
            }}
          ></div>

          <span
            id="_30"
            style={{
              color: "#13523bff",
              fontSize: "20.0px",
              fontWeight: "bold",
              lineHeight: "24px",
              textAlign: "left",
              height: "24.0px",
              // width: "37.0px",
              position: "relative",
            }}
          >
            ${product?.variants?.edges[0].node.price.amount}
          </span>
        </div>
      </div>

      <span
        id="We_recommend_consuming_it_for_3_to_6_months_for_best_results"
        style={{
          color: "#13523bff",
          fontFamily: "Matter-TRIAL",
          fontSize: "16.0px",
          fontWeight: "430",
          lineHeight: "20px",
          letterSpacing: "-1.0%",
          textAlign: "center",
          position: "relative",
        }}
      >
        We recommend consuming it for 3 to 6 months for best results
      </span>
      {isCartOpen && <Cart closeModal={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default AddToCart;
