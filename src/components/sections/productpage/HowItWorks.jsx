import React, { useEffect, useRef, useState } from "react";
import pic1 from "../../../../assets/howItWorks1.png";
import pic2 from "../../../../assets/howItWorks2.png";
import pic3 from "../../../../assets/howItWorks3.png";
import pic4 from "../../../../assets/howItWorks4.png";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import ArrowButton from "../../common/ArrowButton";
import ScrollMove from "../../../animation/ScrollImage";
import MonthCard from "./MonthCard";
function HowItWorks() {
  const animation = "slideUp 0.7s ease-in forwards";
  // const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  const parentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [monthsData, setMonthsData] = useState([
    {
      month: 1,
      image: pic1,
      title: "Energy Boost",
      description: "Initial boost in energy levels",
    },
    {
      month: 2,
      image: pic2,
      title: "Energy Boost",
      description: "Initial boost in energy levels",
    },
    {
      month: 3,
      image: pic3,
      title: "Energy Boost",
      description: "Initial boost in energy levels",
    },
    {
      month: 4,
      image: pic4,
      title: "Energy Boost",
      description: "Initial boost in energy levels",
    },
  ]);

  // useEffect(() => {
  //   // Set up an interval to update isHovered every 2 seconds
  //   setIsHovered(0);
  //   const intervalId = setInterval(() => {
  //     setIsHovered((prevHovered) => (prevHovered + 1) % 4); // Loop between 0 and 3
  //   }, 3000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHovered((prevHovered) => {
        const nextIndex = (prevHovered + 1) % monthsData.length;
        if (isInView)
          document
            .getElementById(`pdp-work-card-${nextIndex}`)
            .scrollIntoView({ behavior: "smooth", block: "nearest" });
        return nextIndex;
      });
    }, 3000); // Adjust interval as needed

    return () => clearInterval(intervalId);
  }, [monthsData.length, isInView]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         setIsInView(entry.isIntersecting); // Set isInView based on intersection status
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   const target = parentRef.current;
  //   if (target) {
  //     observer.observe(target);
  //   }

  //   return () => {
  //     if (target) {
  //       observer.unobserve(target);
  //     }
  //   };
  // }, [parentRef]);

  return (
    <div
      ref={parentRef}
      id="_843_14226_Frame_2018776380"
      style={{
        background: "#13523B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "10px",
        padding: "80px 80px 80px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollMove
        direction="down"
        speed={0.25}
        top={100}
        leftPercentage={0} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <div
          id="_64_916_Ellipse_1599"
          style={{
            position: "absolute",
            borderColor: "#f2f0e8ff",
            borderStyle: "solid",
            borderWidth: "1.5px",
            transform: "translateX(-50%) translateY(-50%)",
            height: "286.91961669921875px",
            width: "286.91961669921875px",
            borderRadius: "50%",
            left: "0px",
            // top: "1000px",
          }}
        ></div>
      </ScrollMove>

      <div
        id="_843_14227_Frame_1820554799"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          gap: "64px",
        }}
      >
        <div
          id="_843_14228_Frame_1820554699"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "16px",
          }}
        >
          <span
            id="HOW_IT_WORKS"
            style={{
              color: "#e8ddd3ff",
              fontFamily: "Matter-TRIAL",
              fontSize: "16.0px",
              fontWeight: "430",
              letterSpacing: "8.0%",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            HOW IT WORKS
          </span>
          <div
            style={{
              overflow: "visible",
              display: "flex",
              height: "90px",
            }}
          >
            <span
              // ref={textRef}
              className="TEXT_HEADING_STYLE text-center"
              id="Your_Journey_to_Holistic_Health"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "50.0px",
                fontWeight: "380",
                letterSpacing: "-3.0%",
                textAlign: "center",
                position: "relative",
              }}
            >
              Your Journey to Holistic Health
            </span>
          </div>
        </div>
        <div
            id="_843_14287_Button_default"
            style={{
              overflow: "hidden",
              height: "56.0px",
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            <ArrowButton
              label="Subscribe Now"
              theme="white"
              onClick={() => window.scrollTo(0, 0)}
            />
          </div>
        <div
          id="_843_14231_Frame_2018776432"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            gap: "48px",
          }}
        >
          <div
            id="_843_14232_Frame_1820554914"
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            <div
              id="_843_14233_Frame_2018776406"
              ref={parentRef}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                flexWrap: "nowrap",
                overflowX: "scroll",
                gap: "32px",
                margin: "auto",
                minHeight: "40vw",
                scrollbarWidth: "none", // for Firefox
                msOverflowStyle: "none",
                width: "100%",
              }}
            >
              {monthsData.map((item, index) => {
                return (
                  <MonthCard
                    key={index}
                    isHovered={isHovered}
                    // setIsHovered={setIsHovered}
                    item={item}
                    index={index}
                    isInView={isInView}
                  />
                );
              })}
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
