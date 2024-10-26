import React, { useEffect, useState, useRef } from "react";
import shilajit from "../../../../assets/shilajit.png";
import ginseng from "../../../../assets/ginseng.png";
import Ashwagandha from "../../../../assets/ashwagandha.png";
import Inulin from "../../../../assets/inulin.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import LoopingText from "../product/LoopingText";
import ArrowButton from "../../common/ArrowButton.jsx";

function Ingredients() {
  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 1024
  );
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Update layout based on window width
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileLayout(true);
      } else {
        setIsMobileLayout(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check scroll position to enable/disable arrows
  const handleScrollCheck = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      setCanScrollLeft(scrollContainer.scrollLeft > 0);
      setCanScrollRight(
        scrollContainer.scrollWidth - scrollContainer.scrollLeft >
          scrollContainer.clientWidth
      );
    }
  };

  // Scroll left or right
  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 250; // Adjust scroll amount as needed
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const list = [
    {
      image: shilajit,
      name: "Shilajit",
      description:
        "Boosts energy, supports cellular health, and enhances overall vitality with rich minerals and fulvic acid",
    },
    {
      image: Ashwagandha,
      name: "KSM-66 Ashwagandha",
      description:
        "Reduces stress, anxiety, and fatigue, while enhancing physical performance and supporting cognitive function",
    },
    {
      image: Inulin,
      name: "Inulin",
      description:
        "Enhances vitality, supports hormonal balance, boosts physical performance, and promotes healthy testosterone levels",
    },
    {
      image: ginseng,
      name: "Ginseng",
      description:
        "Improves stamina, enhances vitality, and supports reproductive health by promoting hormonal balance and physical endurance",
    },
    // Add more ingredients if necessary
  ];

  return (
    <div
      id="ingredientsContainer"
      style={{
        display: "flex",
        gap: 64,
        padding: "80px 80px",
        flexDirection: "column",
      }}
    >
      <LoopingText />
      <div
        id="_843_14322_Content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "nowrap",
          gap: "48px",
        }}
      >
        {!isMobileLayout && (
          <div
            style={{
              display: "flex",
              fontSize: "50px",
              border: "1px solid #13523B",
              color: canScrollLeft ? "#13523B" : "#ccc",
              borderRadius: 30,
              padding: "0px 20px",
              margin: "auto 0px",
              height: "fit-content",
              cursor: canScrollLeft ? "pointer" : "not-allowed",
            }}
            onClick={() => canScrollLeft && scroll("left")}
          >
            <IoIosArrowRoundBack />
          </div>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScrollCheck}
          style={{
            display: "flex",
            gap: 30,
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none", // for Internet Explorer
            scrollBehavior: "smooth", // smooth scrolling
          }}
        >
          {list.map((item) => (
            <div
              key={item.name}
              id="_843_14323__Feature_text"
              style={{
                // flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "16px",
                maxWidth: "250px",
                width: "250px",
              }}
            >
              <img
                id="_843_14"
                src={item.image}
                alt={item.name}
                style={{ position: "relative" }}
              />
              <div
                id="_843_14329_Content"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "20px",
                }}
              >
                <div
                  id="_843_14330_Text_and_supporting_text"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "8px",
                  }}
                >
                  <div
                    id="_843_14331_Frame_1820554909"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      gap: "8px",
                    }}
                  >
                    <span
                      id="Shilajit"
                      style={{
                        color: "#13523bff",
                        fontFamily: "Reckless TRIAL",
                        fontSize: "24.0px",
                        fontWeight: "380",
                        letterSpacing: "-4.0%",
                        textAlign: "left",
                        textWrap: "nowrap",
                        position: "relative",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>

                  <span
                    id="Supporting_text"
                    style={{
                      color: "#1e1e1eff",
                      fontFamily: "Matter-TRIAL",
                      fontSize: "16.0px",
                      fontWeight: "430",
                      lineHeight: "20px",
                      letterSpacing: "-1.0%",
                      textAlign: "center",
                      position: "relative",
                      width: "250px",
                    }}
                  >
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMobileLayout && (
          <div
            style={{
              display: "flex",
              fontSize: "50px",
              border: "1px solid #13523B",
              color: canScrollRight ? "#13523B" : "#ccc",
              borderRadius: 30,
              padding: "0px 20px",
              margin: "auto 0px",
              height: "fit-content",
              cursor: canScrollRight ? "pointer" : "not-allowed",
            }}
            onClick={() => canScrollRight && scroll("right")}
          >
            <IoIosArrowRoundForward />
          </div>
        )}
      </div>

      {isMobileLayout && (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "50px",
              border: "1px solid #13523B",
              color: canScrollLeft ? "#13523B" : "#ccc",
              borderRadius: 30,
              padding: "0px 20px",
              margin: "auto 0px",
              height: "fit-content",
              cursor: canScrollLeft ? "pointer" : "not-allowed",
            }}
            onClick={() => canScrollLeft && scroll("left")}
          >
            <IoIosArrowRoundBack />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "50px",
              border: "1px solid #13523B",
              color: canScrollRight ? "#13523B" : "#ccc",
              borderRadius: 30,
              padding: "0px 20px",
              margin: "auto 0px",
              height: "fit-content",
              cursor: canScrollRight ? "pointer" : "not-allowed",
            }}
            onClick={() => canScrollRight && scroll("right")}
          >
            <IoIosArrowRoundForward />
          </div>
        </div>
      )}
      <div
        id="_64_1103_Button_default2"
        style={{
          position: "relative",
          height: "48px",
          width: "225px",
          alignSelf: "center",
        }}
      >
        <ArrowButton
          label="Learn More"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  );
}

export default Ingredients;
