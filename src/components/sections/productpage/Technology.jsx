import React, { useEffect, useState, useRef } from "react";
import tableCount from "../../../../assets/tablecount.png";
import { FaCircleCheck } from "react-icons/fa6";
import heal from "../../../../assets/heal.svg";
import TableAnimation from "./tableAnimation/TableAnimation";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";

function Technology() {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });

  const socialRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  useEffect(() => {
    const options = {
      root: null, // Relative to viewport
      rootMargin: "0px",
      threshold: 0.7, // Trigger when 50% of the footer is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true); // Start animation when footer is visible
        } else {
          setIsAnimating(false); // Stop animation when footer is out of view
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
      id="technology"
      ref={socialRef}
      style={{
        fontSize: "larger",
        padding: "80px 80px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                overflow: "visible",
                height: "90px",
                minHeight: "fit-content",
              }}
            >
              <span
                ref={textRef}
                id="technology_heading"
                style={{
                  fontSize: "50px",
                  textWrap: "wrap",
                  height: "50px",
                  position: "relative",
                }}
              >
                ShilAbsorb™ Patented Technology
              </span>
            </div>
            <div
              style={{
                width: "fit-content",
                display: "flex",
                gap: 8,
                flexDirection: "column",
                fontWeight: "lighter",
                fontFamily: "Matter-TRIAL",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaCircleCheck style={{ marginRight: 10, color: "#13523B" }} />
                The only Shilajit tested for Bioavailability
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaCircleCheck style={{ marginRight: 10, color: "#13523B" }} />
                7th generation, first-of-its-kind Shilajit
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaCircleCheck style={{ marginRight: 10, color: "#13523B" }} />
                75% Fulvic Acid from pure resin
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaCircleCheck style={{ marginRight: 10, color: "#13523B" }} />
                Patented aqueous extraction technique
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "white",
              flexDirection: "column",
              width: 400,
              padding: 10,
              borderRadius: "16px",
            }}
          >
            <img style={{ width: 100 }} src={heal} />
            <span
              style={{
                padding: 30,
                paddingTop: 20,
                fontFamily: "Matter-TRIAL",
                lineHeight: "24px",
                fontSize: "18px",
              }}
            >
              <span style={{ color: "#13523B" }}>Bioavailability</span> is how
              efficiently a substance is absorbed into your body and how much of
              it your body uses
            </span>
          </div>
        </div>
        <div
          id="technology_image_container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            style={{
              width: "20vw",
            }}
            src={tableCount}
          />
          <TableAnimation isAnimating={isAnimating} />
        </div>
      </div>
    </div>
  );
}

export default Technology;
