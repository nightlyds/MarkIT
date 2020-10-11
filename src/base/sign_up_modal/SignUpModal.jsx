import React, { useState } from "react";
import Translate from "react-translate-component";

import Close from "../images/close.svg";

const SignUpModal = ({ closeSignUpModal }) => {
  let [name, setName] = useState(false);
  let [email, setEmail] = useState(false);
  let [password, setPassword] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);
  let [errorName, setErrorName] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false);

  const validateName = (name) => {
    var reg = /^[\w\dА-я]+$/;
    if (reg.test(name) === true && name.length >= 3) {
      setName(name);
      setErrorName(false);
    } else {
      setName(false);
    }
  };
  const validateEmail = (email) => {
    if (!name) {
      setErrorName(true);
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      setEmail(email);
      setErrorEmail(false);
    } else {
      setEmail(false);
    }
  };
  const checkPassword = (password) => {
    if (!email) {
      setErrorEmail(true);
    }
    if (password.length >= 8) {
      setPassword(password);
      setErrorPassword(false);
    } else {
      setPassword(false);
      setErrorPassword(true);
    }
  };
  const setCookie = (name, value) => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 1000 * 24 * 30);
    document.cookie = name + "=" + value + "; expires='" + date + ";'";
  };
  const checkData = () => {
    if (email && password) {
      setCookie("email", email);
      setCookie("password", password);
      window.location = "/myprofile";
    }
  };
  return (
    <div className="sign-up-modal">
      <div
        className={`sign-up-modal-box ${
          document.documentElement.clientWidth >= 991 ? "animate__animated" : ""
        } animate__fadeInDown animate__fast`}
      >
        <div className="sign-up-modal-close-box">
          <img
            src={Close}
            className="sign-up-modal-close-icon"
            alt="Close Sign Up Icon"
            onClick={() => {
              closeSignUpModal();
            }}
          />
        </div>
        <div className="sign-up-modal-header">
          <Translate
            component="h2"
            content="titleSignUp"
            className="sign-up-modal-title"
          />
          <Translate
            component="span"
            content="subTitleSignUp"
            className="sign-up-modal-sub-title"
          />
        </div>
        <div className="sign-up-modal-fields">
          <Translate
            component="input"
            type="text"
            className="sign-up-modal-name"
            attributes={{ placeholder: "placeholderSignName" }}
            onChange={(name) => validateName(name.target.value)}
          />
          {errorName && (
            <div className="sign-in-modal-error-box">
              <Translate
                component="p"
                content="signErrorUpName"
                className="sign-modal-error"
              />
            </div>
          )}
          <Translate
            component="input"
            type="email"
            className="sign-up-modal-email"
            attributes={{ placeholder: "placeholderSignEmail" }}
            onChange={(email) => validateEmail(email.target.value)}
          />
          {errorEmail && (
            <div className="sign-in-modal-error-box">
              <Translate
                component="p"
                content="signErrorEmail"
                className="sign-modal-error"
              />
            </div>
          )}
          <Translate
            component="input"
            type="password"
            className="sign-up-modal-password"
            attributes={{ placeholder: "placeholderSignPassword" }}
            onChange={(password) => {
              checkPassword(password.target.value);
            }}
          />
          {errorPassword && (
            <div className="sign-in-modal-error-box">
              <Translate
                component="p"
                content="signErrorUpPassword"
                className="sign-modal-error"
              />
            </div>
          )}
          <Translate
            component="button"
            content="submitSignUp"
            type="submit"
            className="sign-up-modal-submit"
            disabled={!email || !password || !name}
            onClick={() => {
              checkData();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
