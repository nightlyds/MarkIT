import React from "react";
import { Provider } from "react-redux";
import Translate from "react-translate-component";

import {
  EmailWrap,
  PasswordWrap,
  SubmitWrap,
} from "./components/componentsWrap";

import store from './store/store.js';

import SignInImage from "../../images/sign_in.svg";

import {
  faFacebook,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignForm = () => {
  return (
    <div className="sign-in-sign-form">
      <div className="sign-in-sign-form-content">
        <div className="sign-in-sign-form-content-left-side">
          <div className="sign-in-sign-form-content-left-side-title-box">
            <Translate
              component="h2"
              content="signInTitle"
              className="sign-in-sign-form-content-left-side-title"
            />
          </div>
          <div className="sign-in-sign-form-content-left-side-form">
            <Provider store={store}>
              <EmailWrap />
              <PasswordWrap />
              <SubmitWrap />
            </Provider>
          </div>
        </div>
        <div className="sign-in-sign-form-content-right-side">
          <div className="sign-in-sign-form-content-right-side-image-box">
            <img
              src={SignInImage}
              className="sign-in-sign-form-content-right-side-image"
              alt="Sign In"
            />
          </div>
          <div className="sign-in-sign-form-content-right-side-variations">
            <div className="sign-in-sign-form-content-right-side-variations-title-box">
              <Translate
                component="span"
                content="signInVariationsTitle"
                className="sign-in-sign-form-content-right-side-variations-title"
              />
            </div>
            <div className="sign-in-sign-form-content-right-side-variations-social-box">
              <div className="sign-in-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="sign-in-sign-form-content-right-side-variations-social-icon"
                />
              </div>
              <div className="sign-in-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faVk}
                  className="sign-in-sign-form-content-right-side-variations-social-icon"
                />
              </div>
              <div className="sign-in-sign-form-content-right-side-variations-social">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="sign-in-sign-form-content-right-side-variations-social-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
