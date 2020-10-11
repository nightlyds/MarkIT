import React from "react";
import { Provider } from "react-redux";
import Translate from "react-translate-component";

import {
  EmailWrap,
  CountryWrap,
  PhoneWrap,
  PasswordWrap,
  CheckboxWrap,
  SubmitWrap,
} from "./components/componentsWrap";

import store from './store/store.js';

import SignUpImage from "../../images/sign_up.svg";

import {
  faFacebook,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignForm = () => {
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
            <Provider store={store}>
              <EmailWrap />
              <CountryWrap />
              <PhoneWrap />
              <PasswordWrap />
              <CheckboxWrap />
              <SubmitWrap />
            </Provider>
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
