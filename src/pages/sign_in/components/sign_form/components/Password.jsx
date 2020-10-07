import React from "react";
import Translate from "react-translate-component";

export const Password = ({
  givePassword,
  getErrorPassword,
  giveErrorPassword,
}) => {
  const checkPassword = (password) => {
    if (password.length >= 8) {
      givePassword(password);
      giveErrorPassword(false);
    } else {
      givePassword(false);
    }
  };
  return (
    <div className="sign-in-sign-form-content-left-side-form-password-box">
      <Translate
        component="label"
        content="signInPasswordLabel"
        className="sign-in-sign-form-content-left-side-form-label"
        htmlFor="signInPassword"
      />{" "}
      <input
        type="password"
        className="sign-in-sign-form-content-left-side-form-password"
        id="signInPassword"
        onChange={(password) => {
          checkPassword(password.target.value);
        }}
      />
      {getErrorPassword && (
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
