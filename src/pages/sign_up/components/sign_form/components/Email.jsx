import React from "react";
import Translate from "react-translate-component";

export const Email = ({ giveEmail, getErrorEmail, giveErrorEmail }) => {
  const validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      giveEmail(email);
      giveErrorEmail(false);
    } else {
      giveEmail(false);
    }
  };
  return (
    <div className="sign-up-sign-form-content-left-side-form-email-box">
      <Translate
        component="label"
        content="signUpEmailLabel"
        className="sign-up-sign-form-content-left-side-form-label"
        htmlFor="signUpEmail"
      />{" "}
      <input
        type="text"
        className="sign-up-sign-form-content-left-side-form-email"
        id="signUpEmail"
        onChange={(email) => {
          validateEmail(email.target.value);
        }}
      />
      {getErrorEmail && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signErrorEmail"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
