import React, { useState } from "react";
import { IoMdAdd, IoMdBackspace } from "react-icons/io";

function ExpandableBenefits({ imageSrc, title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ width: "100%",
      borderBottom: "1px solid #DFDAD5",
     }}>
      {/* Clickable Header Div */}
      <div
        onClick={toggleExpand}
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "8px",
          
          cursor: "pointer",
        }}
      >
        {title === "Gut Health"?
        <img
          src={imageSrc}
          alt="Group_5"
          style={{ position: "relative", height: "48px", width: "48px", marginLeft: "10px", marginRight: "7px" }}
        />
        :
        <img
          src={imageSrc}
          alt="Group_5"
          style={{ position: "relative", height: "67px", width: "67px" }}
        />
      
      }
        <span
          style={{
            color: "#1e1e1eff",
            fontFamily: "Matter-TRIAL-Light",
            fontSize: "18px",
            fontWeight: "430",
            lineHeight: "24px",
            letterSpacing: "-1.0%",
            textAlign: "left",
            marginRight: "auto",
          }}
        >
          {title}
        </span>
        {!isExpanded ? (
          <IoMdAdd />
        ) : (
          <span
            style={{
              fontFamily: "Matter-TRIAL-Light",
              fontSize: "32px",
              fontWeight: "430",
              lineHeight: "24px",
              letterSpacing: "-1.0%",
              textAlign: "left",
            }}
          >
            -
          </span>
        )}
      </div>

      {/* Expandable Content with smooth animation */}
      <div
        style={{
          maxHeight: isExpanded ? "200px" : "0px", // Change max-height for animation
          overflow: "hidden", // Hide content when not expanded
          transition: "max-height 0.3s ease-in-out", // Smooth transition
          marginLeft: "8px",
          paddingLeft:"60px",
          textWrap:"wrap"
        }}
      >
        <div
          style={{
            padding: isExpanded ? "8px" : "0px", // Add padding only when expanded
            opacity: isExpanded ? 1 : 0, // Smooth appearance of text
            transition: "opacity 0.3s ease-in-out, padding 0.3s ease-in-out", // Smooth transition for padding and opacity
          }}
        >
          
            {children}
        </div>
      </div>
    </div>
  );
}

export default ExpandableBenefits;
