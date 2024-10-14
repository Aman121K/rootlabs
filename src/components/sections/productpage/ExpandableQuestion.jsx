import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

function ExpandableQuestion({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Clickable Header Div */}

      <div
        onClick={toggleExpand}
        style={{
          borderTop: "1px solid #DFDAD5",
          display: "flex",
          justifyContent: "space-between",
          padding: isExpanded? "20px 0px 20px 0px" : "20px 0px 40px 0px",
          fontWeight: 500,
        }}
      >
        {title}{" "}
        {!isExpanded ? (
          <MdAdd style={{
            color: "#13523B",
          }}/>
        ) : (
          <span
            style={{
              fontFamily: "Matter-TRIAL-Light",
              fontSize: "32px",
              fontWeight: "430",
              lineHeight: "24px",
              letterSpacing: "-1.0%",
              textAlign: "left",
              color: "#13523B",
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
        }}
      >
        <div
          style={{
            padding: isExpanded ? "0px 0px 40px 0px" : "0px", // Add padding only when expanded
            opacity: isExpanded ? 1 : 0, // Smooth appearance of text
            transition: "opacity 0.3s ease-in-out, padding 0.3s ease-in-out", // Smooth transition for padding and opacity
          }}
        >
          <span
            style={{
              color: "#555",
              fontFamily: "Matter-TRIAL",
              fontSize: "16px",
              lineHeight: "22px",
              width: "100%",
            }}
          >
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExpandableQuestion;
