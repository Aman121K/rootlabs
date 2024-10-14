import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const GeneratedComponent = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      id="_64_741_Frame_2018776331"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "40px",
        padding: "0px 40px",
      }}
    >
      <div style={{
        position: "relative",
      }}>
      <img
        id="_64_742_"
        onClick={() => navigate(`/product?productHandle=${product.handle}`)}
        src={product.images.edges[0].node.url}
        alt={product.title}
        style={{
          position: "relative",
          width: "300.0px",
          minHeight: "300.0px",
          cursor: "pointer",
        }}
      />
      <div style={{
        position:"absolute",
        width:45,
        height:45,
        background:"white",
        bottom:0,
        left:"50%",
        borderRadius:"50%",
        border:"1px solid rgb(19, 82, 59)",
        transform:"translateX(-50%) translateY(50%)",
        fontSize:30,
        color:"rgb(19, 82, 59)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
<IoMdAdd />

      </div>
      </div>
      
      <div
        id="_64_752_Frame_1820554761"
        style={{
          position: "relative",
          //   height: "123.0px",
          width: "calc(100% - 0px - 0px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "8px",
        }}
      >
        <div
          id="_64_753_Frame_1820554764"
          style={{
            position: "relative",
            // height: "82.0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "4px",
          }}
        >
          <span
            id="Shilajit_Gummies"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Matter-TRIAL",
              fontSize: "24px",
              fontWeight: "570",
              lineHeight: "30px",
              letterSpacing: "0.2px",
              textAlign: "center", // Centered horizontally
              display: "block", // Make it a block-level element to center it properly
              margin: "0 auto", // Centering with auto margins
              //   height: "30px",
              width: "200px", // Adjusted the width slightly for better centering
              position: "relative",
            }}
          >
            {product.title}
          </span>
          <span
            id="Boost_energy_and_vitality_with__nature_s_powerful_adaptogen_"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Matter-TRIAL",
              fontSize: "18px",
              fontWeight: "430",
              lineHeight: "24px",
              letterSpacing: "0.1px",
              textAlign: "center",
              display: "block", // Block-level for centering
              margin: "10px auto", // Adding margin for better spacing and centering
              height: "auto", // Let height adjust dynamically
              width: "300px", // Increased width for description
              position: "relative",
              opacity: "0.8",
              //   whiteSpace: "nowrap", // Ensure the text is truncated with ellipsis if too long
              overflow: "hidden", // Hide overflowing text
              textOverflow: "ellipsis", // Add ellipsis for long text
            }}
          >
            {product.description.length > 44
              ? product.description.substring(0, 44) + "..."
              : product.description}
          </span>
        </div>

        <div
          id="_64_756_Frame_1820554763"
          style={{
            position: "relative",
            height: "33.0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "6px",
          }}
        >
          <span
            id="_27"
            style={{
              color: "#1e1e1eff",
              fontFamily: "Matter-TRIAL",
              fontSize: "24.0px",
              letterSpacing: "-1.0%",
              textAlign: "left",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "Manrope",
              }}
            >
              $
            </span>
            {product.variants.edges[0].node.price.amount}
          </span>
          <span
            id="_30"
            style={{
              textDecoration: "line-through",
              fontFamily: "Matter-TRIAL",
              color: "#1e1e1eff",
              fontSize: "18.0px",
              lineHeight: "24px",
              letterSpacing: "-1.0%",
              textAlign: "left",
              position: "relative",
              opacity: "0.800000011920929",
            }}
          >
            <span
              style={{
                fontFamily: "Manrope",
              }}
            >
              $
            </span>
            {product.variants.edges[0].node.compareAtPrice.amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
