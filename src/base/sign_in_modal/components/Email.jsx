import React from "react";
import Translate from "react-translate-component";

export const Email = ({ changeEmail, changeEmailError, emailError }) => {
  const validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      changeEmail(email);
      changeEmailError(false);
    } else {
      changeEmail(false);
    }
  };
  console.log(changeEmail, changeEmailError, emailError)
  return (
    <div className="sign-in-email-box">
      <Translate
        component="input"
        type="email"
        className="sign-in-modal-email"
        attributes={{ placeholder: "placeholderSignEmail" }}
        onChange={(email) => validateEmail(email.target.value)}
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
