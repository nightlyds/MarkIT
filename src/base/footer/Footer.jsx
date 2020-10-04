import React from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";

import "../css/base.css";
import "../css/media_base.css";
import "../css/normalize.css";

import Logo from "../images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-box">
        <img src={Logo} className="footer-logo" alt="Logo" />
      </div>
      <div className="footer-contacts">
        <div className="footer-email-box">
          <Link to="mailto:info@markit-group.org" className="footer-email">info@markit-group.org</Link>
          <span className="footer-email-title">e-mail</span>
        </div>
        <div className="footer-number-box">
          <Link to="tel:+7(989)722-65-98" className="footer-number">+7(989)722-65-98</Link>
          <Translate content="footerCall" component="span" className="footer-number-title" />
        </div>
      </div>
      <div className="footer-social-links">
        <Link to="/">
          <FontAwesomeIcon icon={faFacebook} className="footer-facebook-icon" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer-instagram-icon"
          />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTelegram} className="footer-telegram-icon" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faVk} className="footer-vk-icon" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faYoutube} className="footer-youtube-icon" />
        </Link>
      </div>
    </div>
  );
};
