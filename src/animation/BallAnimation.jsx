import React, { useEffect } from "react";
import "./Footer.css";
import ball from '../../assets/ball.svg';

const BallAnimation = ({ imagesRef, isAnimating }) => {
  const numBalls = 4;

  useEffect(() => {
    // Ensure all images have loaded before triggering animation
    imagesRef.current.forEach((img, index) => {
      if (img) {
        img.onload = () => {
          if (isAnimating) {
            img.classList.add("fall"); // Add animation class when animating
          }
        };
      }
    });
  }, [isAnimating, imagesRef]);

  return (
    <>
      {[...Array(numBalls)].map((_, index) => {
        const isEven = index % 2 === 0;

        return (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            id={`_64_1189_${index}`}
            src={ball}
            alt={`ball_${index}`}
            className={`ball ${isAnimating ? "fall" : ""}`} // Conditionally apply animation class
            style={{
              height: "calc(50%)",
              width: "calc(50%)",
              position: "absolute",
              left: `calc(25% + (2.5% * ${isEven ? -1 : 1}))`, // Start from the center
              top: `calc(+48%)`, // Initial top position
              transform: `translateX(-50%)`, // Center horizontally
              zIndex: 100,
              overflow: "hidden",
              "--moveX": `calc(${isEven ? "-18" : "18"}% * ${index + 1})`, // Custom property for lateral movement
              "--posY": `${-index * 1000 - 500}px`, // Custom property for vertical movement
            }}
          />
        );
      })}
    </>
  );
};

export default BallAnimation;
