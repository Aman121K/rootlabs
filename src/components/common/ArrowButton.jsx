import React, { useState } from "react";
import './ArrowButton.css';
import arrow from '../../../assets/arrow.svg';
import green_arrow from "../../../assets/green_arrow.svg";

const ButtonComponent = ({ 
  label, 
  onClick, 
  theme = 'default' // Define a prop for selecting a theme
}) => {

  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Define four predefined color sets, including hover background color
  const themes = {
    default: {
      borderColor: '#13523b',
      containerBg: 'rgba(242, 240, 232, 1.00)',
      hoverContainerBg: '#f0f0f0',
      labelColor: '#13523b',
      arrowBg: 'rgba(19, 82, 59, 1.00)',
      arrowColor: 'white',
      url: arrow
    },
    white: {
      borderColor: '#ffffff',
      containerBg: 'rgba(242, 240, 232, 1.00)',
      hoverContainerBg: '#f0f0f0',
      labelColor: '#13523b',
      arrowBg: '#13523b',
      arrowColor: 'white',
      url: arrow
    },
    green: {
      borderColor: '#13523b',
      containerBg: '#13523b',
      hoverContainerBg: '#13523b',
      labelColor: 'white',
      arrowBg: 'white',
      arrowColor: '#13523b',
      url: green_arrow
    },
  };

  // Choose the theme colors based on the theme prop
  const selectedTheme = themes[theme] || themes.default;

  return (
    <div
      className="button-container"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}   // Set hover state to true
      onMouseLeave={() => setIsHovered(false)}  // Reset hover state
      style={{
        borderColor: selectedTheme.borderColor,
        backgroundColor: isHovered ? selectedTheme.hoverContainerBg : selectedTheme.containerBg, // Change bg on hover
      }}
    >
      <div className="button-content">
        <span 
          className="button-label" 
          style={{ color: selectedTheme.labelColor }}
        >
          {label}
        </span>
        <div 
          className="button-icon" 
          style={{ backgroundColor: selectedTheme.arrowBg }}
        >
          <img
            src={selectedTheme.url}
            alt="Instagram Logo"
            className="instagram-logo"
          />
          <img
            src={selectedTheme.url}
            alt="Instagram Logo"
            className="new-instagram-logo"
          />
          {/* <Arrow color={selectedTheme.arrowColor} className="instagram-logo" />
          <Arrow color={selectedTheme.arrowColor} className="new-instagram-logo" /> */}
        </div>
      </div>
    </div>
  );
};

// const Arrow = ({ color }) => {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M9.17724 5.17188L19.0699 5.17874L19.0768 15.0713M18.3834 5.86525L4.92773 19.3208" 
//         stroke={color} 
//         strokeWidth="2" 
//         strokeMiterlimit="10" 
//         strokeLinecap="round" 
//       />
//     </svg>
//   );
// };

export default ButtonComponent;
