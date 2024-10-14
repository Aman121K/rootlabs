import React from "react";
import { MdAdd } from "react-icons/md";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import ExpandableQuestion from "./ExpandableQuestion.jsx";

function Questions() {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  return (
    <div
      id="questions"
      style={{
        padding: "80px 80px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap:30
      }}
    >
      <div
        id="_64_736_Frame_1820554699"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          gap: "16px",
          flex: 1,
          marginRight: 50,
        }}
      >
        <span
          id="OUR_PRODUCTS"
          style={{
            color: "#13523bff",
            fontFamily: "Matter-TRIAL",
            fontSize: "16.0px",
            fontWeight: "430",
            lineHeight: "120%",
            letterSpacing: "8.0%",
            position: "relative",
          }}
        >
          FAQ'S
        </span>
        <div
          style={{
            overflow: "hidden",
            height: "90px",
          }}
        >
          <span
            ref={textRef}
            id="Expand_Your_Roots_with_Our_Goodness"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Reckless TRIAL",
              fontSize: "48.0px",
              fontWeight: "400",
              lineHeight: "124%",
              letterSpacing: "-3.0%",
              height: "69.0px",
              position: "relative",
            }}
          >
            We Love Questions
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          fontFamily: "Matter-TRIAL",
          fontSize: "20.0px",
          minWidth: 350,
        }}
      >
        {[
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "Clinically sdvdfProven Benefits1",
          },
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "With our patented ShilAbsorb technology, this gummy packs 3000mg of shilajit resin at a 10:1 concentrate — maximizing bioavailability and creating powerful results with no added sugar.",
          },
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "Clinically sdvdfProven Benefits1",
          },
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "Clinically sdvdfProven Benefits1",
          },
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "Clinically sdvdfProven Benefits1",
          },
          {
            heading: "Clinically sdvdfProven Benefits1",
            content: "Clinically sdvdfProven Benefits1",
          },
        ].map((item, index) => (
          <ExpandableQuestion key={index} title={item.heading}>
            {item.content}
          </ExpandableQuestion>
        ))}
      </div>
    </div>
  );
}

export default Questions;
