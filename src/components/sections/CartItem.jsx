import React from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default ({ item, removeFromCart }) => {
    
    
  return (
    <div
      id="_1038_1599_Frame_2018776448"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "32px",
      }}
    >
      <div
        id="_1038_1600_Frame_2018776441"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `url(${item?.image}) 100% / cover no-repeat`,
          borderRadius: "8px",
          height: "164.0px",
          width: "164.0px",
        }}
      ></div>

      <div
        id="_1038_1601_Frame_2018776447"
        style={{
          position: "relative",
          display: "flex",
          flex: "1",
          flexDirection: "column",
          justifyContent: "space-around",
          flexWrap: "nowrap",
          gap: 30,
        }}
      >
        <div
          id="_1038_1602_Frame_2018776443"
          style={{
            position: "relative",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          <div
            id="_1038_1603_Frame_2018776440"
            style={{
              position: "relative",

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_1038_1604_Frame_2018776442"
              style={{
                position: "relative",

                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "4px",
              }}
            >
              <span
                id="Shilajit_Gummies"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Reckless TRIAL",
                  fontSize: "24.0px",
                  fontWeight: "380",
                  letterSpacing: "-4.0%",
                  textAlign: "left",

                  position: "relative",
                }}
              >
                {item?.name}
              </span>
              <span
                id="original_price____35_00"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Matter-TRIAL",
                  fontSize: "16.0px",
                  fontWeight: "430",
                  letterSpacing: "-1.0%",
                  textAlign: "left",

                  position: "relative",
                }}
              >
                Total quantity: {item?.quantity}
              </span>
            </div>

            <div
              id="_1038_1607_Frame_2018776392"
              style={{
                position: "relative",

                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "6px",
              }}
            >
              <span
                id="_1-month_supply_delivered_monthly"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Matter-TRIAL",
                  fontSize: "16.0px",
                  fontWeight: "430",
                  letterSpacing: "-1.0%",
                  textAlign: "left",

                  position: "relative",
                }}
              >
                1-month supply delivered monthly
              </span>
            </div>
          </div>

          <div
            id="_1038_1611_Frame_2018776353"
            style={{
              position: "relative",

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
              ${(item?.price * item?.quantity).toFixed(2)}
            </span>
          </div>
        </div>

        <div
          id="_1038_1614_Frame_2018776446"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div
            id="_1038_1615_Button_default"
            style={{
              position: "relative",
              overflow: "hidden",
              borderColor: "#13523bff",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "360px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "10px",
              padding: "7px 16px 7px 16px",
            }}
          >
            <IoMdRemove />

            <span
              id="_1"
              style={{
                color: "#13523bff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16.0px",
                fontWeight: "570",
                lineHeight: "24px",
                textAlign: "left",

                position: "relative",
              }}
            >
              {item?.quantity}
            </span>
            <IoMdAdd />
          </div>

          <div
            id="_1038_1621_Frame_2018776445"
            style={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.74 8.00052L11.394 17.0005M6.606 17.0005L6.26 8.00052M16.228 4.79052C16.57 4.84252 16.91 4.89752 17.25 4.95652M16.228 4.79052L15.16 18.6735C15.1164 19.2387 14.8611 19.7667 14.445 20.1518C14.029 20.5368 13.4829 20.7507 12.916 20.7505H5.084C4.5171 20.7507 3.97102 20.5368 3.55498 20.1518C3.13894 19.7667 2.88359 19.2387 2.84 18.6735L1.772 4.79052M16.228 4.79052C15.0739 4.61604 13.9138 4.48362 12.75 4.39352M1.772 4.79052C1.43 4.84152 1.09 4.89652 0.75 4.95552M1.772 4.79052C2.92613 4.61604 4.08623 4.48362 5.25 4.39352M12.75 4.39352V3.47752C12.75 2.29752 11.84 1.31352 10.66 1.27652C9.55362 1.24116 8.44638 1.24116 7.34 1.27652C6.16 1.31352 5.25 2.29852 5.25 3.47752V4.39352M12.75 4.39352C10.2537 4.2006 7.74628 4.2006 5.25 4.39352"
                stroke="#1E1E1E"
                stroke-opacity="0.72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              id="Remove"
              onClick={() => removeFromCart(item.name)}
              style={{
                color: "#1e1e1eff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16.0px",
                fontWeight: "430",
                letterSpacing: "-1.0%",
                textAlign: "left",
                position: "relative",
              }}
            >
              Remove
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
