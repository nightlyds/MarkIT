import React, { useState } from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import Close from "../images/close.svg";

const SignUpModal = ({ closeSignUpModal }) => {
  let [name, setName] = useState(false);
  let [email, setEmail] = useState(false);
  let [password, setPassword] = useState(false);
  let [error, setError] = useState(false);

  const validateName = (name) => {
    var reg = /^[\w\dА-я]+$/;
    if (reg.test(name) === true && name.length >= 5) {
      setName(name);
    }
    else{
      setName(false);
    }
  };
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
  const checkData = () => {
    if (email && password) {
      alert("ok");
    } else {
      setError(true);
    }
  };
  return (
    <div className="sign-up-modal">
      <div className={`sign-up-modal-box ${document.documentElement.clientWidth >= 991 ? "animate__animated" : ''} animate__fadeInDown animate__fast`}>
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
          <Translate
            component="input"
            type="email"
            className="sign-up-modal-email"
            attributes={{ placeholder: "placeholderSignEmail" }}
            onChange={(email) => validateEmail(email.target.value)}
          />
          <Translate
            component="input"
            type="password"
            className="sign-up-modal-password"
            attributes={{ placeholder: "placeholderSignPassword" }}
            onChange={(password) => {
              checkPassword(password.target.value);
            }}
          />
          <div className="sign-up-modal-error-box">
            <Translate
              component="p"
              content="signError"
              className={`sign-modal-error ${error ? "" : "hidden"}`}
            />
          </div>
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
