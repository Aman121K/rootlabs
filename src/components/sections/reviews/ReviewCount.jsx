import React from "react";
import { IoStar } from "react-icons/io5";
import status1 from "../../../../assets/status1.svg";
import status2 from "../../../../assets/status2.svg";
import status3 from "../../../../assets/status3.svg";
import status4 from "../../../../assets/status4.svg";
import status5 from "../../../../assets/status5.svg";
import green_arrow from "../../../../assets/green_arrow.svg";

function ReviewCount() {
  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        alignItems: "center",
        margin: "34px 0px 64px 0px",
        flexWrap: "wrap",
        fontSize: 20,
        fontFamily: "Matter-TRIAL"
      }}
    >
      <div
        style={{
          fontSize: 50,
        }}
      >
        5.0
      </div>
      <div style ={{
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
        <div
          style={{
            color: "#E5732E",
            fontFamily: "Matter-TRIAL",
            fontSize: "smaller",
          }}
        >
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <span style={{ fontFamily: "Matter-TRIAL" }}>Based on 250 Reviews</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            marginRight: "auto",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            5 <IoStar />
          </span>
          <img
            style={{
              width: 160,
            }}
            src={status1}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            120
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            4 <IoStar />
          </span>
          <img
            style={{
              width: 160,
            }}
            src={status2}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            18
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            3 <IoStar />
          </span>
          <img
            style={{
              width: 160,
            }}
            src={status3}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            15
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            2 <IoStar />
          </span>
          <img
            style={{
              width: 160,
            }}
            src={status4}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            12
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            1 <IoStar />
          </span>
          <img
            style={{
              width: 160,
            }}
            src={status5}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            2
          </span>
        </div>
      </div>
      <div
        id="_64_724_Button_default"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "rgba(19, 82, 59, 1.00)",
          borderRadius: "360px",
          height: "48.0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "10px",
          padding: "4px 4px 4px 24px",
        }}
      >
        <div
          id="_64_725_Frame_1820554690"
          style={{
            position: "relative",
            height: "48.0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "27px",
          }}
        >
          <span
            id="Our_Science"
            style={{
              color: "#ffffffff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20.0px",
              fontWeight: "570",
              lineHeight: "24px",
              textAlign: "left",
              height: "24.0px",
              position: "relative",
            }}
          >
            Write a Review
          </span>
          <div
            id="_64_727_Frame_1820554689"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 1.00)",
              borderRadius: "360px",
              height: "48.0px",
              width: "48.0px",
            }}
          >
            <div
              id="_64_728_Frame"
              style={{
                position: "absolute",
                overflow: "hidden",
                height: "24.0px",
                width: "24.0px",
                left: "calc(50% - 12.0px)",
                top: "calc(50% - 12.0px)",
              }}
            >
              <img
                id="_64_729_Clip_pa"
                src={green_arrow}
                alt="Clip_path_group"
                style={{ position: "absolute" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCount;
