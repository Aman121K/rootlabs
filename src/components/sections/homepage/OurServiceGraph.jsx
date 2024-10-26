import React, { useEffect, useState, useRef } from "react";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import Lottie from "lottie-react";
import animationData from "../../../../assets/Flow 2.json";

const GeneratedComponent = () => {
  const animation = "slideUp 0.5s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });

  const socialRef = useRef(null);
  const lottieRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  useEffect(() => {
    const options = {
      root: null, // Relative to viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the footer is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true); // Start animation when footer is visible
          // lottieRef.current.goToAndStop(10, true);
          lottieRef.current.play();
        }
      });
    }, options);

    if (socialRef.current) {
      observer.observe(socialRef.current);
    }

    return () => {
      if (socialRef.current) {
        observer.unobserve(socialRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={socialRef}
      id="_64_951_Frame_2018776345"
      className="mobile_section_padding"
      style={{
        position: "relative",
        background: "rgba(242, 240, 232, 1.00)",
        transform: "rotate(0.00deg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "10px",
        padding: "64px 105px",
      }}
    >
      <div
        id="_64_952_Frame_2018776366"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <div
          id="_64_953_Frame_2018776310"
          style={{
            position: "relative",
            transform: "rotate(-0.00deg)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "16px",
          }}
        >
          <span
            id="Our_science"
            style={{
              color: "#13523bff",
              fontFamily: "Matter-TRIAL",
              fontSize: "16.0px",
              fontWeight: "430",
              lineHeight: "120%",
              letterSpacing: "8.0%",
              textTransform: "uppercase",
              textAlign: "center",

              position: "relative",
            }}
          >
            Our science
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              height: "90px",
              width: "100%",
            }}
          >
            <span
              ref={textRef}
              className="m_align_center TEXT_HEADING_STYLE"
              id="Real_Results__Real_Transformation"
              style={{
                color: "#1e1e1eff",
                fontSize: "56.0px",
                fontFamily: "Reckless TRIAL",
                fontWeight: 380,
                lineHeight: "124%",
                letterSpacing: "-0.9px",
                textAlign: "center",
                opacity: 0,
                position: "relative",
              }}
            >
              Real{" "}
              <span
                style={{
                  fontFamily: "Reckless TRIAL Regular Italic",
                }}
              >
                Results
              </span>
              , Real{" "}
              <span
                style={{
                  fontFamily: "Reckless TRIAL Regular Italic",
                }}
              >
                Transformation
              </span>
            </span>
          </div>
        </div>

        <div
          id="graph-container"
          style={{
            display: "flex",
            position: "relative",
            width: "90vw",
            // height: "50vw",
            // minHeight: "400px",
            justifySelf: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
          }}
        >
            <Lottie
              animationData={animationData}
              // loop={false}
              autoplay={false}
              lottieRef={lottieRef}
            />
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
