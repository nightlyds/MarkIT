import React, { useState } from "react";
import { Link } from "react-router-dom";
import counterpart from "counterpart";
import Translate from "react-translate-component";

import MobileMenu from "./components/MobileMenu.jsx";
import SignInModal from "../sign_in_modal/SignInModal.jsx";
import SignUpModal from "../sign_up_modal/SignUpModal.jsx";

import Logo from "../images/logo.svg";
import MobileMenuIcon from "../images/menu.svg";

import en from "../lang/en.js";
import ru from "../lang/ru.js";
import es from "../lang/es.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let [signInModal, setSignInModalOpen] = useState(false);
  let [signUpModal, setSignUpModalOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const openSignInModal = () => {
    setSignInModalOpen(true);
  };
  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  counterpart.registerTranslations("en", en);
  counterpart.registerTranslations("ru", ru);
  counterpart.registerTranslations("es", es);

  const setCookie = (language) => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 1000 * 24 * 30);
    document.cookie = "language" + "=" + language + "; expires='" + date + ";'";
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

  const deleteCookie = (name) => {
    let date = new Date();
    date.setTime(date.getTime());
    document.cookie = "language" + name + "=" + "; expires='" + date + ";'";
  };

  switch (getCookie("language")) {
    case "es":
      counterpart.setLocale("es");
      deleteCookie("ru");
      deleteCookie("en");
      break;

    case "ru":
      counterpart.setLocale("ru");
      deleteCookie("en");
      deleteCookie("es");
      break;

    default:
      counterpart.setLocale("en");
      deleteCookie("ru");
      deleteCookie("es");
  }
  const chooseLanguage = (language) => {
    setCookie(language);
    window.location.reload();
  };
  return (
    <div>
      {mobileMenuOpen && <MobileMenu closeMenu={closeMobileMenu} />}
      {signInModal && <SignInModal closeSignInModal={closeSignInModal} />}
      {signUpModal && <SignUpModal closeSignUpModal={closeSignUpModal} />}
      <div className="header">
        <div
          className={`header-mobile-link ${
            document.documentElement.clientWidth >= 991
              ? "animate__animated"
              : ""
          } animate__fadeInDown`}
        >
          <img
            src={MobileMenuIcon}
            className={`header-mobile-link ${mobileMenuOpen ? "hidden" : ""}`}
            alt="Open menu"
            onClick={() => {
              openMobileMenu();
            }}
          />
        </div>
        <div
          className={`header-logo-box ${
            document.documentElement.clientWidth >= 991
              ? "animate__animated"
              : ""
          } animate__fadeInDown`}
        >
          <Link to="/">
            <img src={Logo} className="header-logo" alt="Logo" />
          </Link>
        </div>
        <div
          className={`header-menu ${
            document.documentElement.clientWidth >= 991
              ? "animate__animated"
              : ""
          } animate__fadeInDown`}
        >
          <div className="header-menu-link">
            <Translate
              content="aboutService"
              component="a"
              href="/"
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
        </div>
        <div
          className={`header-language ${
            document.documentElement.clientWidth >= 991
              ? "animate__animated"
              : ""
          } animate__fadeInDown`}
        >
          <div className="header-language-link">
            <span
              className="header-language-en header-language-active"
              onClick={() => {
                chooseLanguage("en");
              }}
            >
              EN
            </span>
          </div>
          <div className="header-language-link">
            <span
              className="header-language-ru"
              onClick={() => {
                chooseLanguage("ru");
              }}
            >
              RU
            </span>
          </div>
          <div className="header-language-link">
            <span
              className="header-language-es"
              onClick={() => {
                chooseLanguage("es");
              }}
            >
              ES
            </span>
          </div>
        </div>
        <div
          className={`header-sign-box ${
            document.documentElement.clientWidth >= 991
              ? "animate__animated"
              : ""
          } animate__fadeInDown`}
        >
          <div className="header-sign-link">
            <Translate
              content="signIn"
              component="span"
              className="header-sign-in"
              onClick={() => {
                openSignInModal();
              }}
            />
          </div>
          <div className="header-sign-link">
            <span
              className="header-sign-up-link"
              onClick={() => {
                openSignUpModal();
              }}
            >
              <Translate
                content="signUp"
                component="span"
                className="header-sign-up"
              />
              <FontAwesomeIcon
                icon={faUserPlus}
                className="header-sign-up-icon"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
