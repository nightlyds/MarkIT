import React from "react";
import { Link } from 'react-router-dom';
import Translate from "react-translate-component";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Checkbox = ({ giveCheckbox, getCheckbox, getErrorCheckbox }) => {
  return (
    <div className="sign-up-sign-form-content-left-side-form-checkbox-box">
      <div
        className="sign-up-sign-form-content-left-side-form-checkbox"
        onClick={() => {
          giveCheckbox(!getCheckbox);
        }}
      >
        {getCheckbox && (
          <FontAwesomeIcon
            icon={faCheck}
            className="sign-up-sign-form-content-left-side-form-checkbox-icon"
          />
        )}
      </div>
      <div className="sign-up-sign-form-content-left-side-form-checkbox-text-box">
        <Translate
          component="span"
          content="signUpRights"
          className="sign-up-sign-form-content-left-side-form-checkbox-text"
        />
        <span> </span>
        <Link to="/">
          <Translate
            component="a"
            content="signUpRightsLink"
            className="sign-up-sign-form-content-left-side-form-checkbox-link"
          />
        </Link>
        {getErrorCheckbox && (
          <div className="sign-in-modal-error-box">
            <Translate
              component="p"
              content="signErrorCheckbox"
              className="sign-modal-error"
            />
          </div>
        )}
      </div>
    </div>
  );
};
