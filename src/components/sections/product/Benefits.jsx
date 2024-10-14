import React from "react";
import hormonal from "../../../../assets/hormonal.svg";
import anxiety from "../../../../assets/anxiety.svg";
import health from "../../../../assets/health.svg";
import energy from "../../../../assets/energy.svg";
import ExpandableBenefits from "../productpage/ExpandableBenefits.jsx";

function Benefits() {
  return (
    <div
      id="_843_15250_Frame_1820554890"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: "20px",
      }}
    >
      <span
        id="Benefits_"
        style={{
          color: "#1e1e1eff",
          fontFamily: "Matter-TRIAL-Medium",
          fontSize: "18.0px",
          fontWeight: "570",
          lineHeight: "20px",
          letterSpacing: "-1.0%",
          textAlign: "left",
        }}
      >
        Benefits:
      </span>
      <div
        id="_843_15252_Frame_2018776400"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        {[
          {
            image: energy,
            title: "Energy",
            content: "EnergyJKEfhbniweucksdjfhbcniuweshjdhfbcewiuhjdn",
          },
          {
            image: hormonal,
            title: "Hormonal Health",
            content: "EnergyJKEfhbniweucksdjfhbcniuweshjdhfbcewiuhjdn",
          },
          {
            image: health,
            title: "Gut Health",
            content: "EnergyJKEfhbniweucksdjfhbcniuweshjdhfbcewiuhjdn",
          },
          {
            image: anxiety,
            title: "Stress & Anxiety",
            content: "EnergyJKEfhbniweucksdjfhbcniuweshjdhfbcewiuhjdn",
          },
        ].map((benefit, index) => (
          <ExpandableBenefits
            key={index}
            imageSrc={benefit.image}
            title={benefit.title}
          >
            <span
              id="Energy"
              style={{
                color: "#1e1e1eff",
                fontFamily: "Matter-TRIAL",
                fontSize: "18.0px",
                fontWeight: "430",
                lineHeight: "24px",
                letterSpacing: "-1.0%",
                textAlign: "left",
                marginRight: "auto",
                color:"rgb(85, 85, 85)",
                wordBreak:"break-word"
              }}
            >
              {benefit.content}
            </span>
          </ExpandableBenefits>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
