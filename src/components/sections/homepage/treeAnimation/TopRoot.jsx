import React from 'react'

function TopRoot({ color, index, isSmall }) {
    return (
        <svg width={isSmall ? "320" : "442"} height={isSmall ? "180" : "283"} viewBox="0 0 442 283" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_976_18508)">
                {index == 0 && <path d="M16 14L16 59.3706C16 101.344 50.0264 135.371 92 135.371H142C183.974 135.371 218 169.397 218 211.371V274" stroke={index == 0 ? color : "#26604B"} stroke-width="7" stroke-linecap="round" />}
                {index == 1 && <path d="M136 12V92.4184C136 108.48 149.02 121.5 165.082 121.5V121.5C190.442 121.5 211 142.058 211 167.418V263" stroke={index == 1 ? color : "#26604B"} stroke-width="7" stroke-linecap="round" />}
                {index == 2 && <path d="M294 6V72.5508C294 99.5847 272.085 121.5 245.051 121.5V121.5C230.111 121.5 218 133.611 218 148.551V271" stroke={index == 2 ? color : "#26604B"} stroke-width="7" stroke-linecap="round" />}
                {index == 3 && <path d="M431 22V66.8236C431 108.797 396.974 142.824 355 142.824H266C242.804 142.824 224 161.628 224 184.824V283" stroke={index == 3 ? color : "#26604B"} stroke-width="7" stroke-linecap="round" />}
                {index == 4 && <><path d="M294 6V72.5508C294 99.5847 272.085 121.5 245.051 121.5V121.5C230.111 121.5 218 133.611 218 148.551V271" stroke="#26604B" stroke-width="7" stroke-linecap="round" />
                    <path d="M431 22V66.8236C431 108.797 396.974 142.824 355 142.824H266C242.804 142.824 224 161.628 224 184.824V283" stroke="#26604B" stroke-width="7" stroke-linecap="round" />
                    <path d="M136 12V92.4184C136 108.48 149.02 121.5 165.082 121.5V121.5C190.442 121.5 211 142.058 211 167.418V263" stroke="#26604B" stroke-width="7" stroke-linecap="round" />
                    <path d="M16 14L16 59.3706C16 101.344 50.0264 135.371 92 135.371H142C183.974 135.371 218 169.397 218 211.371V274" stroke="#26604B" stroke-width="7" stroke-linecap="round" /></>}
            </g>
            <defs>
                <clipPath id="clip0_976_18508">
                    <rect width="442" height="283" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default TopRoot
