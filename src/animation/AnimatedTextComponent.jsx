import React from "react";
import './App.css'; // Assuming keyframes are defined here
import { useIntersectionAnimation } from "./useIntersectionAnimation";

const AnimatedTextComponent = ({ id, text, styles , parentHeight }) => {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });

  return (
    <div style={{ overflow: "hidden", height: {parentHeight} }}>
      <span
        ref={textRef}
        id={id} // Set the id from props
        style={{
          ...styles // Apply custom styles to the text
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default AnimatedTextComponent;
