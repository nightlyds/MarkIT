import React from "react";
import Translate from "react-translate-component";

export const Submit = ({
  email,
  password,
  changeEmailError,
  changePasswordError,
  changeSubmitError,
  submitError,
}) => {
  console.log(
    email,
    password,
    changeEmailError,
    changePasswordError,
    changeSubmitError,
    submitError
  );
  const getCookie = (name) => {
    let cookie = " " + document.cookie;
    let search = " " + name + "=";
    let setStr = null;
    let offset = 0;
    let end = 0;
    if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset !== -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset);
        if (end === -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end));
      }
    }
    return setStr;
  };
  const checkData = () => {
    if (!email) {
      changeEmailError(true);
    }
    if (!password) {
      changePasswordError(true);
    }
    if (email && password) {
      if (getCookie("email") === email && getCookie("password") === password) {
        changeSubmitError(false);
        window.location = "/myprofile";
      } else {
        changeSubmitError(true);
      }
    }
  };
  return (
    <div className="sign-in-submit-box">
      <Translate
        component="button"
        content="submitSignIn"
        type="submit"
        className="sign-in-modal-submit"
        onClick={() => {
          checkData();
        }}
      />
      {submitError && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signError"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
