import React from "react";
import Translate from "react-translate-component";

export const Email = ({ emailProps, getEmailError, giveEmailError }) => {
  const validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      emailProps(email);
      giveEmailError(false);
    } else {
      emailProps(false);
    }
  };
  return (
    <div className="sign-in-email-box">
      <Translate
        component="input"
        type="email"
        className="sign-in-modal-email"
        attributes={{ placeholder: "placeholderSignEmail" }}
        onChange={(email) => validateEmail(email.target.value)}
      />
      {getEmailError && (
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
