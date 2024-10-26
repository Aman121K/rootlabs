import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    // Automatically close the toast after 3 seconds
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [onClose]);

  return (
    <div className="custom-toast">
      <p>{message}</p>
      <button className="close-toast" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;