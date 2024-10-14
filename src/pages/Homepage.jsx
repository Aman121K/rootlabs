import { useNavigate } from "react-router-dom";
import React from "react";
import HeroHeader from "../components/sections/HeroHeader.jsx";
import OurService from "../components/sections/homepage/OurService.jsx";
import OurProducts from "../components/sections/homepage/OurProducts.jsx";
import TreeAnimation from "../components/sections/homepage/TreeAnimation.jsx";
import ProductAnimation from "../components/sections/homepage/ProductAnimation.jsx";
import Testimonial from "../components/sections/homepage/Testimonial.jsx";
import OurServiceGraph from "../components/sections/homepage/OurServiceGraph.jsx";
import CustomerTestimonial from "../components/sections/homepage/CustomerTestimonial.jsx";
import OurStudy from "../components/sections/homepage/OurStudy.jsx";
import Social from "../components/sections/homepage/Social.jsx";
import Footer from "../components/sections/Footer.jsx";

const GeneratedComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      id="_64_640_First_final_once"
      style={{
        position: "",
        overflow: "hidden",
        background: "rgba(242, 240, 232, 1.00)",
        height: "fit-content",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
        fontFamily: 'Reckless TRIAL'

      }}
    >
      <HeroHeader />

      <OurService />

      <OurProducts />

      <TreeAnimation/>

      <ProductAnimation/>

      <Testimonial />
      
      <OurServiceGraph/>

      <OurStudy />


      <CustomerTestimonial />


      {/* <Social /> */}
      
      <Footer />

    </div>
  );
};

export default GeneratedComponent;
