import React, { useEffect, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TbRepeat } from "react-icons/tb";
import CartItem from "./CartItem";
import StoreClient from "../../client/StoreFrontClient.js";

function Cart({ closeModal }) {
  const [slideIn, setSlideIn] = useState(false);
  const [promo, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const checkout = async () => {
    const lineItems = cart.map((item) => {
      return {
        merchandiseId: item.id,
        quantity: item.quantity,
      };
    });
    const checkout = await StoreClient.createCheckout(lineItems);

    if (checkout && checkout.checkoutUrl) {
        window.location.href = checkout.checkoutUrl;
    }
  };

  const fetchCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // If the product exists in localStorage, set the quantity from there
    if (existingCart) {
      setCart(existingCart);
    }
  };

  const removeFromCart = (productHandle) => {
    // Step 1: Fetch cart from local storage
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Step 2: Filter out the item with the matching productHandle
    const updatedCart = cart.filter((item) => item.name !== productHandle);

    // Step 3: Update the local storage with the new cart
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  useEffect(() => {
    // Disable page scrolling when modal is open
    document.body.style.overflow = "hidden";
    // Trigger slide-in animation
    setSlideIn(true);

    fetchCart();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    // Trigger slide-out animation
    setSlideIn(false);
    // Wait for animation to complete before closing modal
    setTimeout(() => {
      closeModal();
    }, 400); // Match the transition duration (0.4s)
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        background: "rgba(0, 0, 0, 0.5)", // Black background with 50% opacity
        zIndex: 10000,
      }}
    >
      <div
        id="cart_container"
        style={{
          width: "60%",
          height: "100%",
          background: "rgba(242, 240, 232, 1.00)",
          transform: slideIn ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s ease-in-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          id="_1038_1594_Frame_1820554803"
          style={{
            borderColor: "#dfdad5ff",
            borderStyle: "solid",
            borderWidth: "0.0px 0.0px 1.0px 0.0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            padding: "24px 40px",
          }}
        >
          <span
            id="Your_Cart___2__"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "430",
              lineHeight: "124%",
              letterSpacing: "-1.0%",
              textAlign: "left",
              height: "25.0px",
              width: "213.0px",
              position: "relative",
            }}
          >
            Your Cart ( {cart?.length} )
          </span>
          <RxCross2
            style={{
              cursor: "pointer",
            }}
            size={20}
            onClick={handleClose}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "24px 40px",
            position: "relative",
            flex: "auto",
            overflowY: "auto",
          }}
        >
          {cart?.length > 0 &&
            cart?.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          {/* <div
            id="_1038_1626_Button"
            style={{
              background: "rgba(255, 232, 228, 1.00)",
              borderRadius: "8px",
              display: "flex",
              gap: "7px",
              padding: "8px 24px 8px 8px",
              color: "#c64c4cff",
              fontFamily: "Matter-TRIAL",
              fontSize: "12.0px",
              fontWeight: "430",
            }}
          >
            <PiWarningCircle />
            Currently we don’t ship to Pakistan
          </div> */}
          <div
            id="_1038_1632_Frame_1820554886"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              gap: "16px",
            }}
          >
            <span
              id="Subscribe_and_Save_"
              style={{
                color: "#1e1e1eff",
                fontFamily: "Matter-TRIAL",
                fontSize: "18.0px",
                fontWeight: "570",
                lineHeight: "20px",
                letterSpacing: "-1.0%",
                textAlign: "left",
                position: "relative",
              }}
            >
              Subscribe and Save:
            </span>

            <div
              id="_1038_1636_Frame_1820554884"
              style={{
                position: "relative",
                background: "rgba(255, 241, 229, 1.00)",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                padding: "24px 24px 24px 24px",
              }}
            >
              <div
                id="_1038_1640_Frame_2018776450"
                style={{
                  position: "relative",
                  height: "77.0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  gap: "16px",
                }}
              >
                <span
                  id="original_price____35_00"
                  style={{
                    fontFamily: "Matter-TRIAL",
                    fontSize: "16.0px",
                    fontWeight: "430",
                    letterSpacing: "-1.0%",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  1-month supply{" "}
                  <span style={{ color: "#E5732E" }}> (Save 12%) </span>
                </span>

                <div
                  id="_843_14022_Frame_2018776394"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    gap: "8px",
                    color: "#1E1E1EB8",
                  }}
                >
                  <div
                    id="_843_14023_Frame_2018776392"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      gap: "6px",
                    }}
                  >
                    <div
                      id="_843_14024_Frame"
                      style={{
                        height: "16.0px",
                        width: "16.0px",
                      }}
                    >
                      <TbRepeat />
                    </div>

                    <span
                      id="_1-month_supply_delivered_monthly"
                      style={{
                        fontFamily: "Matter-TRIAL",
                        fontSize: "14.0px",
                        fontWeight: "430",
                        letterSpacing: "-1.0%",
                        textAlign: "left",
                      }}
                    >
                      1-month supply delivered monthly
                    </span>
                  </div>

                  <div
                    id="_843_14027_Frame_2018776393"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      gap: "6px",
                    }}
                  >
                    <FaRegCirclePause />
                    <span
                      id="Pause_or_cancel_at_any_time"
                      style={{
                        fontFamily: "Matter-TRIAL",
                        fontSize: "14.0px",
                        fontWeight: "430",
                        letterSpacing: "-1.0%",
                        textAlign: "left",
                      }}
                    >
                      Pause or cancel at any time
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="_1038_1652_Button_default"
                style={{
                  background: "rgba(19, 82, 59, 1.00)",
                  borderRadius: "360px",
                  height: "40.0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "10px",
                  padding: "0px 24px 0px 24px",
                }}
              >
                <span
                  id="Upgrade_Now"
                  style={{
                    color: "#ffffffff",
                    fontFamily: "Matter-TRIAL",
                    fontSize: "16.0px",
                    fontWeight: "570",
                    lineHeight: "24px",
                    textAlign: "left",

                    position: "relative",
                  }}
                >
                  Upgrade Now
                </span>
              </div>
            </div>
          </div>
          <div
            id="_1038_1691_Frame_2018776455"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "16px",
            }}
          >
            {cart?.length > 0 && (
              <div
                id="_1038_1692_Input"
                style={{
                  position: "relative",
                  width: "calc(100% - 0px - 0px)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div
                  id="_1038_1693_Button_default"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderColor: "#000000",
                    // borderColor: "#dfdad5ff",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "360px",
                    minWidth: "250px",
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                  }}
                >
                  <input
                    id="Add_a_discount_code"
                    style={{
                      color: "#1e1e1eff",
                      fontFamily: "Matter-TRIAL",
                      fontSize: "16.0px",
                      fontWeight: "430",
                      letterSpacing: "-1.0%",
                      textAlign: "left",
                      position: "relative",
                      outline: "none",
                      border: "none",
                      backgroundColor: "transparent",
                      width: "100%",
                      height: "100%",
                      margin: "12px 24px 12px 16px",
                    }}
                    placeholder="Add a discount code"
                  />
                </div>

                <div
                  id="_1038_1695_Button_default"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(19, 82, 59, 1.00)",
                    borderRadius: "360px",
                    height: "48.0px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "10px",
                    padding: "0px 24px 0px 24px",
                    opacity: "1",
                  }}
                >
                  <span
                    id="Apply_Code"
                    style={{
                      color: "#ffffffff",
                      fontFamily: "Matter-TRIAL",
                      fontSize: "16.0px",
                      fontWeight: "570",
                      lineHeight: "24px",
                      textAlign: "left",
                      height: "24.0px",
                      width: "86.0px",
                      position: "relative",
                    }}
                  >
                    Apply Code
                  </span>
                </div>
              </div>
            )}

            {/* <div
              id="_1038_1697_Frame_2018776453"
              style={{
                position: "relative",
                background: "rgba(19, 82, 59, 0.08)",
                borderRadius: "8px",

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "16px",
                padding: "8px",
              }}
            >
              <span
                id="WELCOME_20"
                style={{
                  color: "#13523bff",
                  fontFamily: "Matter-TRIAL",
                  fontSize: "16.0px",
                  fontWeight: "430",
                  lineHeight: "16px",
                  letterSpacing: "-1.0%",
                  display: "flex",
                  gap: 10,
                }}
              >
                <CiDiscount1 />
                WELCOME 20
                <RxCross2 />
              </span>
            </div> */}
          </div>
        </div>
        <div
          id="_1038_1704_Frame_2018776452"
          style={{
            background: "rgba(255, 255, 255, 1.00)",

            width: "calc(100% - 40px - 40px)",
            display: "flex",
            flexDirection: "column",

            flexWrap: "nowrap",
            gap: "10px",
            padding: "20px 40px 20px 40px",
          }}
        >
          <div
            id="_1038_1706_Frame_2018776456"
            style={{
              position: "relative",
              height: "44.0px",
              width: "calc(100% - 0px - 0px)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              id="Subtotal__excl__VAT_"
              style={{
                color: "#1e1e1eff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16.0px",
                fontWeight: "430",
                lineHeight: "16px",
                letterSpacing: "-1.0%",
                textAlign: "left",
                position: "relative",
              }}
            >
              Subtotal (excl. VAT)
            </span>
            <span
              id="original_price____35_00"
              style={{
                color: "#1e1e1eff",
                fontSize: "32.0px",
                
                letterSpacing: "-1.0%",
                textAlign: "left",
                position: "relative",
              }}
            >
              $
              {cart
                .reduce((total, item) => total + item.quantity * item.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <div
            id="_1038_1709_Button_default"
            onClick={checkout}
            style={{
              background: "rgba(19, 82, 59, 1.00)",
              borderRadius: "360px",
              flexWrap: "nowrap",
              padding: "10px 24px 10px 24px",
              color: "#ffffffff",
              fontFamily: "Matter-TRIAL",
              fontSize: "16.0px",
              fontWeight: "570",
              lineHeight: "24px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
