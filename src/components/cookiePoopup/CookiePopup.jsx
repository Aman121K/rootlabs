import React, { useState } from "react";
import "./CookiePopup.css";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  const handleAcceptAll = () => {
    console.log("Accepted all cookies");
    setIsVisible(false);
    setShowBanner(true);
  };

  const handleRejectAll = () => {
    console.log("Rejected all cookies");
    setIsVisible(false);
  };

  return (
    <>
        {isVisible && (
      <div className="cookie-popup-overlay">
        <div className="cookie-popup">
          <h2>Cookie Settings</h2>
          <p>
            By clicking “Accept All”, you consent to all defined categories of
            cookies including analytics and targeting cookies.{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
          <div className="button-group">
            <button className="reject-button" onClick={handleRejectAll}>
              Reject All
            </button>
            <button className="accept-button" onClick={handleAcceptAll}>
              Accept All
            </button>
          </div>
        </div>
      </div>)}
      {showBanner && (
  <div className="cookie-banner">
    <p>
      We use third-party cookies across all defined categories of cookies
      including analytics and targeting cookies.{" "}
      <a href="/terms-and-conditions">Privacy Policy</a>
    </p>
    <button className="close-banner" onClick={() => setShowBanner(false)}>
      &times;
    </button>
  </div>
)}

    </>
    )
};

export default CookiePopup;
