import React from "react";
import Translate from "react-translate-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSlidersH,
  faNetworkWired,
  faRocket,
  faHandshake,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <div className="main-about">
      <div className="main-about-header">
        <Translate
          component="h2"
          content="aboutTitle"
          className="main-about-title"
        />
      </div>
      <div className="main-about-boxies">
        <div className="main-about-box main-about-padding-right wow animate__fadeInUp" data-wow-duration="1s">
          <FontAwesomeIcon icon={faCog} className="main-about-box-icon" />
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleFirst"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextFirst"
              className="main-about-box-text"
            />
          </div>
        </div>
        <div className="main-about-box main-about-box-padding-left wow animate__fadeInUp" data-wow-duration="1.2s">
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleSecond"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextSecond"
              className="main-about-box-text"
            />
          </div>
          <div className="main-about-box-icon-box">
            <FontAwesomeIcon
              icon={faNetworkWired}
              className="main-about-box-icon"
            />
          </div>
        </div>
        <div className="main-about-box main-about-padding-right wow animate__fadeInUp" data-wow-duration="1.4s">
          <div className="main-about-box-icon-box">
            <FontAwesomeIcon
              icon={faSlidersH}
              className="main-about-box-icon"
            />
          </div>
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleThird"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextThird"
              className="main-about-box-text"
            />
          </div>
        </div>
        <div className="main-about-box main-about-box-padding-left wow animate__fadeInUp" data-wow-duration="1.6s">
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleFouth"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextFouth"
              className="main-about-box-text"
            />
          </div>
          <div className="main-about-box-icon-box">
            <FontAwesomeIcon icon={faDesktop} className="main-about-box-icon" />
          </div>
        </div>
        <div className="main-about-box main-about-padding-right wow animate__fadeInUp" data-wow-duration="1.8s">
          <div className="main-about-box-icon-box">
            <FontAwesomeIcon
              icon={faHandshake}
              className="main-about-box-icon"
            />
          </div>
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleFifth"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextFifth"
              className="main-about-box-text"
            />
          </div>
        </div>
        <div className="main-about-box main-about-box-padding-left wow animate__fadeInUp" data-wow-duration="2s">
          <div className="main-about-box-text-box">
            <Translate
              component="h2"
              content="aboutBoxTitleSixth"
              className="main-about-box-title"
            />
            <Translate
              component="p"
              content="aboutBoxTextSixth"
              className="main-about-box-text"
            />
          </div>
          <div className="main-about-box-icon-box">
            <FontAwesomeIcon icon={faRocket} className="main-about-box-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
