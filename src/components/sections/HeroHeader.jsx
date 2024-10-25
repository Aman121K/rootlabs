import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header.jsx";
import video from '../../../assets/RootLabVideo.mp4'
import desktopVideo from '../../../assets/HeroHeaderDesktopClipped.mp4'
import ButtonComponent from "../common/ArrowButton.jsx";
import hh1 from '../../../assets/hh1.jpeg'
import hh2 from '../../../assets/hh2.jpeg'
import hh3 from '../../../assets/hh3.jpeg'
import hh4 from '../../../assets/hh4.jpeg'
import hh_star from '../../../assets/hh_star.svg'

const GeneratedComponent = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const [topOffset, setTopOffset] = useState(-12); // Initialize with -12

  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateVideoHeight = () => {
      if (videoElement) {
        const videoRatio = videoElement.videoWidth / videoElement.videoHeight;
        const videoWidth = videoElement.offsetWidth;
        let newHeight = videoWidth / videoRatio;

        if(newHeight > 1150){
          newHeight += 100;
        } else if(newHeight > 1225){
          newHeight += 5000;
        }
        else if(newHeight > 1650){
          newHeight += 400;
        }
        else if(newHeight > 1850){
          newHeight += 8000;
        }
        setVideoHeight(newHeight); // Calculate and set the height dynamically

        // Adjust the top offset proportionally (e.g., 1% of the video height)
        const calculatedTopOffset = -(newHeight * 0.1); 
        if(newHeight > 1150){
          setTopOffset(calculatedTopOffset);
        } else {
          setTopOffset(-12);
        }
      }
    };

    // Set initial video height when component mounts and video metadata is loaded
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', updateVideoHeight);
    }

    // Update video height on window resize
    window.addEventListener('resize', updateVideoHeight);

    // Slow down the video
    if (videoElement) {
      videoElement.playbackRate = 0.5;
    }

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
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', updateVideoHeight);
      }
      window.removeEventListener('resize', updateVideoHeight);
    };
  }, []);

  return (
    <div
      id="_64_641_Frame_2018776324"
      style={{
        position: "relative",
        // height: "2081.0px",
        width: "calc(100% - 0px - 0px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        // height: "100vw"
      }}
    >
      <div
        id="_64_642_Frame_1"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          // height: "1081.0px",
          width: "100%",
          minHeight: "1070px",
          height: videoHeight
        }}
      >
        <div
          id="_64_645_image"
          style={{
            position: "absolute",
            borderRadius: "32px",
            height: "100%",
            width: "calc(100% - 74px)",
            display: "flex",
            justifyContent: "center",
            left: "37px",
            top: `${topOffset}px`,
            overflow: "hidden",  // Make sure nothing overflows
          }}
        >
          <video
            id="hero_video"
            ref={videoRef}
            src={isMobileLayout? video : desktopVideo}
            style={{
              width: "100%",
              height: "100%",
              // height: "100%",  // Make sure the height matches the parent container
              // transform: "scale(1.3)",
              objectFit: "cover", // Ensures the video scales while maintaining aspect ratio
              borderRadius: "50px",
            }}
            autoPlay
            loop
            muted
          />
        </div>

        <div
          id="_64_646_Rectangle_34624809"
          style={{
            position: "absolute",
            background:
              "linear-gradient(180.0deg, rgba(254, 248, 243, 1.00) 18.258310854434967%, rgba(255, 255, 255, 0.00) 100.0%)",
            height: "673.0px",
            width: "calc(100% + -0.0px)",
          }}
        ></div>

        <div
          id="_64_647_Frame_1820554692"
          style={{
            marginTop: 170,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "32px",
            fontFamily: "Reckless TRIAL",
          }}
        >
          <span
            id="Handpicked_in_nature___Perfected_in_science_"
            className="TEXT_HEADING_STYLE"
            style={{
              fontSize: "72.0px",
              fontWeight: "400",
              fontFamily: "Reckless TRIAL",
              lineHeight: "120%",
              letterSpacing: "-3.0%",
              textAlign: "center",
              position: "relative",
            }}
          >
            Handpicked in <span
              style={{
                fontFamily: "Reckless TRIAL",
                // fontWeight: "lighter",
                color: "#13523B",
                fontWeight: "500",
                fontStyle: "italic"
              }}> nature.</span> <br />
            Perfected in <span
              style={{
                fontFamily: "Reckless TRIAL",
                // fontWeight: "lighter",
                color: "#13523B",
                fontStyle: "italic",
                fontWeight: "500",
              }}> science.</span>
          </span>

          <div
            id="_64_649_Frame_1820554695"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap-reverse",
              gap: "32px",
            }}
          >
            <ButtonComponent label="Buy Your Product" theme="green" />

            <div
              id="_64_660_Frame_1820554694"
              style={{
                position: "relative",
                height: "51.0px",
                width: "204.4615478515625px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              <div
                id="_64_661_Frame_1820554696"
                style={{
                  position: "relative",
                  height: "24.0px",
                  width: "204.4615478515625px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "8px",
                }}
              >
                <div
                  id="_64_662_Avatars"
                  style={{
                    position: "relative",
                    height: "24.0px",
                    // width: "78.0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    gap: "-6px",
                  }}
                >
                  <div
                    id="_64_663_Avatar"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background:
                        `url(${hh1}) 100% / cover no-repeat`,
                      borderColor: "#ffffffff",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderRadius: "200px",
                      height: "24.0px",
                      width: "24.0px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                    }}
                  ></div>

                  <div
                    id="_64_664_Avatar"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background:
                        `url(${hh2}) 100% / cover no-repeat`,
                      borderColor: "#ffffffff",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderRadius: "200px",
                      height: "24.0px",
                      width: "24.0px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                    }}
                  ></div>

                  <div
                    id="_64_665_Avatar"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background:
                        `url(${hh3}) 100% / cover no-repeat`,
                      borderColor: "#ffffffff",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderRadius: "200px",
                      height: "24.0px",
                      width: "24.0px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                    }}
                  ></div>

                  <div
                    id="_64_666_Avatar"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background:
                        `url(${hh4}) 100% / cover no-repeat`,
                      borderColor: "#ffffffff",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      borderRadius: "200px",
                      height: "24.0px",
                      width: "24.0px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                    }}
                  ></div>
                </div>

                <div
                  id="_64_667_Frame_1820554693"
                  style={{
                    position: "relative",
                    height: "20.0px",
                    width: "118.46154022216797px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "5px",
                  }}
                >
                  <img
                    id="_64_66"
                    src={hh_star}
                    alt="Star_6"
                    style={{ position: "relative" }}
                  />
                  <img
                    id="_64_66"
                    src={hh_star}
                    alt="Star_7"
                    style={{ position: "relative" }}
                  />
                  <img
                    id="_64_67"
                    src={hh_star}
                    alt="Star_8"
                    style={{ position: "relative" }}
                  />
                  <img
                    id="_64_67"
                    src={hh_star}
                    alt="Star_9"
                    style={{ position: "relative" }}
                  />
                  <img
                    id="_64_672"
                    src={hh_star}
                    alt="Star_10"
                    style={{ position: "relative" }}
                  />
                </div>
              </div>

              <span
                id="Loved_by_9_875_Customers"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Matter-TRIAL",
                  fontSize: "16.0px",
                  fontWeight: "430",
                  lineHeight: "120%",
                  letterSpacing: "-3.0%",
                  textAlign: "left",
                  height: "19.0px",
                  width: "178.0px",
                  position: "relative",
                  whiteSpace: "nowrap"
                }}
              >
                Loved by 9,875 Customers
              </span>
            </div>
          </div>
        </div>

        <Header />
      </div>
    </div>
  );
};
export default GeneratedComponent