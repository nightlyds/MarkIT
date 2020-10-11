import React from "react";
import Translate from "react-translate-component";

import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Submit = ({
  email,
  password,
  country,
  phone,
  checkbox,
  emailErrorChange,
  countryErrorChange,
  phoneErrorChange,
  passwordErrorChange,
  checkboxErrorChange,
}) => {
  const setCookie = (name, value) => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 1000 * 24 * 30);
    document.cookie = name + "=" + value + "; expires='" + date + ";'";
  };
  const checkData = () => {
    if (!email) {
      emailErrorChange(true);
    }
    if (!phone) {
      phoneErrorChange(true);
    }
    if (!password) {
      passwordErrorChange(true);
    }
    if (!country) {
      countryErrorChange(true);
    }
    if (!checkbox) {
      checkboxErrorChange(true);
    }
    if (email && password && phone && country && checkbox) {
      setCookie("email", email);
      setCookie("password", password);
      window.location = "/myprofile";
    }
  };
  return (
    <div className="sign-up-sign-form-content-left-side-form-submit-box">
      <div
        className="sign-up-sign-form-content-left-side-form-submit-sub-box"
        onClick={() => {
          checkData();
        }}
      >
        <Translate
          component="span"
          content="signUpSubmit"
          className="sign-up-sign-form-content-left-side-form-submit"
        />
        <FontAwesomeIcon
          icon={faUserPlus}
          className="sign-up-sign-form-content-left-side-form-submit-icon"
        />
      </div>
    </div>
  );
};
