import React from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import Superman from "../../images/superman.svg";

export const Support = ({ openSignUpModal }) => {
  return (
    <div className="main-support wow animate__fadeIn" data-wow-duration="3s" data-wow-offset="100">
      <div className="main-support-description-box">
        <Translate
          component="h2"
          content="supportTitle"
          className="main-support-title"
        />
        <Translate
          component="p"
          content="supportText"
          className="main-support-text"
        />
      </div>
      <div className="main-support-superman-box">
        <img src={Superman} className="main-support-superman" alt="Superman" />
      </div>
      <div className="main-support-contacts-box">
        <div className="main-support-contacts-number-box">
          <Translate
            component="span"
            content="supportNumberTitle"
            className="main-support-contacts-number-title"
          />
          <Link
            href="tel:7 (989) 722-65-98"
            className="main-support-contacts-number"
          >
            +7 (989) 722-65-98
          </Link>
        </div>
        <div className="main-support-contacts-email-box">
          <span className="main-support-contacts-email-title">e-mail:</span>
          <Link
            href="mailto:info@markit-group.org"
            className="main-support-contacts-email"
          >
            info@markit-group.org
          </Link>
        </div>
        <div className="main-support-contacts-button-box">
          <Translate
            component="span"
            content="supportButton"
            className="main-support-contacts-button"
            onClick={() => {
              openSignUpModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};
