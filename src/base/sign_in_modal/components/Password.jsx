import React, { useState } from "react";
import Translate from "react-translate-component";

export const Password = ({ passwordProps, email, giveEmailError }) => {
  let [errorPassword, setErrorPassword] = useState(false);

  const checkPassword = (password) => {
    if (!email) {
      giveEmailError(true);
    }
    if (password.length >= 8) {
      passwordProps(password);
      setErrorPassword(false);
    } else {
      passwordProps(false);
      setErrorPassword(true);
    }
  };
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
      {errorPassword && (
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
