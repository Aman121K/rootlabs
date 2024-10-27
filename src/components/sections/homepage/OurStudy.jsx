import { useNavigate } from "react-router-dom";
import React from "react";
import ButtonComponent from "../../common/ArrowButton.jsx";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation.jsx";
import ScrollMove from "../../../animation/ScrollImage.jsx";
import whiteArrow from '../../../../assets/white_arrow.svg'
import story1 from '../../../../assets/story1.jpeg'
import semicircle from '../../../../assets/ellipse.svg'

const GeneratedComponent = () => {
  const navigate = useNavigate();
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  const parentRef = React.useRef(null);
  return (
    <div
    className="mobile_section_padding mobile_section_gap"
      ref={parentRef}
      id="_64_1088_Frame_2018776329"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(19, 82, 59, 1.00)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "80px 40px",
        gap: "80px",
      }}
    >
      <div
        id="_64_1089_Frame_2018776273"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "24px",
          maxWidth: "650px",
        }}
      >
        <div
          id="_64_1090_Frame_2018776330"
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
            id="OUR_STORY"
            style={{
              color: "#fef8f3ff",
              fontFamily: "Matter-TRIAL",
              fontSize: "20px",
              fontWeight: "570",
              lineHeight: "26px",
              letterSpacing: "1.3px",
              textAlign: "left",
              position: "relative",
            }}
          >
            OUR STORY
          </span>
          <div
          className="TEXT_HEADING_STYLE"
            style={{
              overflow: "hidden",
              // height: "140px"
            }}>

            <span
              ref={textRef}
              id="Born_of_the_desire_to_return_to_our_roots"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "56.0px",
                fontWeight: "400",
                letterSpacing: "-1.8px",
                textAlign: "left",
                opacity: 0,
                position: "relative",
              }}
            >
              Born of the desire <br/> to return to our roots
            </span>
          </div>
        </div>

        <div
          id="_64_1093_Frame_2018776327"
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
            id="_64_1094_Frame_2018776325"
            style={{
              position: "relative",
              height: "27.0px",
              width: "252.0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_64_1095_Iconography_-_Caesarzkn"
              style={{
                position: "relative",
                height: "16.0px",
                width: "16.0px",
              }}
            >
              <img
                id="I64_"
                src={whiteArrow}
                alt="Path"
                style={{
                  position: "absolute",
                  left: "calc(100% * 0.0832519605755806)",
                  top: "calc(100% * 0.1645507961511612)",
                }}
              />
            </div>

            <span
              id="Power_of_herbal_supplements"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "18.0px",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                height: "27.0px",
                width: "228.0px",
                position: "relative",
              }}
            >
              Power of herbal supplements
            </span>
          </div>

          <div
            id="_64_1097_Frame_2018776324"
            style={{
              position: "relative",
              height: "27.0px",
              width: "287.0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_64_1098_Iconography_-_Caesarzkn"
              style={{
                position: "relative",
                height: "16.0px",
                width: "16.0px",
              }}
            >
              <img
                id="I64_"
                src={whiteArrow}
                alt="Path"
                style={{
                  position: "absolute",
                  left: "calc(100% * 0.0832519605755806)",
                  top: "calc(100% * 0.1645507961511612)",
                }}
              />
            </div>

            <span
              id="Heritage_and_personal_experience"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "18.0px",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                height: "27.0px",
                width: "263.0px",
                position: "relative",
              }}
            >
              Heritage and personal experience
            </span>
          </div>

          <div
            id="_64_1100_Frame_2018776326"
            style={{
              position: "relative",
              height: "27.0px",
              width: "283.0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <div
              id="_64_1101_Iconography_-_Caesarzkn"
              style={{
                position: "relative",
                height: "16.0px",
                width: "16.0px",
              }}
            >
              <img
                id="I64_"
                src={whiteArrow}
                alt="Path"
                style={{
                  position: "absolute",
                  left: "calc(100% * 0.0832519605755806)",
                  top: "calc(100% * 0.1645507961511612)",
                }}
              />
            </div>

            <span
              id="Made_for_the_American_customer"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "18.0px",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                height: "27.0px",
                width: "259.0px",
                position: "relative",
              }}
            >
              Made for the American customer
            </span>
          </div>
        </div>

        <ButtonComponent label="Our Story" theme="white" />
      </div>

      <div
        id="_64_1113_image"
        style={{
          position: "relative",
          background:
            `url(${story1}) 100% / cover no-repeat`,
          borderRadius: "32px",
          minHeight: "423.0px",
          minWidth: "630.0px",
        }}
      ></div>


      <ScrollMove
        direction="up"
        speed={0.25}
        top={530}
        leftPercentage={95} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <img
          id="_64_1204_E99"
          src={semicircle}
          alt="Ellipse_18"
          style={{
            display: "flex",
            position: "absolute",
            animation: " 5s infinite linear",
          }}
        />
      </ScrollMove>
      <ScrollMove
        direction="down"
        speed={0.25}
        top={0}
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
            left: "-45%",
          }}
        ></div>
      </ScrollMove>
    </div>
  )
};

export default GeneratedComponent