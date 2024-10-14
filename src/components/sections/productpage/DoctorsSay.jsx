import React from "react";
import video from "../../../../assets/doctorVideo.png";
import { IoStar } from "react-icons/io5";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation";

function DoctorsSay() {
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  return (
    <div
      id="doctor_say"
      style={{
        padding: "80px",
        display: "flex",
        flexDirection: "column",
        gap: 44,
      }}
    >
      <div
        id="_64_736_Frame_1820554699"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          id="OUR_PRODUCTS"
          style={{
            color: "#13523bff",
            fontFamily: "Matter-TRIAL",
            fontSize: "16.0px",
            fontWeight: "430",
            lineHeight: "120%",
            letterSpacing: "1.3px",
            textAlign: "center",
            position: "relative",
          }}
        >
          EXPERTS
        </span>
        <div
          style={{
            overflow: "hidden",
            height: "90px",
            minHeight: "fit-content",
          }}
        >
          <span
            ref={textRef}
            id="Expand_Your_Roots_with_Our_Goodness"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Reckless TRIAL",
              fontSize: "56.0px",
              fontWeight: "400",
              lineHeight: "124%",
              letterSpacing: "-1.8px",
              textAlign: "center",
              position: "relative",
            }}
          >
            What Doctors Have to Say
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 80,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <img
          id="doctor_video"
          style={{
            width: 480,
            height: 540,
            margin: "auto",
          }}
          src={video}
        />
        <div
          id="_843_14507_Frame_1820554907"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "nowrap",
            gap: "32px",
            flex: 1,
          }}
        >
          <div
            id="_843_14508_Frame_1212122024"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "16px",
            }}
          >
            <div
              id="_843_14509_Frame_1820554822"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "4px",
                fontSize: 20,
                color: "#E5732E",
              }}
            >
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>

            <div
              id="_843_14515_Frame_2018776418"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              <span
                id="I_feel_like_I_have_gotten_younger"
                style={{
                  color: "#13523bff",
                  fontFamily: "Reckless TRIAL",
                  fontSize: 25,
                  fontWeight: "380",
                  lineHeight: "127%",
                  letterSpacing: "-3.0%",
                  textAlign: "left",
                  textWrap: "nowrap",
                }}
              >
                I feel like I have gotten younger
              </span>
              <span
                id="__Lorem_ipsum_dolor_sit_amet_consectetur__Nunc_facilisis_turpis_vitae_at_senectus__Diam_id_quis_porta_purus_varius_curabitur_ac__Convallis_senectus_fermentum_ipsum_imperdiet_ipsum_pretium_ut_libero___"
                style={{
                  color: "#1e1e1eff",
                  fontFamily: "Matter-TRIAL",
                  fontWeight: "430",
                  lineHeight: "127%",
                  letterSpacing: "-3.0%",
                  textAlign: "left",
                  fontSize: 17,
                }}
              >
                “ Lorem ipsum dolor sit amet consectetur. Nunc facilisis turpis
                vitae at senectus. Diam id quis porta purus varius curabitur ac.
                Convallis senectus fermentum ipsum imperdiet ipsum pretium ut
                libero. ”
              </span>
            </div>
          </div>

          <div
            id="_843_14518_Frame_2018776305"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "40px",
            }}
          >
            <div
              id="_843_14519_Frame_2018776286"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "24px",
              }}
            >
              <div
                id="_843_14520_Rectangle_34660992"
                style={{
                  position: "relative",
                  background: "rgba(19, 82, 59, 1.00)",
                  height: "1.0px",
                  width: "100%",
                }}
              ></div>

              <div
                id="_843_14521_Frame_2018776281"
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
                  id="_843_14522_Frame_1820554906"
                  style={{
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
                    id="_843_14523_Frame_2018776279"
                    style={{
                      fontSize: 18,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      gap: "8px",
                    }}
                  >
                    <div
                      id="_843_14524_Frame_1820554909"
                      style={{
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
                          color: "#1e1e1eff",
                          fontFamily: "Reckless TRIAL",
                          fontWeight: "380",
                          letterSpacing: "-4.0%",
                          textAlign: "left",

                          position: "relative",
                        }}
                      >
                        Dr. Mark Hyman
                      </span>
                    </div>

                    <div
                      id="_843_14526_Frame_1820554910"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        gap: "8px",
                      }}
                    >
                      <div
                        id="_843_14527_Rectangle_39783"
                        style={{
                          position: "relative",
                          background: "rgba(19, 82, 59, 1.00)",
                          borderRadius: "360px",
                          height: "6.0px",
                          width: "6.0px",
                        }}
                      ></div>

                      <span
                        id="Biomolecular_Nutritionist"
                        style={{
                          color: "#13523bff",
                          fontFamily: "Matter-TRIAL",
                          fontWeight: "430",
                          lineHeight: "124%",
                          letterSpacing: "-1.0%",
                          textAlign: "left",
                          textWrap: "nowrap",
                          position: "relative",
                        }}
                      >
                        Biomolecular Nutritionist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsSay;
