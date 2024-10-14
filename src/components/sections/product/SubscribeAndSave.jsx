import React from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import { PiRadioButtonFill } from "react-icons/pi";
import { TbRepeat } from "react-icons/tb";

function SubscribeAndSave({ product, quantity }) {
  return (
    <div
      id="_843_14006_Frame_2018776349"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: "16px",
      }}
    >
      <div
        id="_843_14007_Frame_1820554884"
        style={{
          borderColor: "#13523bff",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: "10px",
          padding: "16px 16px 16px 16px",
        }}
      >
        <div
          id="_843_14008_Frame_2018776391"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            gap: "16px",
          }}
        >
          <div
            id="_843_14009_Frame_1820554878"
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_843_14010_Frame_2018776389"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "",
                flexWrap: "nowrap",
                gap: "10px",
                padding: "3px 0px 0px 0px",
                color: "#13523B",
              }}
            >
              <PiRadioButtonFill />
            </div>

            <div
              id="_843_14014_Frame_1820554883"
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}
            >
              <div
                id="_843_14015_Frame_2018776354"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  gap: "4px",
                }}
              >
                <span
                  id="original_price____35_00"
                  style={{
                    fontFamily: "Matter-TRIAL",
                    fontSize: "20.0px",
                    fontWeight: "430",
                    letterSpacing: "-1.0%",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  1-month supply &nbsp;
                  <span
                    style={{
                      color: "#E5732E",
                    }}
                  >
                    (Save{" "}
                    {product?.variants?.edges[0]?.node.compareAtPrice.amount > 0
                      ? (
                          (product?.variants.edges[0].node.price.amount * 100) /
                          product?.variants.edges[0].node.compareAtPrice.amount
                        ).toFixed(0) + "%"
                      : ""}
                    )
                  </span>
                </span>
                <span
                  id="original_price____35_00"
                  style={{
                    color: "#1E1E1EB8",
                    fontFamily: "Matter-TRIAL",
                    fontSize: "16.0px",
                    fontWeight: "430",
                    letterSpacing: "-1.0%",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  Total quantity: {quantity}
                </span>
              </div>

              <div
                id="_843_14018_Frame_2018776353"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  gap: "4px",
                }}
              >
                <span
                  id="original_price____35_00"
                  style={{
                    color: "#13523bff",
                    fontSize: "20.0px",
                    
                    letterSpacing: "-1.0%",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  ${(product?.variants?.edges[0].node.price.amount * quantity)?.toFixed(2)}
                </span>
                <span
                  id="original_price____35_00"
                  style={{
                    color: "#13523bff",
                    fontSize: "16.0px",
                    
                    letterSpacing: "-1.0%",
                    textAlign: "left",
                  }}
                >
                  ${product?.variants?.edges[0].node.price.amount} / per piece
                </span>
              </div>
            </div>
          </div>

          <div
            id="_843_14021_Rectangle_34661002"
            style={{
              position: "relative",
              background: "rgba(217, 217, 217, 1.00)",
              height: "1.0px",
              width: "100%",
            }}
          ></div>

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
      </div>
    </div>
  );
}

export default SubscribeAndSave;
