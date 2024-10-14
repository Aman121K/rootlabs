import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoStar } from 'react-icons/io5'

function Rating() {
    return (
        <div
            id='moving_tag'
            style={{
                display: "flex",
                gap: 20,
                fontWeight: 'bold',
                padding: "40px 60px",
                flexWrap: "wrap"
            }}>
            <div style={{ display: "flex", gap: 3 }}>
                <div style={{
                    color: "#E5732E",
                }}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>

                <div style={{
                    textDecoration: "underline",
                    fontFamily:"Matter-TRIAL"
                }}>
                    <GoDotFill fontSize={10} /> 5243 + trusted reviews
                </div>
            </div>
            <div style={{ width: "1px", background: "#DFDAD5" }}></div>
            <div style={{
                display: "flex",
                flex: 1,
                minWidth: 350,
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
                // overflowY: "auto",
                scrollbarWidth: "none", // for Firefox
                msOverflowStyle: "none", // for Internet Explorer and Edge
                fontWeight: "lighter",
            }}>
                <div
                style={{
                    display:"flex",
                    animation: "scroll 20s linear infinite", // Smooth scrolling animation
                    gap: 40,
                    width: "100%",
                }}>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                <div style={{
                    fontWeight: "normal",
                    color: "#9D9D9C",
                    display: "flex",
                    flexWrap: "nowrap"
                }}>
                    <span style={{
                        color: "#1E1E1E",
                        textWrap: "nowrap"
                    }}>"Increase in Energy"</span>
                    <GoDotFill fontSize={10} /> Anik
                </div>
                </div>

            </div>
        </div>
    )
}

export default Rating
