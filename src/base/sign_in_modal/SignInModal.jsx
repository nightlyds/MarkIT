import React from "react";
import { Provider } from "react-redux";
import Translate from "react-translate-component";

import {
  EmailWrap,
  PasswordWrap,
  SubmitWrap,
} from "./components/componentsWrap";

import store from "./store/store.js";

import Close from "../images/close.svg";

const SignInModal = ({ closeSignInModal }) => {
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
          <Provider store={store}>
            <EmailWrap />
            <PasswordWrap />
            <SubmitWrap />
          </Provider>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
