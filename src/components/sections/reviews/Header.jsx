import React from 'react'
import { useIntersectionAnimation } from '../../../animation/useIntersectionAnimation';

function Header() {
    const animation = "slideUp 0.7s ease-in forwards";
    const textRef = useIntersectionAnimation(animation, { threshold: 0.1 });
    return (
        <div
            id="_843_14530_Frame_1820554699"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "16px",
            }}
        >
            <span
                id="REVIEWS"
                style={{
                    color: "#13523bff",
                    fontFamily: "Matter-TRIAL",
                    fontSize: "16.0px",
                    fontWeight: "430",
                    lineHeight: "120%",
                    letterSpacing: "1.3px",
                    textAlign: "left",
                    height: "19.0px",
                    width: "1289.0px",
                    position: "relative",
                }}
            >
                REVIEWS
            </span>
            <div
                style={{
                    overflow: "hidden",
                    height: "90px"
                }}>
                <span
                    ref={textRef}
                    id="Customer_Product_Reviews"
                    style={{
                        color: "#1e1e1eff",
                        fontFamily: "Reckless TRIAL",
                        fontSize: "56px",
                        fontWeight: "400",
                        lineHeight: "124%",
                        letterSpacing: "-1.8px",
                        position: "relative",
                    }}
                >
                    Customer Product Reviews
                </span>
            </div>
        </div>
    )
}

export default Header
