import React from "react";
import "./TermsAndConditions.css";
import GeneratedComponent from "../Footer";
import GenerateComponent from "../Header";

const TermsAndConditions = () => {
  return (
    <div>
      <GenerateComponent />
      <div className="terms-container">
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
        </div>

        <div className="terms-section">
          <p className="terms-bold">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT
            EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE
            AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT
            ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING,
            REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1960S
            WITH THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM PASSAGES,
            AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE LIKE ALDUS
            PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM.
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
          <h1 className="heading-2">Elisibility</h1>

          <button className="button-label">Read More</button>
        </div>
      </div>
      <GeneratedComponent />
    </div>
  );
};

export default TermsAndConditions;
