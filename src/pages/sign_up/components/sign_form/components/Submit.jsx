import React from "react";
import Translate from "react-translate-component";

import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Submit = ({
  getEmail,
  getPhone,
  getCountry,
  getPassword,
  getCheckbox,
  giveErrorEmail,
  giveErrorPhone,
  giveErrorPassword,
  giveErrorCheckBox,
  giveErrorCountry,
}) => {
  const setCookie = (name, value) => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 1000 * 24 * 30);
    document.cookie = name + "=" + value + "; expires='" + date + ";'";
  };
  const checkData = () => {
    if (!getEmail) {
      giveErrorEmail(true);
    }
    if (!getPhone) {
      giveErrorPhone(true);
    }
    if (!getPassword) {
      giveErrorPassword(true);
    }
    if (!getCountry) {
      giveErrorCountry(true);
    }
    if (!getCheckbox) {
      giveErrorCheckBox(true);
    }
    if (getEmail && getPassword && getPhone && getCountry && getCheckbox) {
      setCookie("email", getEmail);
      setCookie("password", getPassword);
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
