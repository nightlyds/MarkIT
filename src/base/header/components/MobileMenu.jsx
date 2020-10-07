import React from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import Close from "../../images/close.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ closeMenu, chooseLanguage, getCookie }) => {
  return (
    <div className="header-mobile-menu">
      <div className="header-mobile-menu-close">
        <img
          src={Close}
          className="header-mobile-menu-close-icon"
          alt="Close menu"
          onClick={() => {
            closeMenu();
          }}
        />
      </div>
      <div className="header-mobile-menu-content">
        <div className="header-menu-link">
          <Translate
            content="aboutService"
            component="a"
            href="/#about"
            className="header-menu-about"
          ></Translate>
        </div>
        <div className="header-menu-link">
          <Translate
            content="partners"
            component="a"
            href="/partners"
            className="header-menu-partners"
          ></Translate>
        </div>
        <div className="header-menu-link">
          <Translate
            content="services"
            component="a"
            href="/"
            className="header-menu-services"
          ></Translate>
        </div>
        <div className="header-menu-link">
          <Translate
            content="products"
            component="a"
            href="/"
            className="header-menu-products"
          ></Translate>
        </div>
        <div className="header-language-link">
          <span
            className={`header-language-en ${
              getCookie("language") === "en" ? "header-language-active" : ""
            }`}
            onClick={() => {
              chooseLanguage("en");
            }}
          >
            EN
          </span>
        </div>
        <div className="header-language-link">
          <span
            className={`header-language-ru ${
              getCookie("language") === "ru" ? "header-language-active" : ""
            }`}
            onClick={() => {
              chooseLanguage("ru");
            }}
          >
            RU
          </span>
        </div>
        <div className="header-language-link">
          <span
            className={`header-language-es ${
              getCookie("language") === "es" ? "header-language-active" : ""
            }`}
            onClick={() => {
              chooseLanguage("es");
            }}
          >
            ES
          </span>
        </div>
        <div className="header-sign-link">
          <Link to="/sign_in">
            <Translate
              content="signIn"
              component="span"
              className="header-sign-in"
            />
          </Link>
        </div>
        <div
          className="header-sign-link wow animate__fadeInDown"
          data-wow-duration="1s"
        >
          <Link to="/sign_up" className="header-sign-up-link">
            <Translate
              content="signUp"
              component="span"
              className="header-sign-up"
            />
            <FontAwesomeIcon
              icon={faUserPlus}
              className="header-sign-up-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
