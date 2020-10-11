import React, { useState } from "react";
import { Link } from "react-router-dom";
import counterpart from "counterpart";
import Translate from "react-translate-component";

import MobileMenu from "./components/MobileMenu.jsx";
import SignInModal from "../sign_in_modal/SignInModal.jsx";
import { ProfileData } from "./components/ProfileData.jsx";

import Logo from "../images/logo.svg";
import MobileMenuIcon from "../images/menu.svg";

import en from "../lang/en.js";
import ru from "../lang/ru.js";
import es from "../lang/es.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ profile }) => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let [signInModal, setSignInModalOpen] = useState(false);

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
    <div className="header-box">
      {mobileMenuOpen && (
        <MobileMenu
          closeMenu={closeMobileMenu}
          chooseLanguage={chooseLanguage}
          getCookie={getCookie}
        />
      )}
      {signInModal && <SignInModal closeSignInModal={closeSignInModal} />}
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
            <Link to="/sign_up"
              className="header-sign-up-link"
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
            </Link>
          </div>
        </div>
        {profile && <ProfileData />}
      </div>
    </div>
  );
};
