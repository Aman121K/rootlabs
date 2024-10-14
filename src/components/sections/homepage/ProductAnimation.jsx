import React, { useEffect, useRef, useState } from "react";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import Lottie from "lottie-react";
// import gummies from "../../../../assets/1a.mp4.lottie.json";
// import gummies from "../../../../assets/RENDER 14.mp4.lottie.json";
import gummies from "../../../../assets/RENDER 14.mp4.lottie60fps30.json";
import animationData from "../../../../assets/roundGummies.json";

const GeneratedComponent = () => {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  const [animationProgress, setAnimationProgress] = useState(0);

  const lottieRef1 = useRef(null); // Reference for the first Lottie animation
  const lottieRef2 = useRef(null); // Reference for the second Lottie animation
  const animationContainerRef = useRef(null); // Reference for the animation container
  const [isInView, setIsInView] = useState(false); // State to track if container is in view

  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 970
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting); // Set the state based on visibility
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the container is visible
    );

    if (animationContainerRef.current) {
      observer.observe(animationContainerRef.current);
    }

    const handleResize = () => {
      if (window.innerWidth <= 970) {
        setIsMobileLayout(true);
      } else {
        setIsMobileLayout(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationContainerRef.current) {
        observer.unobserve(animationContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && animationContainerRef.current) {
        const rect = animationContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Dynamic offset based on the container's height and screen width
        const dynamicOffset =
          windowWidth > 1024
            ? rect.height * 0.85 // 20% of the container's height for larger screens
            : rect.height * 0.8; // 10% of the container's height for smaller screens

        // Calculate scroll progress dynamically based on the offset
        const scrollProgress = Math.min(
          Math.max(
            (windowHeight - rect.top - dynamicOffset) /
            (windowHeight + rect.height),
            0
          ),
          1
        );

        // Set the progress for both Lottie animations based on scroll progress
        const lottie1Progress = Math.min(1, scrollProgress * 2); // Scale progress for first Lottie
        const lottie2Progress = Math.min(Math.min(1, scrollProgress * 2), 0.3903604); // 3.603604 Scale progress for second Lottie
        // lottieRef2.current.style.transform = `translateY( -${scrollProgress}px)`; // Move the second Lottie animation
        if (lottieRef1.current) {
          lottieRef1.current.goToAndStop(lottie1Progress * 200, true); // Assuming 100 frames
        }

        if (lottieRef2.current) {
          lottieRef2.current.goToAndStop(lottie2Progress * 60, true); // Assuming 100 frames
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <div
      id="_1051_3144_Frame_2018776319"
      style={{
        position: "relative",
        background: "rgba(242, 240, 232, 1.00)",
        padding: "40px 60px",
        // height: "", // Increase height to allow enough scrolling
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:"1100px"
      }}
    >
      <div
        id="_1051_3189_Frame_1820554708"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <span
          id="Handpicked_in_Nature"
          style={{
            color: "#13523bff",
            fontFamily: "Matter-TRIAL",
            fontSize: "16.0px",
            fontWeight: "430",
            lineHeight: "120%",
            letterSpacing: "1.3px",
            textTransform: "uppercase",
            textAlign: "center",
            position: "relative",
          }}
        >
          Handpicked in Nature
        </span>
        <div
          style={{
            overflow: "hidden",
            height: isMobileLayout ? "60px" : "130px",
          }}
        >
          {isMobileLayout ? (
            <span
              ref={textRef}
              id="Wellness"
              style={{
                color: "#000000ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "32.0px",
                fontWeight: "400",
                letterSpacing: "-1.8px",
                textAlign: "center",
                position: "relative",
                height: 100,
                opacity: 0,
              }}
            >
              Elevate Your Wellness
            </span>
          ) : (
            <span
              ref={textRef}
              id="A_Gummy_that_is_Natural__Potent__Delicious"
              style={{
                color: "#000000ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "50.0px",
                fontWeight: "400",
                letterSpacing: "-1.8px",
                textAlign: "center",
                position: "relative",
                height: 100,
                opacity: 0,
              }}
            >
              A Gummy that is Natural, Potent, Delicious
            </span>
          )}
        </div>
      </div>


      <div
        ref={animationContainerRef}
        style={{
          position: "relative",
          width: "200%",
          maxWidth: "1000px",
          aspectRatio: "1/1",
          // top:"-200px"
        }}
      >

        <Lottie
          id="product_animation_lottie"
          style={{
            position: "absolute",
            width: "70%",
            top: "27%",
            left:"15%",
            // bottom:"5%"
            // transform: "translateX(-50%)",
          }}
          lottieRef={lottieRef2}
          animationData={gummies}
          loop={false}
          autoplay={false} // Autoplay is false since we're controlling progress via scroll
        />
        <Lottie
          style={{
            // left: "50%",
            // transform: "translateX(-50%)",
            position: "absolute",
            width: "70%",
            left:"15%",
            // minWidth: "500px"
          }}
          id="firstLottie"
          lottieRef={lottieRef1}
          animationData={animationData}
          loop={false}
          autoplay={false} // Autoplay is false for scroll control
        />
         <div style={{
      width: '200px',
      height: '400px',
      transform: 'rotate(90deg) ',
      position: 'absolute',
      bottom:"-10%",
      left:"40%",
      filter:"blur(10px)",
      background: 'radial-gradient(circle at -30% 50%, transparent 10%, #F2F0E8 51%)',
      borderRadius: '50%',
    }}>
    </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
