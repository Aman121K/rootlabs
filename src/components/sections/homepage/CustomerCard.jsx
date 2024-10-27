import React, { useState } from "react";
import quote from "../../../../assets/quote.svg";
import yellow_star from "../../../../assets/yellow_star.svg";

function CustomerCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flip-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class="flip-card-">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            height: "548px",
            minWidth: "340px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              // background: `url(${item.image}) center / cover no-repeat`,
              borderRadius: "20px",
              height: "548px",
              width: "100%",
            }}
          >
            <div
              className="overlay"
              style={{
                background:
                  "linear-gradient(0deg, #004C30 8.39%, rgba(255, 255, 255, 0) 52.37%)",
                position: "absolute",
                inset: 0,
              }}
            ></div>
            {/* <img src="background: `url(${item.image},"/> */}
            <div
              style={{
                background: `url(${item.image}) center / cover no-repeat`,
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  background:
                    "linear-gradient(0deg, rgba(43, 184, 132, 1.00) 100.0%, rgba(19, 82, 59, 1.00) 0.0%)",
                  opacity: isHovered ? 1 : 0,
                  height: "548px",
                  width: "100%",
                  mixBlendMode: "multiply",
                  transition: "opacity 1s ease-in",
                }}
              ></div>
            </div>

            <div
              style={{
                position: "absolute",
                height: "54px",
                width: "calc(100% - 20px - 20px)",
                left: "0px",
                bottom: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "10px",
                padding: "20px",
                opacity: isHovered ? 0 : 1,
                transition: "opacity 0.2s ease-in",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "54px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "#fef8f3ff",
                      fontFamily: "Reckless TRIAL",
                      fontSize: "24px",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      fontFamily: "Reckless TRIAL",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontWeight: 430,
                      color: "#fef8f3ff",
                      fontFamily: "Matter-TRIAL",
                      fontSize: "16px",
                      lineHeight: "19px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Certified personal trainer
                  </span>
                </div>
                {/* Star Ratings */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src={yellow_star} alt={`Star_${index}`} />
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                padding: "24.5px",
                top: "calc(50% - 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                overflow: "hidden",
                transform: isHovered ? "translateY(0%)" : "translateY(130%)",
                transition: "transform 0.7s ease-in",
              }}
            >
              <span
                style={{
                  color: "#fef8f3ff",
                  fontFamily: "Reckless TRIAL Light",
                  fontSize: "32px",
                  lineHeight: "36px",
                  textAlign: "left",
                }}
              >
                The ashwagandha gummy has been a game-changer for me! It helped
                me through stressful days and I also noticed a significant
                improvement in my energy levels.
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "32px",
                transform: isHovered ? "translateY(0%)" : "translateY(-200%)",
                transition: "transform 0.2s ease-in",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "45px",
                  width: "45px",
                }}
              >
                <img
                  src={quote}
                  alt="quote"
                  style={{
                    position: "absolute",
                    height: "45px",
                    width: "45px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
