import React, { useState } from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import {
  Email,
  Password,
  Phone,
  Checkbox,
  Submit,
  Country,
} from "./components";

import SignUpImage from "../../images/sign_up.svg";

import {
  faFacebook,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignForm = () => {
  let [email, setEmail] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);

  let [country, setCountry] = useState(false);
  let [errorCountry, setErrorCountry] = useState(false);

  let [phone, setPhone] = useState(false);
  let [errorPhone, setErrorPhone] = useState(false);

  let [password, setPassword] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false);

  let [checkbox, setCheckbox] = useState(false);
  let [errorCheckbox, setErrorCheckbox] = useState(false);

  const getEmail = (value) => {
    setEmail(value);
  };

  const getErrorEmail = (value) => {
    setErrorEmail(value);
  };

  const getPhone = (value) => {
    setPhone(value);
  };

  const getErrorPhone = (value) => {
    setErrorPhone(value);
  };

  const getPassword = (value) => {
    setPassword(value);
  };

  const getErrorPassword = (value) => {
    setErrorPassword(value);
  };

  const getCheckbox = (value) => {
    setCheckbox(value);
  };

  const getErrorCheckbox = (value) => {
    setErrorCheckbox(value);
  };

  const getCountry = (value) => {
    setCountry(value);
  };

  const getErrorCountry = (value) => {
    setErrorCountry(value);
  };

  return (
    <div className="sign-up-sign-form">
      <div className="sign-up-sign-form-content">
        <div className="sign-up-sign-form-content-left-side">
          <div className="sign-up-sign-form-content-left-side-title-box">
            <Translate
              component="h2"
              content="signUpTitle"
              className="sign-up-sign-form-content-left-side-title"
            />
          </div>
          <div className="sign-up-sign-form-content-left-side-form">
            <Email
              giveEmail={getEmail}
              getErrorEmail={errorEmail}
              giveErrorEmail={getErrorEmail}
            />
            <Country
              giveCountry={getCountry}
              getErrorCountry={errorCountry}
              giveErrorCountry={getErrorCountry}
            />
            <Phone
              givePhone={getPhone}
              getErrorPhone={errorPhone}
              giveErrorPhone={getErrorPhone}
            />
            <Password
              givePassword={getPassword}
              getErrorPassword={errorPassword}
              giveErrorPassword={getErrorPassword}
            />
            <Checkbox
              giveCheckbox={getCheckbox}
              getCheckbox={checkbox}
              getErrorCheckbox={errorCheckbox}
            />
            <Submit
              getEmail={email}
              getPhone={phone}
              getCountry={country}
              getPassword={password}
              getCheckbox={checkbox}
              giveErrorEmail={getErrorEmail}
              giveErrorPhone={getErrorPhone}
              giveErrorPassword={getErrorPassword}
              giveErrorCheckBox={getErrorCheckbox}
              giveErrorCountry={getErrorCountry}
            />
          </div>
        </div>
        <div className="sign-up-sign-form-content-right-side">
          <div className="sign-up-sign-form-content-right-side-image-box">
            <img
              src={SignUpImage}
              className="sign-up-sign-form-content-right-side-image"
              alt="Sign Up"
            />
          </div>
          <div className="sign-up-sign-form-content-right-side-variations">
            <div className="sign-up-sign-form-content-right-side-variations-title-box">
              <Translate
                component="span"
                content="signUpVariationsTitle"
                className="sign-up-sign-form-content-right-side-variations-title"
              />
            </div>
            <div className="sign-up-sign-form-content-right-side-variations-social-box">
              <div className="sign-up-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="sign-up-sign-form-content-right-side-variations-social-icon"
                />
              </div>
              <div className="sign-up-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faVk}
                  className="sign-up-sign-form-content-right-side-variations-social-icon"
                />
              </div>
              <div className="sign-up-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="sign-up-sign-form-content-right-side-variations-social-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
