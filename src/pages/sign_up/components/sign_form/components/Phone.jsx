import React from "react";
import Translate from "react-translate-component";

export const Phone = ({ givePhone, getErrorPhone, giveErrorPhone }) => {
  const validatePhone = (phone) => {
    let valid = /^\d[\d\(\)\ -]{4,14}\d$/;
    if (valid.test(phone) === true && phone.length >= 8) {
      givePhone(phone);
      giveErrorPhone(false);
    } else {
      givePhone(false);
    }
  };
  return (
    <div className="sign-up-sign-form-content-left-side-form-phone-box">
      <Translate
        component="label"
        content="signUpPhoneLabel"
        className="sign-up-sign-form-content-left-side-form-label"
        htmlFor="signUpPhone"
      />{" "}
      <input
        type="text"
        className="sign-up-sign-form-content-left-side-form-phone"
        id="signUpPhone"
        onChange={(phone) => {
          validatePhone(phone.target.value);
        }}
      />
      {getErrorPhone && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signErrorPhone"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
