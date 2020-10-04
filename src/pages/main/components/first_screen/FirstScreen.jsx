import React from "react";
import Translate from "react-translate-component";

import FirstScreenImage from "../../images/first_screen.svg";

export const FirstScreen = ({ openSignUpModal }) => {
  return (
    <div className="main-first-screen-box">
      <div className="main-first-screen">
        <div className="main-first-screen-image-box">
          <img
            src={FirstScreenImage}
            className="main-first-screen-image wow animate__fadeInLeft"
            alt="First Screen"
          />
        </div>
        <div className="main-first-screen-content">
          <Translate
            component="h1"
            content="firstScreenTitle"
            className="main-first-screen-title wow animate__fadeInTopRight"
          />
          <Translate
            component="span"
            content="firstScreenSubTitle"
            className="main-first-screen-sub-title wow animate__fadeInUp"
          />
          <div className="main-first-screen-contacts-buttons wow animate__fadeInUp">
            <Translate
              component="span"
              content="firstScreenContactFirstButton"
              className="main-first-screen-contact-first-button"
              onClick={() => {
                openSignUpModal();
              }}
            />
            <Translate
              component="span"
              content="firstScreenContactSecondButton"
              className="main-first-screen-contact-second-button"
              onClick={() => {
                openSignUpModal();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
