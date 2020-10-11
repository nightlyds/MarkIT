import React from "react";
import Translate from "react-translate-component";

export const Password = ({ changePassword, changePasswordError, passwordError }) => {
  const checkPassword = (password) => {
    if (password.length >= 8) {
      changePassword(password);
      changePasswordError(false);
    } else {
      changePassword(false);
      changePasswordError(true);
    }
  };
  console.log(changePassword, changePasswordError, passwordError)
  return (
    <div className="sign-in-password-box">
      <Translate
        component="input"
        type="password"
        className="sign-in-modal-password"
        attributes={{ placeholder: "placeholderSignPassword" }}
        onChange={(password) => {
          checkPassword(password.target.value);
        }}
      />
      {passwordError && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signErrorInPassword"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
