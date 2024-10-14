import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

function ReviewDescription() {
  return (
    <div style ={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap',
      gap:'32px'
    }}>

    
    <div
      id="_843_14750_Frame_2018776387"
      style={{       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        gap: '12px',
        maxWidth:700
      }}
    >
      <div
        id="_843_14751_Frame_1820554944"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexWrap: 'nowrap',
          gap: '16px',
        }}
      >
        <div
          id="_843_14752_Frame_1820554950"
          style={{
            position: 'relative',
            height: '62px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            gap: '16px',
          }}
        >
          <div
            id="_843_14753_Frame_1820554932"
            style={{
              position: 'relative',
              fontSize: '19px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: '4px',
              color:"#E5732E"
            }}
          >
            <IoStar/>
            <IoStar/>
            <IoStar/>
            <IoStar/>
            <IoStar/>

          </div>

          <span
            id="Heading___Great_taste_and_great_price"
            style={{
              color: '#1e1e1e',
              fontFamily: 'Matter-TRIAL',
              fontSize: '22px',
              fontWeight: 430,
              lineHeight: '24px',
              letterSpacing: '-1%',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            Great taste and great price
          </span>
        </div>
      </div>

      <div
        id="_843_14760_Frame_1820554948"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          gap: '16px',
        }}
      >
        <span
          id="review_text"
          style={{
            color: '#1e1e1e',
            fontFamily: 'Matter-TRIAL',
            fontSize: '18px',
            fontWeight: 430,
            lineHeight: '20px',
            letterSpacing: '-1%',
            textAlign: 'left',
           
            position: 'relative',
          }}
        >
          Been taking for a week so far and I can tell a slight difference in
          energy. The flavor is nice like a citrus flavor as described and has a
          chewy texture which is more like a snack than a gummy which I prefer.
          I look forward to taking my gems every morning. The cost for these
          compared to other similar supplements is just right - not too pricey
          and affordable each month.
        </span>
        <div
          id="_843_14762_Frame_1820554947"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          
            flexWrap: 'nowrap',
            gap: '20px',
          }}
        >
          <span
            id="Review_left_on"
            style={{
              color: '#1e1e1e',
              fontFamily: 'Matter-TRIAL',
              fontSize: '16px',
              fontWeight: 430,
              lineHeight: '20px',
              letterSpacing: '-1%',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            Review left on: The GEM Bite - 28 Bite Bundle - Citrus Ginger
          </span>
        </div>
      </div>
    </div>
    <div
        style={{
          position: "absolute",
          top: 70,
          right: 20,
          color: "#1E1E1E",
        }}
      >
        25 Days Ago
      </div>
    <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          textWrap: "nowrap",
          fontSize: "19px",
          alignItems: "flex-end",
        }}
      >
        Was This helpful ? &nbsp;
        <IoMdThumbsUp style={{ color: "#13523B" }} /> 1 &nbsp;
        <IoMdThumbsDown style={{ color: "#13523B" }} />
      </div>
    </div>
  );
}

export default ReviewDescription;
