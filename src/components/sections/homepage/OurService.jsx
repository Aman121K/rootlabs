import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import ButtonComponent from "../../common/ArrowButton.jsx";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation.jsx";
import video from "../../../../assets/BioVideo.mp4";
import green_arrow from "../../../../assets/bio_green_arrow.svg";

const GeneratedComponent = () => {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });

  const bioRef = useIntersectionAnimation(animation, { threshold: 0.1 });

  const navigate = useNavigate();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  });
  return (
    <div
      id="_64_708_Frame_2018776290"
      className="mobile_section_padding"
      style={{
        position: "relative",
        background: "rgba(242, 240, 232, 1.00)",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "115px",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "40px 132px ",
      }}
    >
      <div
        id="_64_709_Frame_2018776287"
        style={{
          position: "relative",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "24px",
        }}
      >
        <span
          id="OUR_SCIENCE"
          className="TEXT_SUB_HEADING_STYLE text-center"
          style={{
            color: "#13523bff",
            fontFamily: "Matter-TRIAL",
            fontSize: "16.0px",
            fontWeight: "430",
            lineHeight: "120%",
            letterSpacing: "1.3px",
            textTransform: "uppercase",
            textAlign: "center",
            height: "19.0px",
            width: "116.0px",
            position: "relative",
            whiteSpace: "nowrap",
          }}
        >
          OUR SCIENCE
        </span>
        <div
          id="_64_711_Frame_2018776328"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            gap: "16px",
          }}
        >
          <div
            id="_64_712_Frame_2018776288"
            className="TEXT_HEADING_STYLE"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "16px",
            }}
          >
            <span
              id="Bioavailability__Made_Available"
              className="TEXT_HEADING_STYLE text-center"
              ref={useIntersectionAnimation(animation, { threshold: 0.1 })}
              style={{
                fontSize: "56.0px",
                lineHeight: "124%",
                letterSpacing: "-1.8px",
                textAlign: "left",
                position: "relative",
                fontFamily: "Reckless TRIAL",
                fontWeight: "400",
              }}
            >
              <span
                ref={useIntersectionAnimation(animation, { threshold: 0.1 })}
                className="TEXT_HEADING_STYLE"
                style={{
                  fontFamily: "Reckless TRIAL",
                  fontWeight: "380",
                  fontStyle: "italic",
                  color: "#13523B",
                }}
              >
                Bioavailability <br />
              </span>{" "}
              Made Available
            </span>
          </div>

          <div
            id="_64_714_Frame_2018776327"
            className="m_align_center"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_64_715_Frame_2018776325"
              style={{
                position: "relative",
                height: "27.0px",
                width: "157.0px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              <div
                id="_64_716_Iconography_-_Caesarzkn"
                style={{
                  position: "relative",
                  height: "16.0px",
                  width: "16.0px",
                }}
              >
                <img
                  id="I64_"
                  src={green_arrow}
                  alt="Path"
                />
              </div>

              <span
                id="Carefully_crafted"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Reckless TRIAL",
                  fontSize: "18.0px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  textAlign: "left",
                  height: "27.0px",
                  width: "133.0px",
                  position: "relative",
                }}
              >
                Carefully crafted
              </span>
            </div>

            <div
              id="_64_718_Frame_2018776324"
              style={{
                position: "relative",
                height: "27.0px",
                width: "196.0px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              <div
                id="_64_719_Iconography_-_Caesarzkn"
                style={{
                  position: "relative",
                  height: "16.0px",
                  width: "16.0px",
                }}
              >
                <img
                  id="I64_"
                  src={green_arrow}
                  alt="Path"
                  style={{
                    position: "absolute",
                    left: "calc(100% * 0.0832519605755806)",
                    top: "calc(100% * 0.1645813137292862)",
                  }}
                />
              </div>

              <span
                id="Maximum_absorption"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Reckless TRIAL",
                  fontSize: "18.0px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  textAlign: "left",
                  height: "27.0px",
                  width: "172.0px",
                  position: "relative",
                }}
              >
                Maximum absorption
              </span>
            </div>

            <div
              id="_64_721_Frame_2018776326"
              style={{
                position: "relative",
                height: "27.0px",
                width: "146.0px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              <div
                id="_64_722_Iconography_-_Caesarzkn"
                style={{
                  position: "relative",
                  height: "16.0px",
                  width: "16.0px",
                }}
              >
                <img
                  id="I64_"
                  src={green_arrow}
                  alt="Path"
                  style={{
                    position: "absolute",
                    left: "calc(100% * 0.0832519605755806)",
                    top: "calc(100% * 0.1645813137292862)",
                  }}
                />
              </div>

              <span
                id="Science-backed"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Reckless TRIAL",
                  fontSize: "18.0px",
                  fontWeight: "400",
                  lineHeight: "150%",
                  textAlign: "left",
                  height: "27.0px",
                  width: "122.0px",
                  position: "relative",
                }}
              >
                Science-backed
              </span>
            </div>
          </div>
        </div>

        <ButtonComponent
          label=" Our Science"
          theme="green"
        />
      </div>

      <div
        id="_64_734_image"
        style={{
          borderRadius: "26px",
          // height: "522px",
          width: "500px",
          mixBlendMode: "darken",
        }}
      >
        <video
          ref={videoRef}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src={video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default GeneratedComponent;
