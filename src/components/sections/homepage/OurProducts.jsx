import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../common/ArrowButton.jsx";
import StoreFront from "../../../client/StoreFrontClient.js";
import ProductCard from "../ProductCard.jsx";
import { useIntersectionAnimation } from "../../../animation/useIntersectionAnimation.jsx";

const GeneratedComponent = () => {
  const navigate = useNavigate();
  // Initialize state for storing products
  const [products, setProducts] = useState([]);
  const animation = "slideUp 0.7s ease-in forwards";
  const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
  // Fetch products on component mount

  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 912
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await StoreFront.fetchAllProducts(); // Fetch from the client
        setProducts(products); // Store products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the function inside useEffect

    const handleResize = () => {
      if (window.innerWidth <= 912) {
        setIsMobileLayout(true);
      } else {
        setIsMobileLayout(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  return (
    <div
      id="_64_735_Frame_2018776334"
      style={{
        position: "relative",
        background: "rgba(242, 240, 232, 1.00)",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        gap: isMobileLayout ? "40px" : "84px",
        padding: "80px 64px",
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
            lineHeight: "19.2px",
            letterSpacing: "1.5px",
            textAlign: "center",
            position: "relative",
          }}
        >
          OUR PRODUCTS
        </span>

        <div
          style={{
            overflow: "hidden",
            // height: "90px",
          }}
        >
          <span
            ref={textRef}
            id="Expand_Your_Roots_with_Our_Goodness"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Reckless TRIAL",
              fontSize: "56px",
              fontWeight: "400",
              lineHeight: "69.44px",
              letterSpacing: "1px",
              textAlign: "center",
              // height: "69.0px",
              position: "relative",
              opacity: 0,
            }}
          >
            Expand Your Roots{" "}
            <br
              className="mobile_break"
              style={{
                display:  isMobileLayout ? "block" : "none",
              }}
            />{" "}
            with Our Goodness
          </span>
        </div>
      </div>

      <div
        id="_64_739_Frame_2018776342"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "48px",
        }}
      >
        <div
          id="_64_740_Frame_2018776334"
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: !isMobileLayout ? "center" : "flex-start",
            flexWrap: "nowrap",
            overflowY: "auto",
            scrollbarWidth: "none", // for Firefox
            msOverflowStyle: "none", // for Internet Explorer and Edge
            gap: "32px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>

        <ButtonComponent
          label="View All"
          theme="default"
        />
      </div>
    </div>
  );
};

export default GeneratedComponent;
