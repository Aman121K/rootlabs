import React from 'react'
import ellipseShine from '../../../../../assets/ellipseShine.svg'

function Spice({ withBg,width,height }) {
    return (
        <div
            id="_978_18545_Frame_1820554712"
            style={{ position: "relative", height: `${height}px`, width: `${width}px`, zIndex: 50 }}
        >
            <div
                id="_978_18546_Rectangle_311"
                style={{
                    position: "absolute",
                    background: "rgba(224, 212, 155, 1.00)",
                    borderRadius: "180px",
                    filter: "blur(40.0px)",
                    height: "65.3%",
                    width: "65.3%"
                    , zIndex: 50


                }}
            ></div>
            {withBg ? <div
                id="_64_807_Ellipse_646"
                style={{
                    position: "absolute",
                    background: "rgba(48, 113, 88, 1.00)",
                    height: "65.3%",
                    width: "65.3%",
                    borderRadius: "50%",
                   top:"4%",
                   left:"4%",
                    zIndex: 0
                }}
            ></div> : null}
            <div
                id="_978_18547_Rectangle_311"
                style={{
                    position: "absolute",
                    background:
                        "url(https://mabel-cdn.platui.com/api/v1/transform/s3?projectId=d0ac3d6f-0644-4ca9-8b24-60246a9cfe67&imageHash=c7263d471bb1e84ef4f31a2564e89199edc3de1c&imageTransform=1.215999960899,0.000000000000,-0.095999993384;0.000000000000,1.011520028114,0.009280003607) center / cover no-repeat",
                    height: "47.02%",
                    width: "56.43%",
                    left: "calc(10%)",
                    top: "calc(13%)",
                    zIndex: 50
                }}
            ></div>

            <div
                id="_978_18550_Ellipse"
                style={{
                    position: "absolute",
                    background:
                        "radial-gradient(ellipse,rgba(255, 255, 255, 0.15) 5.000000074505806%, rgba(255, 255, 255, 0.00) 100.0%)",
                    transform: "rotate(6.99deg)",
                    height: "73.21%",
                    width: "73.21%",
                    borderRadius: "50%",
                    zIndex: 50

                }}
            ></div>
            <img src={ellipseShine}
                style={{
                    position: "absolute",
                    height: "73.21%",
                    width: "73.21%",
                    transform: "rotate(-30deg) ",
                    zIndex: 50

                }} />

        </div>
    )
}

export default Spice
