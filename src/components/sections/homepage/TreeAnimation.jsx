import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { BottomRoot, BottomRoot2 } from "./treeAnimation/BottomRoot";
import TopRoot from "./treeAnimation/TopRoot";
import Spice from "./treeAnimation/Spice";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import ScrollMove from "../../../animation/ScrollImage";
import animationData from "../../../../assets/insulinLottie.json";
import Lottie from "lottie-react";

import tAshwagandha from "../../../../assets/ashwa.png";
import tBlackMuesli from "../../../../assets/black-musli.png";
import tGokshura from "../../../../assets/gokshura.png";
import tSeaMoss from "../../../../assets/spice2.svg";
import tShilajitRocks from "../../../../assets/spice4.svg";

import semicircle from "../../../../assets/ellipse.svg";

const GeneratedComponent = () => {
  const inulinIA = useIntersectionAnimation("slideUp 0.7s ease-in forwards", {
    threshold: 0.1,
  });
  const navigate = useNavigate();
  const parentRef = useRef(null);
  const [presentState, setPresentState] = useState({
    name: "Shilajit",
    color: "#e5732e",
  });

  const [animationComplete, setAnimationComplete] = useState(false); // Track hello animation completion
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  const [states, setStates] = useState([
    { name: "Shilajit", color: "#e5732e" },
    { name: "Sea Moss", color: "#9da863" },
    { name: "Turmeric", color: "#f4c416" },
    { name: "Mushroom", color: "#daa360" },
  ]);
  const [isSmallLayout, setIsSmallLayout] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    // Function to update the layout based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsSmallLayout(true);
      } else {
        setIsSmallLayout(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spicesRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const spicesLabelRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const topRef = useRef(null);
  const BottomRef = useRef(null);

  const getIndex = () => {
    if (presentState.name === "Shilajit") return 0;
    if (presentState.name === "Sea Moss") return 1;
    if (presentState.name === "Turmeric") return 2;
    if (presentState.name === "Mushroom") return 3;
    return 4;
  };
  const handleTitle = (id, isShow) => {
    if (isShow) {
      document.getElementById(id).style.opacity = "1";
      document.getElementById(id).style.scale = "1";
    } else {
      document.getElementById(id).style.opacity = "0";
      document.getElementById(id).style.scale = "0";
    }
  };

  useEffect(() => {
    const handleLottie = (value) => {
      if (value <= 100) {
        spicesRef.current[0].current.play(); // For values between 70 and 100
        handleTitle(spicesLabelRef.current[0].current.id, true);
      } else {
        spicesRef.current[0].current.goToAndStop(0, true);
        handleTitle(spicesLabelRef.current[0].current.id, false);
      }

      if (value < 70) {
        spicesRef.current[2].current.play(); // For values between 50 and 70
        handleTitle(spicesLabelRef.current[2].current.id, true);
      } else {
        spicesRef.current[2].current.goToAndStop(0, true);
        handleTitle(spicesLabelRef.current[2].current.id, false);
      }

      if (value < 50) {
        spicesRef.current[1].current.play(); // For values between 35 and 50
        handleTitle(spicesLabelRef.current[1].current.id, true);
      } else {
        spicesRef.current[1].current.goToAndStop(0, true);
        handleTitle(spicesLabelRef.current[1].current.id, false);
      }

      if (value < 35) {
        spicesRef.current[4].current.play(); // For values between 30 and 35
        handleTitle(spicesLabelRef.current[4].current.id, true);
      } else {
        spicesRef.current[4].current.goToAndStop(0, true);
        handleTitle(spicesLabelRef.current[4].current.id, false);
      }
      if (value == 0) {
        spicesRef.current[3].current.play(); // For values between 0 and 30
        handleTitle(spicesLabelRef.current[3].current.id, true);
      } else {
        spicesRef.current[3].current.goToAndStop(0, true);
        handleTitle(spicesLabelRef.current[3].current.id, false);
      }

      if (isSmallLayout) {
        if (value <= 68) {
          spicesRef.current[5].current.play(); // For values between 0 and 30
          handleTitle(spicesLabelRef.current[5].current.id, true);
        } else {
          spicesRef.current[5].current.goToAndStop(0, true);
          handleTitle(spicesLabelRef.current[5].current.id, false);
        }
      } else {
        if (value <= 30) {
          spicesRef.current[5].current.play(); // For values between 0 and 30
          handleTitle(spicesLabelRef.current[5].current.id, true);
        } else {
          spicesRef.current[5].current.goToAndStop(0, true);
          handleTitle(spicesLabelRef.current[5].current.id, false);
        }
      }
    };

    // Handle scroll animation for hello image
    const handleScrollForHello = () => {
      if (topRef.current) {
        const elementTop = topRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate visible percentage of the hello element in the viewport
        const visiblePercentage = Math.min(
          Math.max(0, (windowHeight - elementTop) / windowHeight),
          1
        );

        // Apply the clip-path based on scroll
        const clipValue = `0 0 ${180 - visiblePercentage * 180}% 0`;
        topRef.current.style.clipPath = `inset(${clipValue})`;

        // If fully visible (or mostly visible), mark animation as complete
        if (visiblePercentage === 1) {
          setAnimationComplete(true);
        }
      }
    };

    // Handle scroll animation for other images sequentially
    const handleScrollForOthers = () => {
      if (BottomRef.current) {
        const elementTop = BottomRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate visible percentage of the element in the viewport
        const visiblePercentage = Math.min(
          Math.max(0, (windowHeight - elementTop) / windowHeight),
          1
        );
        const clipCoefficient = 300 - visiblePercentage * 300;
        handleLottie(clipCoefficient);
        // Apply the clip-path based on scroll
        const clipValue = `0 0 ${clipCoefficient}% 0`;

        BottomRef.current.style.clipPath = `inset(${clipValue})`;
      }
    };

    // Add scroll event listener for hello
    window.addEventListener("scroll", handleScrollForHello);

    // When hello animation completes, add the scroll event listener for other images
    window.addEventListener("scroll", handleScrollForOthers);
    // Cleanup the event listeners
    return () => {
      window.removeEventListener("scroll", handleScrollForHello);
      if (animationComplete) {
        window.removeEventListener("scroll", handleScrollForOthers);
      }
    };
  }, [animationComplete]); // Re-run effect

  const convertImageUrlToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob(); // Convert to Blob

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Base64 string
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(blob); // Convert Blob to base64
    });
  };

  const imageSets = [
    { tBlackMuesli: tBlackMuesli, scale: 1.5, s: [54, 53.67669105529785] },
    { tGokshura: tGokshura, scale: 1.5, s: [54, 53.67669105529785] },
    { tSeaMoss: tSeaMoss, scale: 0.9, s: [44, 43.67669105529785] },
    { tAshwagandha: tAshwagandha, scale: 1.5, s: [54, 53.67669105529785] },
    { tShilajitRocks: tShilajitRocks, scale: 1, s: [44, 43.67669105529785] },
  ];

  const generateLottieVariants = async () => {
    const variants = await Promise.all(
      imageSets.map(async (image) => {
        // Create a deep copy of the original Lottie JSON data
        const updatedData = JSON.parse(JSON.stringify(animationData));

        const [imageKey, imageValue] = Object.entries(image)[0];

        // Convert image URL to base64
        const base64Image = await convertImageUrlToBase64(imageValue);

        // Assuming the image is at index 0 in the Lottie JSON assets
        updatedData.assets[0].p = base64Image;

        updatedData.assets[0].w = 266 / image.scale;
        updatedData.assets[0].h = 216 / image.scale;

        updatedData.layers[2].ks.p.k[1].s = image.s;

        return updatedData;
      })
    );

    return variants;
  };

  const [lottieVariants, setLottieVariants] = useState([]);

  useEffect(() => {
    // Generate multiple Lottie JSONs
    const generateLottieVariant = async () => {
      const variants = await generateLottieVariants();
      setLottieVariants(variants);
    };

    generateLottieVariant();
  }, []);

  const labelStyle = {
    transition: "all 0.5s ease",
    position: "absolute",
    top: "50%", // Adjust as needed
    transform: "translateY(-50%) translateX(50%)",
    right: "0",
    color: "white",
    fontSize: isSmallLayout ? "18px" : "20px",
    fontFamily: "Matter-TRIAL",
    // textShadow:
    //   "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
  };

  return (
    <div
      ref={parentRef}
      id="_64_789_Frame_2018776311"
      className="scrollable-parent"
      style={{
        position: "relative",
        overflow: "hidden",
        height: isSmallLayout ? "1000px" : "1500px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <ScrollMove
        direction="down"
        speed={0.25}
        top={100}
        leftPercentage={90} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <img
          id="_64_916_Ellipse_15"
          src={semicircle}
          alt="Ellipse_18"
          style={{
            position: "absolute",
            right: "0px",
            height: "100px",
            transform: "translateX(20%)",
            display: isSmallLayout ? "none" : "block",
          }}
        />
      </ScrollMove>

      <ScrollMove
        direction="up"
        speed={0.25}
        top={700}
        leftPercentage={0} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <div
          id="_64_916_Ellipse_15"
          style={{
            display: isSmallLayout ? "none" : "block",
            position: "absolute",
            borderColor: "#f2f0e8ff",
            borderStyle: "solid",
            borderWidth: "1.5px",
            transform: "translateX(-50%)",
            height: "286.91961669921875px",
            width: "286.91961669921875px",
            borderRadius: "50%",
            left: "0px",
            // top: "1000px",
          }}
        ></div>
      </ScrollMove>

      <div
        id="_64_791_Frame_1820554706"
        style={{
          // position: "absolute",
          overflow: "hidden",
          background: "rgba(19, 82, 59, 1.00)",
          borderTopLeftRadius: "48.0px",
          borderTopRightRadius: "48.0px",
          height: "100%",
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <style>
          {`
          @keyframes waterFlowUp {
            0% {
              clip-path: inset(0 0 100% 0);
              opacity: 1;
            }
            100% {
              clip-path: inset(0 0 0 0);
              opacity: 1;
            }
          }
        `}
        </style>
        <div
          id="_64_796_Frame_1820554708"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: isSmallLayout ? "16px" : "24px",
          }}
        >
          <span
            id="Handpicked_in_Nature"
            style={{
              color: "#e8ddd3ff",
              fontFamily: "Matter-TRIAL",
              fontSize: "16.0px",
              fontWeight: "430",
              lineHeight: "120%",
              letterSpacing: "1.3pxs",
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
              height: isSmallLayout ? "60px" : "90px",
            }}
          >
            <span
              ref={textRef}
              id="Right_from_the_Roots"
              style={{
                color: "#f2f0e8ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "56.0px",
                fontWeight: "400",
                letterSpacing: "-1.8px",
                textAlign: "center",
                position: "relative",
                opacity: 0,
              }}
            >
              Right from the Roots
            </span>
          </div>
        </div>
        <div
          id="_64_838_Frame_1820554846"
          style={{
            background: "rgba(38, 96, 75, 1.00)",
            borderRadius: "40px",
            width: "fit-content",
            height: "48.0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            margin: "0px auto",
            marginTop: "30px",
            zIndex: 70,
            padding: "10px",
          }}
        >
          {states.map((state, index) => {
            return (
              <div
                id="_64_839_Frame_1820554843"
                style={{
                  position: "relative",
                  background:
                    presentState.name == state.name
                      ? state.color
                      : "transparent",
                  borderRadius: "40px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "8px",
                  padding: "12px 32px 12px 32px",
                  cursor: "pointer",
                }}
                onClick={() => setPresentState(state)}
              >
                <span
                  style={{
                    color: "#ffffffff",
                    fontFamily: "Matter-TRIAL",
                    fontSize: "18.0px",
                    fontWeight: "570",
                    lineHeight: "135%",
                    textAlign: "left",
                    position: "relative",
                    textWrap: "nowrap",
                  }}
                >
                  {state.name}
                </span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            margin: "0px -60px",
            flex: 1,
          }}
        >
          <div
            style={{
              position: "relative",
              width: isSmallLayout ? 320 : 1200,
              height: "100%",
              margin: "0px auto",
            }}
          >
            <div
              ref={topRef}
              style={{
                position: "absolute",
                left: isSmallLayout ? "53%" : "50%",
                transform: "translateX(-50%)",
                top: "-20px",
                zIndex: 10,
              }}
            >
              <TopRoot
                color={presentState.color}
                index={getIndex()}
                isSmall={isSmallLayout}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "53%" : "50%",
                transform: "translateX(-50%)",
                top: "-20px",
              }}
            >
              <TopRoot
                color={presentState.color}
                index={4}
                isSmall={isSmallLayout}
              />
            </div>
            {isSmallLayout ? (
              <>
                <div
                  ref={BottomRef}
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "130px",
                    zIndex: 10,
                  }}
                >
                  <BottomRoot2 color={presentState.color} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "130px",
                  }}
                >
                  <BottomRoot2 color="#26604B" />
                </div>
              </>
            ) : (
              <>
                <div
                  ref={BottomRef}
                  style={{
                    position: "absolute",
                    left: "52%",
                    transform: "translateX(-50%)",
                    top: "160px",
                    zIndex: 10,
                  }}
                >
                  <BottomRoot color={presentState.color} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "52%",
                    transform: "translateX(-50%)",
                    top: "160px",
                  }}
                >
                  <BottomRoot color="#26604B" />
                </div>
              </>
            )}

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "52%" : "50%",
                top: isSmallLayout ? "60px" : "40px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                lottieRef={spicesRef.current[0]}
                style={{
                  width: isSmallLayout ? 150 : 350,
                  height: isSmallLayout ? 150 : 350,
                }}
                animationData={animationData}
                loop={false}
                autoplay={false}
              />
              <div
                id="spice1Text1"
                ref={spicesLabelRef.current[0]}
                style={{ ...labelStyle, scale: 1 }}
              >
                Inulin
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "2%" : "13%",
                top: isSmallLayout ? "270px" : "466px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                lottieRef={spicesRef.current[1]}
                style={{
                  width: isSmallLayout ? 150 : 250,
                  height: isSmallLayout ? 150 : 250,
                }}
                animationData={lottieVariants[0]}
                loop={false}
                autoplay={false}
              />
              <div
                ref={spicesLabelRef.current[1]}
                id="spice1Text2"
                style={{
                  ...labelStyle,
                  top: isSmallLayout ? "85%" : "85%",
                  left: isSmallLayout ? "50%" : "30%",
                  transform: "translateX(-50%)",
                  width: "max-content",
                }}
              >
                Shilajit
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "40%" : "38%",
                top: isSmallLayout ? "170px" : "320px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                ref={spicesLabelRef.current[0]}
                lottieRef={spicesRef.current[2]}
                style={{
                  width: isSmallLayout ? 150 : 250,
                  height: isSmallLayout ? 150 : 250,
                }}
                animationData={lottieVariants[1]}
                loop={false}
                autoplay={false}
              />
              <div
                ref={spicesLabelRef.current[2]}
                id="spice1Text3"
                style={{
                  ...labelStyle,
                  top: "90%",
                  left: isSmallLayout ? "10%" : "50%",
                  transform: isSmallLayout
                    ? "translateX(0%)"
                    : "translateX(-50%)",
                  width: "max-content",
                }}
              >
                Gokshura
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "34%" : "39%",
                top: isSmallLayout ? "385px" : "685px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                lottieRef={spicesRef.current[3]}
                style={{
                  width: isSmallLayout ? 150 : 250,
                  height: isSmallLayout ? 150 : 250,
                }}
                animationData={lottieVariants[2]}
                loop={false}
                autoplay={false}
              />
              <div
                id="spice1Text4"
                ref={spicesLabelRef.current[3]}
                style={{
                  ...labelStyle,
                  top: "90%",
                  left: "20%",
                  transform: "translateX(-50%)",
                  width: "max-content",
                }}
              >
                Ashwagandha
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "77%" : "65%",
                top: isSmallLayout ? "330px" : "596px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                lottieRef={spicesRef.current[4]}
                style={{
                  width: isSmallLayout ? 150 : 250,
                  height: isSmallLayout ? 150 : 250,
                }}
                animationData={lottieVariants[3]}
                loop={false}
                autoplay={false}
              />
              <div
                ref={spicesLabelRef.current[4]}
                id="spice1Text5"
                style={{
                  ...labelStyle,
                  top: "90%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "max-content",
                }}
              >
                Black Musli
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: isSmallLayout ? "87%" : "88%",
                top: isSmallLayout ? "190px" : "589px",
                transform: "translateX(-50%)",
                zIndex: 80,
                fontSize: isSmallLayout ? "18px" : "25px",
              }}
            >
              <Lottie
                lottieRef={spicesRef.current[5]}
                style={{
                  width: isSmallLayout ? 150 : 250,
                  height: isSmallLayout ? 150 : 250,
                }}
                animationData={lottieVariants[4]}
                loop={false}
                autoplay={false}
              />
              <div
                ref={spicesLabelRef.current[5]}
                id="spice1Text6"
                style={{
                  ...labelStyle,
                  top: "90%",
                  left: isSmallLayout ? "-10%" : "10%",
                }}
              >
                Ginseng
              </div>
            </div>

            {/* <div
              id="_64_805_Ellipse_655"
              style={{
                position: "absolute",
                background: "rgba(48, 113, 88, 1.00)",
                borderColor: "#578474ff",
                borderStyle: "solid",
                borderWidth: "2px",
                transform: "scaleY(-1)",
                height: "14.0px",
                width: "14.0px",
                borderRadius: "50%",
                left: "566.0px",
                top: "770.0px",
              }}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
