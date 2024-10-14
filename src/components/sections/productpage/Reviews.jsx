import React from "react";
import { IoStar } from "react-icons/io5";

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Header from "../reviews/Header";
import ReviewCount from "../reviews/ReviewCount";
import Review from "../reviews/Review";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function Reviews() {
  return (
    <div
      id="reviews"
      style={{
        padding: "80px 80px",
        fontFamily: "Matter-TRIAL",
      }}
    >
      <Header />
      <ReviewCount />
      <div
        style={{
          display: "flex",
          fontSize: 20,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            marginRight: "auto",
          }}
        >
          <div
            id="_843_146042_Button_default"
            style={{
              width: "fit-content",
              borderColor: "#13523bff",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "360px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
              padding: "12px 16px",
            }}
          >
            <div
              id="_843_14605_Frame"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "20px",
                width: "20px",
              }}
            >
              <CiSearch />
            </div>

            <span
              id="Serch_reviews"
              style={{
                color: "#13523bff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16px",
                fontWeight: "430",
                lineHeight: "20px",
                textAlign: "left",
                height: "20px",
                width: "258px",
                position: "relative",
              }}
            >
              Serch reviews
            </span>
          </div>
          <div
            id="_843_14604_Button_default"
            style={{
              width: "fit-content",
              borderColor: "#13523bff",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "360px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
              padding: "12px 16px",
            }}
          >
            <span
              id="Serch_reviews"
              style={{
                color: "#13523bff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16px",
                fontWeight: "430",
                lineHeight: "20px",
                textAlign: "left",
                height: "20px",
                width: "120px",
                position: "relative",
              }}
            >
              Ratings
            </span>
            <div
              id="_843_14605_Frame"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "20px",
                width: "20px",
              }}
            >
              <IoIosArrowDown />
            </div>
          </div>
          <div
            id="_843_14604_Button_default"
            style={{
              width: "fit-content",
              borderColor: "#13523bff",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "360px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
              padding: "12px 16px",
            }}
          >
            <span
              id="Serch_reviews"
              style={{
                color: "#13523bff",
                fontFamily: "Matter-TRIAL",
                fontSize: "16px",
                fontWeight: "430",
                lineHeight: "20px",
                textAlign: "left",
                height: "20px",
                width: "120px",
                position: "relative",
              }}
            >
              Ratings
            </span>
            <div
              id="_843_14605_Frame"
              style={{
                position: "relative",
                border: "1px solid #13523bff",
                borderRadius: "50%",
                height: "10px",
                width: "10px",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            color: "#13523B",
            alignSelf: "center",
          }}
        >
          Sort by : Most Recent <IoIosArrowDown />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "40px 0px",
          flexDirection: "column",
        }}
      >
        <Review />
        <Review />
        <Review />
      </div>
      <div
        style={{
          display: "flex",
          gap: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowLeftLong />
        <div
          style={{
            height: 30,
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            background: "#13523B",
            color: "white",
          }}
        >
          1
        </div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default Reviews;
