import React, { useEffect, useRef, useState } from "react";
import BouncingImage from "./BouncingImage.jsx";
import footer_arrow from "../../../assets/footer_arrow.svg";
import root_footer from "../../../assets/root_footer.svg";
import labs_footer from "../../../assets/labs_footer.svg";
import { Link } from "react-router-dom";

const GeneratedComponent = () => {
  const hyperlinks = [
    {
      name: "PRODUCTS",
      list: [
        {
          name: "Ashwagandha",
          link: "/our-products",
        },
        {
          name: "Shilajit",
          link: "/our-products",
        },
        {
          name: "Turmeric",
          link: "/our-products",
        },
        {
          name: "Sea Moss",
          link: "/our-products",
        },
      ],
    },
    {
      name: "PAGES",
      list: [
        {
          name: "Ashwagandha",
          link: "/our-products",
        },
        {
          name: "Shilajit",
          link: "/our-products",
        },
        {
          name: "Turmeric",
          link: "/our-products",
        },
        {
          name: "Sea Moss",
          link: "/our-products",
        },
        {
          name: "Contact Us",
          link: "/contactForm",
        },
      ],
    },
    {
      name: "SOCIALS",
      list: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/healthy.gummy.bears/",
          button: true,
        },
        {
          name: "TikTok",
          link: "https://twitter.com/healthy_gummy_b",
          button: true,
        },
      ],
    },
  ];

  const footerRef = useRef(null);
  const imagesRef = useRef([]); // Reference to hold images
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  useEffect(() => {
    const options = {
      root: null, // Relative to viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the footer is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimating(true); // Start animation when footer is visible
        } else {
          setIsAnimating(false); // Stop animation when footer is out of view
        }
      });
    }, options);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      id="_64_1138_Footer"
      ref={footerRef}
      style={{
        position: "relative",
        background: "rgba(19, 82, 59, 1.00)",
        borderTopLeftRadius: "32.0px",
        borderTopRightRadius: "32.0px",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "45px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      <div
        id="_64_1141_Frame_1820554735"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "80px",
          padding: "0px 16px 0px 0px",
        }}
      >
        {hyperlinks.map((item, index) => (
          <div
            key={index}
            id="_64_1142_Frame_1820554732"
            style={{
              position: "relative",
              height: "148.0px",
              width: "154.0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            <span
              id="SHOP"
              style={{
                color: "#e8ddd3ff",
                fontFamily: "Matter-TRIAL",
                fontSize: "14.0px",
                fontWeight: "300",
                lineHeight: "20px",
                letterSpacing: "10.0%",
                textAlign: "left",
                height: "20.0px",
                width: "154.0px",
                position: "relative",
                opacity: "0.699999988079071",
              }}
            >
              {item.name}
            </span>
            <div
              id="_64_1144_Frame_1820554727"
              style={{
                position: "relative",
                height: "120.0px",
                width: "154.0px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "8px",
              }}
            >
              {item.list.map((item, index) => (
                <div
                  key={item.name + index}
                  id="_64_1159_Frame_1820554736"
                  style={{
                    position: "relative",
                    height: "32.0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to={item.link}
                    id="Ashwagandha"
                    style={{
                      color: "#e8ddd3ff",
                      fontFamily: "Matter-TRIAL",
                      fontSize: "24.0px",
                      fontWeight: "300",
                      lineHeight: "24px",
                      textAlign: "left",
                      height: "24.0px",
                      // width: "154.0px",
                      position: "relative",
                      textDecoration: "none",
                      ...item.style,
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.button ? (
                    <div
                      id="_64_1161_Frame_1820554689"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        background: "rgba(232, 221, 211, 1.00)",
                        borderRadius: "360px",
                        height: "24.0px",
                        width: "24.0px",
                      }}
                    >
                      <div
                        id="_64_1162_Frame"
                        style={{
                          position: "absolute",
                          overflow: "hidden",
                          height: "12.0px",
                          width: "12.0px",
                          left: "calc(50% - 6.0px)",
                          top: "calc(50% - 6.0px)",
                        }}
                      >
                        <img
                          id="_64_1163_Clip_p"
                          src={footer_arrow}
                          alt="Clip_path_group"
                          style={{ position: "absolute" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div key={item.name + index}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        id="_64_1176_Frame_201877627367"
        style={{
          height: "calc(100px * 0.7)",
        }}
      ></div>
      <div
        id="_64_1177_Frame_2018776272"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          width: "100%",
          alignSelf: "flex-end",
        }}
      >
        <img
          id="_64_1_ROOT"
          src={root_footer}
          alt="Group"
          style={{ position: "relative", width: "calc(50% - 64px)" }}
        />
        <img
          id="_64_1_LABS"
          src={labs_footer}
          alt="Group"
          style={{ position: "relative", width: "calc(50% - 64px)" }}
        />
      </div>
      {isAnimating ? <BouncingImage /> : <></>}
      <div
        id="_64_1201_Frame_1820554877"
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          display: "flex",
          width: "calc(100% - 80px)", // Adjusted to simplify width calculation
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(47, 102, 81, 1.00)",
          filter: "drop-shadow(2px 4px 64px rgba(0, 0, 0, 0.12))",
          padding: "16px 40px",
        }}
      >
        <span
          id="__2024_RootLabs__All_rights_reserved"
          style={{
            color: "#e8ddd3",
            fontFamily: "Matter-TRIAL",
            fontSize: "14px",
            fontWeight: "430",
            lineHeight: "18px",
            textAlign: "center",
            opacity: "0.7",
          }}
        >
          ©️ 2024 RootLabs. All rights reserved
        </span>

        <span
          style={{
            color: "#e8ddd3",
            fontFamily: "Matter-TRIAL",
            fontSize: "14px",
            fontWeight: "430",
            lineHeight: "18px",
            textAlign: "center",
          }}
        >
          <Link
            to="/terms-and-conditions"
            style={{ color: "#e8ddd3", textDecoration: "none" }}
          >
            Terms & Conditions
          </Link>{" "}
          {/* |{" "}
          <Link
            to="/contactForm"
            style={{ color: "#e8ddd3", textDecoration: "none" }}
          >
            Contact Us
          </Link> */}
        </span>
      </div>
    </div>
  );
};

export default GeneratedComponent;
