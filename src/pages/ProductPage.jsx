import React, { useEffect, useState } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import OurProducts from "../components/sections/homepage/OurProducts";
import ProductDetails from "../components/sections/productpage/ProductDetails";
import ProductImages from "../components/sections/productpage/ProductImages";
import Technology from "../components/sections/productpage/Technology";
import Reviews from "../components/sections/productpage/Reviews";
import Questions from "../components/sections/productpage/Questions";
import DoctorsSay from "../components/sections/productpage/DoctorsSay";
import HowItWorks from "../components/sections/productpage/HowItWorks";
import Ingredients from "../components/sections/productpage/Ingredients";
import Rating from "../components/sections/productpage/Rating";
import CustomerTestimonial from "../components/sections/homepage/CustomerTestimonial";
import StoreFront from "../client/StoreFrontClient.js";
import { useLocation } from "react-router-dom";
import ArrowButton from "../components/common/ArrowButton.jsx";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ProductPage() {
  const query = useQuery();
  const productHandle = query.get("productHandle");
  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= 768
  );
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileLayout(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    const fetchProducts = async () => {
      try {
        const products = await StoreFront.fetchAllProducts(1, 5, true);
        if (products) {
          setProduct(products[0].node);
          initializeQuantity(products[0].node.handle);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchProduct = async () => {
      try {
        const product = await StoreFront.fetchProductByHandle(
          productHandle,
          5,
          true
        );
        if (product) {
          setProduct(product);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const initializeQuantity = (productHandle) => {
      const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingItem = existingCart.find(
        (item) => item.productHandle === productHandle
      );
      if (existingItem) {
        setQuantity(existingItem.quantity);
      }
    };

    if (!productHandle) {
      fetchProducts();
    } else {
      fetchProduct();
      initializeQuantity(productHandle);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [productHandle]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        paddingTop: "120px",
        background: "#f2f0e8",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
        fontFamily: "Reckless TRIAL",
      }}
    >
      <Header />
      <div
        id="product_id"
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: isMobileLayout ? "nowrap" : "wrap",
          padding: "0px 40px",
          gap: 10,
          fontSize: "large",
          flexDirection: isMobileLayout ? "column" : "row",
        }}
      >
        <div
          style={{
            flex: 1,
            // overflowY: "auto",
            // maxHeight: "80vh",
            paddingRight: "20px",
            // scrollbarWidth: "none",
          }}
        >
          <ProductImages
            images={product?.images?.edges}
            isMobileLayout={isMobileLayout}
          />
        </div>

        <div
          style={{
            position: "sticky",
            top: "-120px",
            flexBasis: isMobileLayout ? "100%" : "40%",
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <ProductDetails
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>

      <Rating />
      <Technology />
      <HowItWorks />
      <Ingredients />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          padding: "0px 16px 80px 16px",
        }}
      >
        <CustomerTestimonial />
        <div
          id="_64_1103_Button_default2"
          style={{
            position: "relative",
            height: "48px",
            width: "220px",
            alignSelf: "center",
          }}
        >
          <ArrowButton
            label="Read More"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
      <DoctorsSay />
      <Reviews />
      <Questions />
      <OurProducts />
      <Footer />
    </div>
  );
}

export default ProductPage;
