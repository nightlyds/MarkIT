import React, { useState } from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import Close from "../images/close.svg";

const SignInModal = ({ closeSignInModal }) => {
  let [email, setEmail] = useState(false);
  let [password, setPassword] = useState(false);
  let [error, setError] = useState(false);

  const validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true) {
      setEmail(email);
    }
    else{
      setEmail(false)
    }
  };
  const checkPassword = (password) => {
    if (password.length >= 8) {
      setPassword(password);
    }
    else{
      setPassword(false)
    }
  };
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
      if(getCookie("email") === email && getCookie('password') === password){
        window.location = '/myprofile'
      }
      else{
        setError(true)
      }
    }
  };
  return (
    <div className="sign-in-modal">
      <div className={`sign-in-modal-box ${document.documentElement.clientWidth >= 991 ? "animate__animated" : ''} animate__fadeInDown animate__fast`}>
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
          <Translate
            component="input"
            type="email"
            className="sign-in-modal-email"
            attributes={{ placeholder: "placeholderSignEmail" }}
            onChange={(email) => validateEmail(email.target.value)}
          />
          <Translate
            component="input"
            type="password"
            className="sign-in-modal-password"
            attributes={{ placeholder: "placeholderSignPassword" }}
            onChange={(password) => {
              checkPassword(password.target.value);
            }}
          />
          <div className="sign-in-modal-error-box">
            <Translate
              component="p"
              content="signError"
              className={`sign-modal-error ${error ? "" : "hidden"}`}
            />
          </div>
          <Translate
            component="button"
            content="submitSignIn"
            type="submit"
            className="sign-in-modal-submit"
            disabled={!email || !password}
            onClick={() => {
              checkData();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
