import React from "react";
import Translate from "react-translate-component";

export const Password = ({ passwordError, passwordChange, passwordErrorChange }) => {
  const checkPassword = (password) => {
    if (password.length >= 8) {
      passwordChange(password);
      passwordErrorChange(false);
    } else {
      passwordChange(false);
    }
  };
  return (
    <div className="sign-up-sign-form-content-left-side-form-password-box">
      <Translate
        component="label"
        content="signUpPasswordLabel"
        className="sign-up-sign-form-content-left-side-form-label"
        htmlFor="signUpPassword"
      />{" "}
      <input
        type="password"
        className="sign-up-sign-form-content-left-side-form-password"
        id="signUpPassword"
        onChange={(password) => {
          checkPassword(password.target.value);
        }}
      />
      {passwordError && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signInErrorPassword"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
