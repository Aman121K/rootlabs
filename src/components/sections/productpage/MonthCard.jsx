import React, { useRef } from 'react'

function MonthCard({ item, index, isHovered, setIsHovered, isInView }) {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(index);
        // Scroll the card into view when hovered
        // cardRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

        if (isInView) { // Only scroll if the parent is in view
            cardRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    };
    
    return (
        <div
            ref={cardRef} 
            onMouseEnter={handleMouseEnter}
            id={`pdp-work-card-${index}`}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                gap: "30px",
                opacity: isHovered == index ? "1" : "0.4",
                transition: "opacity 0.6s ease", // Add transition for opacity
            }}
        >
            <div
                id="_843_14235_Container"
                style={{
                    overflow: "hidden",
                    borderRadius: "16px",
                }}
            >
                <img
                    id="_843_14236_fellipe-ditadi-RnWnBVWL5"
                    src={item.image}
                    alt="fellipe-ditadi-RnWnBVWL5SM-unsplash"
                    style={{
                        width: isHovered == index ? 346 : 222,
                        height: isHovered == index ? 358 : 218,
                        transition: "width 0.6s ease, height 0.6s ease", // Transition for width, height, and opacity
                    }}
                />
            </div>

            <div
                id="_843_14241_Frame_1820554913"
                style={{
                    position: "relative",
                    height: "1.0px",
                    width: "80%",
                }}
            >
                <div
                    id="_843_14242_Rectangle_34624822"
                    style={{
                        position: "absolute",
                        background: "rgba(254, 248, 243, 1.00)",
                        height: "1.0px",
                        width: "100%",
                        left: "0.0px",
                        top: "calc(50% - 0.37890625px)",
                        opacity: "0.20000000298023224",
                    }}
                ></div>

                <div
                    id="_843_14243_Rectangle_34624821"
                    style={{
                        position: "absolute",
                        background: "rgba(254, 248, 243, 1.00)",
                        height: "1.0px",
                        width: isHovered === index ? `${(index + 1) * 25}%` : `${index * 25}%`, // Dynamically calculate width based on index
                        left: "0.0px",
                        top: "calc(50% - 0.37890625px)",
                        opacity: isHovered == index ? "1" : "0",
                        transition: "width 3s linear, opacity 0.6s ease", // Add transition for opacity
                    }}
                ></div>
            </div>

            <div
                id="_843_14239_Frame_1820554910"
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    gap: "20px",
                }}
            >
                <div
                    id="_843_14240_Frame_1820554905"
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        gap: "8px",
                    }}
                >

                    <div
                        id="_843_14244_Frame_1820554802"
                        style={{
                            position: "relative",
                            opacity: isHovered == index ? 1 : 0,
                            transition: "opacity 0.3s ease",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            gap: "8px",
                        }}
                    >

                        <span
                            id="Month_1"
                            style={{
                                color: "#fef8f3ff",
                                fontFamily: "Reckless TRIAL",
                                fontSize: "16.0px",
                                fontWeight: "500",
                                letterSpacing: "-4.0%",
                                textAlign: "left",

                                position: "relative",
                            }}
                        >
                            Month {item.month}
                        </span>
                    </div>
                </div>

                <div
                    id="_843_14247_Frame_1820554906"
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        gap: "4px",
                        opacity: isHovered == index ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    <div
                        id="_843_14248_Frame_1820554909"
                        style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            gap: "8px",
                        }}
                    >
                        <span
                            id="Energy_Boost"
                            style={{
                                color: "#fef8f3ff",
                                fontFamily: "Reckless TRIAL",
                                fontSize: "24.0px",
                                fontWeight: "380",
                                letterSpacing: "-3.0%",
                                textAlign: "left",
                                position: "relative",
                            }}
                        >
                            {item.title}
                        </span>
                    </div>

                    <span
                        id="Initial_boost_in_energy_levels"
                        style={{
                            color: "#e8ddd3ff",
                            fontFamily: "Matter-TRIAL",
                            fontSize: "18.0px",
                            fontWeight: "430",
                            lineHeight: "24px",
                            letterSpacing: "-1.0%",
                            textAlign: "left",
                            position: "relative",
                        }}
                    >
                        {item.description}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MonthCard
