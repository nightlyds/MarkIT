import React from "react";
import Translate from "react-translate-component";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Submit = ({
  email,
  password,
  changeEmailError,
  changePasswordError
}) => {
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
    if (
      getCookie("email") === email &&
      getCookie("password") === password
    ) {
      window.location = "/myprofile";
    }
  };
  return (
    <div className="sign-in-sign-form-content-left-side-form-submit-box">
      <div
        className="sign-in-sign-form-content-left-side-form-submit-sub-box"
        onClick={() => {
          checkData();
        }}
      >
        <Translate
          component="span"
          content="signInSubmit"
          className="sign-in-sign-form-content-left-side-form-submit"
        />
        <FontAwesomeIcon
          icon={faSignInAlt}
          className="sign-in-sign-form-content-left-side-form-submit-icon"
        />
      </div>
    </div>
  );
};
