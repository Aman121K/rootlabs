import React from 'react';
import './LoopingText.css';

const LoopingText = () => {
    return (
        <div
            id="_843_14301_Frame_2018776404"
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                opacity: "0.5",
                fontStyle: "italic",
                margin: "0px -60px",
                overflow: "hidden",
                width: "100vw",
            }}
        >
            <div
                className="scrolling-content" // Apply class for animation
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                }}
            >
                {Array(2)
                    .fill(0)
                    .map((_, outerIndex) => (
                        <React.Fragment key={outerIndex}>
                            {["Nature Ingredients", "Nature's Finest", "Scientifically Perfected"]
                                .map((item, innerIndex) => (
                                    <React.Fragment key={innerIndex}>
                                        <span
                                            id="Real_Ingredients"
                                            style={{
                                                color: "#13523bff",
                                                fontFamily: "Reckless TRIAL",
                                                fontSize: "64.0px",
                                                fontWeight: "400",
                                                letterSpacing: "-4.0%",
                                                textAlign: "left",
                                                whiteSpace: "nowrap",
                                                textDecoration: "italic",
                                            }}
                                        >
                                            {item}
                                        </span>
                                        <div
                                            id="_843_14303_Ellipse_622"
                                            style={{
                                                background: "rgba(19, 82, 59, 1.00)",
                                                height: "8px",
                                                width: "8px",
                                                borderRadius: "50%",
                                            }}
                                        ></div>
                                    </React.Fragment>
                                ))}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default LoopingText;
