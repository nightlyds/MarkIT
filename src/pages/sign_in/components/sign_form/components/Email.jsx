import React from "react";
import Translate from "react-translate-component";

export const Email = ({ emailError, changeEmail, changeEmailError }) => {
  const validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      changeEmail(email);
      changeEmailError(false);
    } else {
      changeEmail(false);
    }
  };
  
  return (
    <div className="sign-in-sign-form-content-left-side-form-email-box">
      <Translate
        component="label"
        content="signInEmailLabel"
        className="sign-in-sign-form-content-left-side-form-label"
        htmlFor="signInEmail"
      />{" "}
      <input
        type="text"
        className="sign-in-sign-form-content-left-side-form-email"
        id="signInEmail"
        onChange={(email) => {
          validateEmail(email.target.value);
        }}
      />
      {emailError && (
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
