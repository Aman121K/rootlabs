import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.svg";
import cart from "../../../assets/cart.svg";
import Cart from "./Cart";
import { RxCross2 } from "react-icons/rx";

const GenerateComponent = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [presentPage, setPresentPage] = useState("");
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const styles = {
    container: {
      position: "absolute",
      height: "64px",
      width: "calc(100% - 80px)",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: "12px 40px",
      gap: "10px",
    },
    innerRow: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      width: "100%",
    },
    endRow: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      padding: "8px 0",
      width: "100%",
    },
    textWithDot: {
      position: "relative",
      height: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "4px",
      fontFamily: "Matter-TRIAL",
      whiteSpace: "nowrap",
    },
    dot: {
      position: "absolute",
      background: "rgba(19, 82, 59, 1.00)",
      borderRadius: "360px",
      height: "3px",
      width: "6px",
      left: "50%",
      top: "23px",
      transform: "translateX(-50%)",
      transition: "width 0.4s ease" /* Smooth width transition */,
    },
    navText: {
      color: "#3c5e52ff",
      fontFamily: "Matter-TRIAL",
      fontSize: "16px",
      fontWeight: "430",
      lineHeight: "20px",
      whiteSpace: "nowrap",
      // display: 'block',
    },

    // "@media (max-width: 768px)": {
    //   navText: {
    //     display: "none", // Hide text on small screens
    //   },
    // },

    cartIconWrapper: {
      position: "relative",
      overflow: "hidden",
      height: "20px",
      width: "20px",
    },
    buttonWrapper: {
      position: "relative",
      background: hovered ? "#13523bff" : "rgba(255, 249, 244, 1.00)",
      border: "2px solid #13523bff",
      borderRadius: "360px",
      height: "20px",
      width: "71px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px 16px",
      cursor: "pointer",
      transition: "background 0.3s ease", // Smooth transition for background change
    },
    buttonText: {
      color: hovered ? "#ffffff" : "#13523bff", // Change text color to white on hover
      fontFamily: "Matter-TRIAL",
      fontSize: "16px",
      fontWeight: "570",
      lineHeight: "24px",
      whiteSpace: "nowrap",
      transition: "color 0.3s ease", // Smooth transition for text color
    },
    hamburger: {
      display: "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      cursor: "pointer",
      gap: "10px",
      width: "fit-content",
    },
    hamburgerLine: {
      height: "3px",
      width: "30px",
      backgroundColor: "#3c5e52ff",
    },
    hamburgerSmallerLine: {
      height: "3px",
      width: "20px",
      backgroundColor: "#3c5e52ff",
    },
    menu: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-start",
      background: "rgba(0, 0, 0, 0.5)", // Black background with 50% opacity
      zIndex: 10000,
    },
    menuItem: {
      padding: "10px 20px",
      cursor: "pointer",
      color: "#ffffff",
      fontSize: "20px",
    },
  };
  const handleHamburgerOpen = () => {
    toggleMenu();
    setTimeout(() => {
      setSlideIn(true);
    }, 100);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Whenever location changes, update the presentPage state
    setPresentPage(location.pathname);
  }, [location]);

  return (
    <div id="_64_679_Frame_1820554665" style={styles.container}>
      {menuOpen && (
        <div style={styles.menu}>
          <div
            style={{
              width: "fit-content",
              height: "100%",
              background: "#3c5e52ff",
              padding: "70px 70px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              alignItems: "center",
              gap: 40,
              transform: slideIn ? "translateX(0%)" : "translateX(-100%)",
              transition: "transform 0.4s ease-in-out",
            }}
          >
            <RxCross2
              size={25}
              color="white"
              onClick={() => {
                setSlideIn(false);
                setTimeout(() => {
                  setMenuOpen(false);
                }, 400);
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <span style={styles.menuItem} onClick={() => navigate("/")}>
              Our Products
            </span>
            <span style={styles.menuItem}>Our Science</span>
            <span style={styles.menuItem}>Our Story</span>
            <span style={styles.menuItem}>Our Roots</span>
            <div
              id="_64_705_Button_default2"
              onClick={() => navigate("/product")}
              style={styles.buttonWrapper}
              onMouseEnter={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
            >
              <span style={styles.buttonText}>Shop Now</span>
            </div>
          </div>
        </div>
      )}

      <div id="_64_680_Frame_1820554639" style={styles.innerRow}>
        <div
          id="_69_3322_Frame_2018776367"
          style={{ height: "20px", width: "100%" }}
        >
          <div
            id="hamburger"
            style={styles.hamburger}
            onClick={handleHamburgerOpen}
          >
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerSmallerLine}></div>
          </div>
        </div>

        <div
          id="_64_681_Frame_1820554715"
          style={{ ...styles.innerRow, gap: "42px" }}
        >
          <div id="_64_682_Frame_1820554662" style={styles.textWithDot}>
            {/* <span style={{ color: "#13523bff", fontWeight: "670" }}> */}
            <span style={styles.navText}>
              Our Products
            </span>
            <div id="dotOfHeader" style={{...styles.dot, width:0}}></div>
          </div>

          <div className="not_selected_route" style={styles.textWithDot}>
            <span style={styles.navText}>Our Science</span>
            <div
              id="dotOfHeader"
              style={{
                ...styles.dot,
                width: 0,
              }}
            ></div>
          </div>

          <div
            id="_64_686_design"
            onClick={() => navigate("/")}
            style={{
              height: "48px",
              width: "82px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="Group" />
          </div>
          <div className="not_selected_route" style={styles.textWithDot}>
            <span style={styles.navText}>Our Story</span>
            <div
              id="dotOfHeader"
              style={{
                ...styles.dot,
                width: 0,
              }}
            ></div>
          </div>
          <div className="not_selected_route" style={styles.textWithDot}>
            <span style={styles.navText}>Our Roots</span>
            <div
              id="dotOfHeader"
              style={{
                ...styles.dot,
                width: 0,
              }}
            ></div>
          </div>
        </div>

        <div
          id="_64_686_design"
          onClick={() => navigate("/")}
          style={{
            height: "48px",
            width: "82px",
            position: "relative",
            display: "none",
            cursor: "pointer",
          }}
        >
          <img src={logo} alt="Group" />
        </div>

        <div
          id="_64_700_Frame_1820554639"
          style={{ ...styles.endRow, gap: "32px", marginLeft: 10 }}
        >
          <div
            id="_64_701_Frame_1820554698"
            style={{
              ...styles.innerRow,
              width: "60px",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={() => setIsCartOpen(true)}
          >
            <div style={styles.cartIconWrapper}>
              <img
                src={cart}
                alt="Vector"
                style={{ position: "absolute", left: "9.375%", top: "12.5%" }}
              />
            </div>
            <span className="md:block" style={{ ...styles.navText, fontWeight: "500" }}>Cart</span>
          </div>

          <div
            id="_64_705_Button_default"
            onClick={() => navigate("/product")}
            style={styles.buttonWrapper}
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <span style={styles.buttonText}>Shop Now</span>
          </div>
        </div>
      </div>
      {isCartOpen && <Cart closeModal={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default GenerateComponent;
