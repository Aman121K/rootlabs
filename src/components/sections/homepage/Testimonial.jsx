import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";
import "./Testimonial.css";
import ScrollMove from "../../../animation/ScrollImage";

import customer1 from '../../../../assets/customer1.jpeg';
import customer2 from '../../../../assets/customer2.jpeg';

import customerE1 from '../../../../assets/customerE1.jpeg';
import customere2 from '../../../../assets/customere2.jpeg';

import semicircle from '../../../../assets/ellipse.svg'
import heart from '../../../../assets/heart.svg'

const GeneratedComponent = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  const parentRef = useRef(null);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Dr. Mark Hyman",
      occupation: "Biomolecular Nutritionist",
      description:
        " Curcumin is the main active ingredient in the spice turmeric — a staple in Indian cuisine for thousands of years. Curcumin is a powerful antioxidant that can help promote regularity + digestive health as well as naturally support overall skin health. ",
      profile:
      customerE1,
    },
    {
      id: 2,
      name: "Dr. Mark Hyman",
      occupation: "Biomolecular Nutritionist",
      description:
        " Curcumin is the main active ingredient in the spice turmeric — a staple in Indian cuisine for thousands of years. Curcumin is a powerful antioxidant that can help promote regularity + digestive health as well as naturally support overall skin health. ",
      profile:
      customere2,
    },
    {
      id: 3,
      name: "Dr. Mark Hyman",
      occupation: "Biomolecular Nutritionist",
      description:
        " Curcumin is the main active ingredient in the spice turmeric — a staple in Indian cuisine for thousands of years. Curcumin is a powerful antioxidant that can help promote regularity + digestive health as well as naturally support overall skin health. ",
      profile: customer1,
    },
    {
      id: 4,
      name: "Shannon Decker",
      occupation: " Certified personal trainer",
      description:
        " The ashwagandha gummy has been a game-changer for me! It helped me through stressful days and I also noticed a significant improvement in my energy levels. ",
      profile: customer2,
    },
  ]);
  const [presentTestimonial, setPresentTestimonial] = useState(testimonials[0]); // Start with the first testimonial

  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 970
  );


  useEffect(() => {
    const totalDuration = 4000; // 15 seconds
    const interval = 50; // Update every 50ms
    const totalUpdates = totalDuration / interval; // Calculate total number of updates

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 100 / totalUpdates; // Increase progress proportionally
        } else {
          clearInterval(intervalId); // Stop when 100% is reached
          return 100;
        }
      });
    };

    
    const changeTestimonial = () => {
      setPresentTestimonial((prev) => {
        const nextIndex =
          (testimonials.findIndex((t) => t.id === prev.id) + 1) %
          testimonials.length; // Get the next testimonial

        return testimonials[nextIndex]; // Return the next testimonial
      });
      setProgress(0); // Reset progress
    };

    const intervalId = setInterval(updateProgress, interval);
    const testimonialChangeId = setInterval(changeTestimonial, totalDuration); // Change testimonial every 15 seconds

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
      clearInterval(intervalId); // Cleanup on unmount
      clearInterval(testimonialChangeId); // Cleanup on unmount
    };
  }, [testimonials]);

  return (
    <div
      id="_64_911_Frame_2018776323"
      ref={parentRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(19, 82, 59, 1.00)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: isMobileLayout ? "0px" : "50px",
        padding: "80px 30px",
      }}
    >
      <div
        id="_64_912_Frame_2018776276"
        style={{
          position: "relative",
          width: "calc(100% - 0px - 0px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "16px",
        }}
      >
        <span
          id="Perfected_in_Science"
          style={{
            color: "#fef8f3ff",
            fontFamily: "Matter-TRIAL",
            fontSize: "16.0px",
            fontWeight: "430",
            lineHeight: "120%",
            letterSpacing: "1.3px",
            textTransform: "uppercase",
            textAlign: "center",
            height: "19.0px",
            position: "relative",
          }}
        >
          Perfected in Science
        </span>
        <div
          style={{
            overflow: "hidden",
            height: "90px",
          }}
        >
          <span
            ref={textRef}
            className="TEXT_HEADING_STYLE"
            id="With_Experts_on_Board"
            style={{
              color: "#fef8f3ff",
              fontFamily: "Reckless TRIAL",
              fontSize: isMobileLayout ? "32.0px" : "56.0px",
              fontWeight: "400",
              lineHeight: "124%",
              textAlign: "center",
              position: "relative",
              opacity: 0,
            }}
          >
            With Experts on Board
          </span>
        </div>
      </div>
      <ScrollMove
        direction="down"
        speed={0.2}
        top={100}
        leftPercentage={90} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <img
          id="_64_915_El"
          src={semicircle}
          alt="Ellipse_18"
          style={{
            position: "absolute",
            right: "0px",
          }}
        />
      </ScrollMove>
      <ScrollMove
        direction="up"
        speed={0.2}
        top={500}
        leftPercentage={0} // Set left position as a percentage
        parentRef={parentRef} // Pass the parent ref
      >
        <div
          id="_64_916_Ellipse_15"
          style={{
            borderColor: "#f2f0e8ff",
            borderStyle: "solid",
            borderWidth: "1.5px",
            transform: "translateX(-50%)",
            height: "286.91961669921875px",
            width: "286.91961669921875px",
            borderRadius: "50%",
          }}
        ></div>
      </ScrollMove>

      <div
        id="_64_917_Frame_2018776307"
        style={{
          position: "relative",
          width: "calc(100% - 0px - 0px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div
          id="_64_918_6642c1f343aacf7ec05836cf_andrew_jpeg"
          style={{
            position: "relative",
            // overflow: "hidden",
            background: `url(${presentTestimonial.profile}) 100% / cover no-repeat`,
            borderRadius: "24px",
            height: "540.0px",
            width: "480.0px",
          }}
        >
          <img
            id="_64_945"
            src={heart}
            alt="Group_5"
            style={{
              position: "absolute",
              width: "20%",
              bottom: 0,
              left: 0,
              transform: "translateX(-50%) translateY(50%)",
            }}
          />
        </div>

        <div
          id="_64_919_Frame_1820554907"
          style={{
            position: "relative",
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            gap: "32px",
          }}
        >
          <div
            id="_64_920_Frame_1212122024"
            style={{
              position: "relative",
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "700px",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              id="__Curcumin_is_the_main_active_ingredient_in_the_spice_turmeric___a_staple_in_Indian_cuisine_for_thousands_of_years__Curcumin_is_a_powerful_antioxidant_that_can_help_promote_regularity___digestive_health_as_well_as_naturally_support_overall_skin_health___"
              style={{
                color: "#fef8f3ff",
                fontFamily: "Reckless TRIAL",
                fontSize: "32.0px",
                fontWeight: "380",
                lineHeight: "127%",
                letterSpacing: "-3.0%",
                textAlign: "left",
                position: "relative",
              }}
            >
              “ {presentTestimonial.description} “
            </span>
          </div>

          <div
            id="_64_922_Frame_2018776305"
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "40px",
              margin: "0px auto",
            }}
          >
            <div
              id="_64_923_Frame_2018776286"
              style={{
                position: "relative",
                height: "75.0px",
                width: "calc(100% - 0px - 0px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "24px",
              }}
            >
              <div
                id="_64_924_Rectangle_34660992"
                style={{
                  position: "relative",
                  background: "rgba(254, 248, 243, 1.00)",
                  height: "1.0px",
                  width: "100%",
                }}
              ></div>

              <div
                id="_64_925_Frame_2018776281"
                style={{
                  position: "relative",
                  height: "50.0px",
                  width: "calc(100% - 0px - 0px)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  gap: "40px",
                }}
              >
                <div
                  id="_64_926_Frame_1820554906"
                  style={{
                    position: "relative",
                    height: "50.0px",
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    gap: "12px",
                  }}
                >
                  <div
                    id="_64_927_Frame_2018776279"
                    style={{
                      position: "relative",
                      height: "50.0px",
                      width: "calc(100% - 0px - 0px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      gap: "8px",
                    }}
                  >
                    <div
                      id="_64_928_Frame_1820554909"
                      style={{
                        position: "relative",
                        height: "22.0px",
                        width: "calc(100% - 0px - 0px)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        gap: "8px",
                      }}
                    >
                      <span
                        id="Dr__Mark_Hyman"
                        style={{
                          color: "#fef8f3ff",
                          fontFamily: "Reckless TRIAL",
                          fontSize: "20.0px",
                          fontWeight: "380",
                          letterSpacing: "-4.0%",
                          textAlign: "left",
                          height: "22.0px",
                          position: "relative",
                        }}
                      >
                        {presentTestimonial.name}
                      </span>
                    </div>

                    <div
                      id="_64_930_Frame_1820554910"
                      style={{
                        position: "relative",
                        height: "20.0px",
                        width: "calc(100% - 0px - 0px)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        gap: "8px",
                      }}
                    >
                      <div
                        id="_64_931_Rectangle_39783"
                        style={{
                          position: "relative",
                          background: "rgba(254, 248, 243, 1.00)",
                          borderRadius: "360px",
                          height: "6.0px",
                          width: "6.0px",
                        }}
                      ></div>

                      <span
                        id="Biomolecular_Nutritionist"
                        style={{
                          color: "#fef8f3ff",
                          fontFamily: "Matter-TRIAL",
                          fontSize: "16.0px",
                          fontWeight: "430",
                          lineHeight: "124%",
                          letterSpacing: "-1.0%",
                          textAlign: "left",
                          height: "20.0px",
                          position: "relative",
                        }}
                      >
                        {presentTestimonial.occupation}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  id="_01_"
                  style={{
                    color: "#fef8f3ff",
                    fontFamily: "Reckless TRIAL",
                    fontSize: "24.0px",
                    fontWeight: "380",
                    letterSpacing: "-4.0%",
                    textAlign: "left",
                    height: "26.0px",
                    width: "26.0px",
                    position: "relative",
                  }}
                >
                  0{presentTestimonial.id}.
                </span>
              </div>
            </div>

            <div
              id="_64_934_Frame_1820554902"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "nowrap",
                overflowX: "auto",
                width: "100%",
                gap: "20px",
                scrollbarWidth: "none", // for Firefox
                msOverflowStyle: "none", // for Internet Explorer and Edge
              }}
            >
              {testimonials.map((testimonial, index) => {
                return presentTestimonial.id === testimonial.id ? (
                  <div
                    id="_64_935_Frame_2018776281"
                    style={{
                      position: "relative",
                      borderRadius: "50%", // Make it circular
                      height: "58px",
                      minWidth: "59px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px",
                      background: `conic-gradient(#fef8f3ff 0%, #fef8f3ff ${progress}%, transparent ${progress}%)`, // Change colors and percentage to adjust progress
                    }}
                  >
                    {/* Outer div for the background animation */}
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        height: "58px", // Match the height of the outer div
                        minWidth: "58px", // Match the width of the outer div
                        background: "#13523b",
                        zIndex: 1, // Ensure it stays behind the inner div
                      }}
                    ></div>

                    {/* Inner div with the image */}
                    <div
                      id="_64_936_Border"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        background: `url(${testimonial.profile}) 100% / cover no-repeat`,
                        borderRadius: "50%", // Make it circular
                        height: "54px", // Slightly smaller than the outer div for offset
                        width: "54px", // Slightly smaller than the outer div for offset
                        zIndex: 2, // Ensure it stays above the outer div
                      }}
                    ></div>
                  </div>
                ) : (
                  <div
                    id="_64_939_Frame_2018776283"
                    style={{
                      position: "relative",
                      borderColor: "#fef8f3ff",
                      borderStyle: "solid",
                      borderWidth: "0.800000011920929px",
                      borderRadius: "360px",
                      height: "54.39999997615814px",
                      width: "54.39999997615814px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      gap: "10px",
                      padding: "2px 2px 2px 2px",
                      opacity: "0.20000000298023224",
                    }}
                  >
                    <div
                      id="_64_940_Border"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        background: `url(${testimonial.profile}) 100% / cover no-repeat`,
                        borderRadius: "360px",
                        height: "56.0px",
                        width: "56.0px",
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
