import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import Translate from "react-translate-component";

import Logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faCog,
  faInfoCircle,
  faLandmark,
  faLifeRing,
  faPassport,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

export const ProfileMenu = ({ component }) => {
  let [active, setActive] = useState("documents");

  const chooseLink = (name) => {
    setActive(name);
    component(name);
  };
  return (
    <div className="myprofile-menu">
      <div className="myprofile-menu-box">
        <div className="myprofile-menu-logo-box">
          <>
            <img src={Logo} className="myprofile-menu-logo" alt="Logo" />
          </>
        </div>
        <div className="myprofile-menu-navigation">
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "constructor"
                  ? "myprofile-menu-navigation-link-active"
                  : ""
              } `}
              onClick={() => {
                chooseLink("constructor");
              }}
            >
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate
                component="span"
                content="myprofileMenuLinkConstructor"
              />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "crm" ? "myprofile-menu-navigation-link-active" : ""
              } `}
              onClick={() => {
                chooseLink("crm");
              }}
            >
              <FontAwesomeIcon
                icon={faCog}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate component="span" content="myprofileMenuLinkCRM" />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "ads" ? "myprofile-menu-navigation-link-active" : ""
              } `}
              onClick={() => {
                chooseLink("ads");
              }}
            >
              <FontAwesomeIcon
                icon={faAd}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate component="span" content="myprofileMenuLinkAds" />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "info" ? "myprofile-menu-navigation-link-active" : ""
              } `}
              onClick={() => {
                chooseLink("info");
              }}
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate component="span" content="myprofileMenuLinkInfo" />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "support"
                  ? "myprofile-menu-navigation-link-active"
                  : ""
              } `}
              onClick={() => {
                chooseLink("support");
              }}
            >
              <FontAwesomeIcon
                icon={faLifeRing}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate component="span" content="myprofileMenuLinkSupport" />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "documents"
                  ? "myprofile-menu-navigation-link-active"
                  : ""
              } `}
              onClick={() => {
                chooseLink("documents");
              }}
            >
              <FontAwesomeIcon
                icon={faPassport}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate
                component="span"
                content="myprofileMenuLinkDocuments"
              />
            </span>
          </div>
          <div className="myprofile-menu-navigation-link-box">
            <span
              className={`myprofile-menu-navigation-link ${
                active === "finance"
                  ? "myprofile-menu-navigation-link-active"
                  : ""
              } `}
              onClick={() => {
                chooseLink("finance");
              }}
            >
              <FontAwesomeIcon
                icon={faLandmark}
                className="myprofile-menu-navigation-link-icon"
              />
              <Translate component="span" content="myprofileMenuLinkFinance" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
