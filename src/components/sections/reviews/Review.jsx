import React from "react";
import ReviewProfile from "./ReviewProfile";
import ReviewDescription from "./ReviewDescription";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

function Review() {
  return (
    <div
      style={{
        display: "flex",
        gap: 120,
        borderTop: "1px solid #D9D9D9",
        width: "100%",
        padding: "60px 0px",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <ReviewProfile />
      <ReviewDescription />
    </div>
  );
}

export default Review;
