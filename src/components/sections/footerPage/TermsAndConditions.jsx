import React, { useState, useEffect, useRef } from "react"; // Import useRef and useEffect
import "./TermsAndConditions.css";
import GeneratedComponent from "../Footer";
import GenerateComponent from "../Header";

const TermsAndConditions = () => {
  const [showMore, setShowMore] = useState(false);
  const mainContentRef = useRef(null); // Create a ref for the main content

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    // Scroll to the main content when the component mounts
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      <GenerateComponent />
      <div className="terms-container" ref={mainContentRef}> {/* Attach ref to main container */}
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last Updated: May 2023</p>

        <div className="terms-section">
          <p className="terms-bold">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT
            EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE
            AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT
            ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING,
            REMAINING ESSENTIALLY UNCHANGED.
          </p>
          <p className="terms-regular">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="terms-bold">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT
            EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE
            AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT
            ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING,
            REMAINING ESSENTIALLY UNCHANGED.
          </p>
          <p className="terms-regular">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="terms-section">
          <h1 className={`heading-2`}>Eligibility</h1>

          {/* Only show the first two lines of the paragraph by default */}
          <p className={`terms-regular ${showMore ? "expanded" : "faded-text"}`}>
            In order to use the Websites, you must be 18 years or older and have
            the power to enter into a binding contract with us and not be barred
            from doing so under any applicable laws.
          </p>

          <p className={`terms-extra ${showMore ? "expanded" : "hidden"}`}>
            In addition to being 18 years or older, you must also agree to our
            terms and conditions, and ensure that all the information you provide
            is accurate and complete. By using our services, you acknowledge that
            you have read, understood, and agree to comply with all policies
            outlined.
          </p>
          <p className={`terms-extra ${showMore ? "expanded" : "hidden"}`}>
            In addition to being 18 years or older, you must also agree to our
            terms and conditions, and ensure that all the information you provide
            is accurate and complete. By using our services, you acknowledge that
            you have read, understood, and agree to comply with all policies
            outlined.
          </p>
          <p className={`terms-extra ${showMore ? "expanded" : "hidden"}`}>
            In addition to being 18 years or older, you must also agree to our
            terms and conditions, and ensure that all the information you provide
            is accurate and complete. By using our services, you acknowledge that
            you have read, understood, and agree to comply with all policies
            outlined.
          </p>

          <button className="button-label read-more-btn" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
      <GeneratedComponent />
    </div>
  );
};

export default TermsAndConditions;