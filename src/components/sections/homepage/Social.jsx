import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./Social.css";
import ButtonComponent from "../../common/ArrowButton.jsx";
import Lottie from "lottie-react";
import animationData from "../../../../assets/Social.json";

const Social = () => {
  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 768
  );
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);

  const [segment, setSegment] = useState(false);
  const socialRef = useRef(null);
  const lottieRef = useRef(null);

  // Scroll listener to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      if (!socialRef.current) return;
      const rect = socialRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && !hasScrolled && !segment) {
        setHasScrolled(true);
        lottieRef.current.playSegments([10, 150], true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileLayout(true);
      } else {
        setIsMobileLayout(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={socialRef}
      id="_64_1115_Frame_2018776256"
      className={`main-container ${segment ? "scrolled" : ""}`}
    >
      <div id="_64_1116_Frame_1820554753" className="frame-container">
        <Lottie
          animationData={animationData}
          loop={false}
          autoPlay={false}
          onComplete={() => {
            if(!segment) {
              setSegment(true);
              lottieRef.current.playSegments([150, 240], true);
            }
          }}
          // autoplay={true}
          lottieRef={lottieRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        {/* Centered frame with text and button */}
        <div
          id="_64_1121_Frame_1820554754"
          className={`centered-frame ${
            segment ? "text-visible" : "text-hidden"
          }`}
        >
          <span
            id="Stay_Connected"
            style={{
              color: "#1e1e1eff",
              fontSize: "56.0px",
              fontFamily: "Reckless TRIAL Light",
              fontWeight: "380",
              lineHeight: "124%",
              letterSpacing: "-3.0%",
              textAlign: "center",
              height: "69.0px",
              width: "347.0px",
              position: "relative",
              textWrap: "nowrap",
            }}
          >
            Stay Connected
          </span>
          <ButtonComponent
            label="Visit Instagram"
            theme="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
