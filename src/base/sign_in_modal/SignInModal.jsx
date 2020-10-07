import React, { useState } from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import { Email, Password, Submit } from './components';

import Close from "../images/close.svg";

const SignInModal = ({ closeSignInModal }) => {
  let [email, setEmail] = useState(false);
  let [password, setPassword] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);
  let [submitError, setSubmitError] = useState(false);

  const emailGet = (value) => {
    setEmail(value);
  }
  const passwordGet = (value) => {
    setPassword(value);
  }
  const emailErrorGet = (value) => {
    setErrorEmail(value);
  }

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
    if (email && password) {
      if (getCookie("email") === email && getCookie("password") === password) {
        setSubmitError(false);
        window.location = "/myprofile";
      }
      else{
        setSubmitError(true);
      }
    }
  };
  return (
    <div className="sign-in-modal">
      <div
        className={`sign-in-modal-box ${
          document.documentElement.clientWidth >= 991 ? "animate__animated" : ""
        } animate__fadeInDown animate__fast`}
      >
        <div className="sign-in-modal-close-box">
          <img
            src={Close}
            className="sign-in-modal-close-icon"
            alt="Close Sign In Icon"
            onClick={() => {
              closeSignInModal();
            }}
          />
        </div>
        <div className="sign-in-modal-header">
          <Translate
            component="h2"
            content="titleSignIn"
            className="sign-in-modal-title"
          />
          <Translate
            component="span"
            content="subTitleSignIn"
            className="sign-in-modal-sub-title"
          />
        </div>
        <div className="sign-in-modal-fields">
          <Email emailProps={emailGet} getEmailError={errorEmail} giveEmailError={emailErrorGet} />
          <Password passwordProps={passwordGet} email={email} giveEmailError={emailErrorGet} />
          <Submit email={email} password={password} getSubmitError={submitError} giveCheckData={checkData} />
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
