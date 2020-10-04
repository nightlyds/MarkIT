import React from "react";
import Translate from "react-translate-component";

import StepBackground from "../../images/step_bk.svg";
import ArrowDownRight from "../../images/arrow_down_right.svg";
import ArrowDownLeft from "../../images/arrow_down_left.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faCalculator,
  faCrosshairs,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const HowWorks = ({ openSignUpModal }) => {
  return (
    <div className="main-how-works">
      <div className="main-how-works-header">
        <Translate
          component="h2"
          content="howWorksTitle"
          className="main-how-works-header-title wow animate__fadeInDown"
          data-wow-duration="1s"
          data-wow-offset="100"
        />
      </div>
      <div className="main-how-works-content">
        <div
          className="main-how-works-content-box wow animate__fadeInLeft"
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-how-works-content-box">
            <FontAwesomeIcon
              icon={faTasks}
              className="main-how-works-content-box-icon"
            />
            <img
              src={StepBackground}
              className="main-how-works-content-box-img"
              alt="Number"
            />
          </div>
          <div className="main-how-works-content-box-description">
            <Translate
              component="h2"
              content="howWorksStepTitleFirst"
              className="main-how-works-content-box-description-title"
            />
            <Translate
              component="p"
              content="howWorksStepTextFirst"
              className="main-how-works-content-box-description-text"
            />
          </div>
        </div>
        <div className="main-how-works-content-box-empty"></div>
        <div className="main-how-works-content-box-arrow-box">
          <img
            src={ArrowDownRight}
            className="main-how-works-content-box-arrow-down-right wow animate__fadeInDown"
            data-wow-duration="1s"
            data-wow-offset="100"
            alt="Arrow"
          />
          <img
            src={ArrowDownLeft}
            className="main-how-works-content-box-arrow-down-left wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-offset="100"
            alt="Arrow"
          />
        </div>
        <div
          className="main-how-works-content-box wow animate__fadeInRight"
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-how-works-content-box">
            <FontAwesomeIcon
              icon={faCalculator}
              className="main-how-works-content-box-icon"
            />
            <img
              src={StepBackground}
              className="main-how-works-content-box-img"
              alt="Number"
            />
          </div>
          <div className="main-how-works-content-box-description">
            <Translate
              component="h2"
              content="howWorksStepTitleSecond"
              className="main-how-works-content-box-description-title"
            />
            <Translate
              component="p"
              content="howWorksStepTextSecond"
              className="main-how-works-content-box-description-text"
            />
          </div>
        </div>
        <div
          className="main-how-works-content-box wow animate__fadeInLeft"
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-how-works-content-box">
            <FontAwesomeIcon
              icon={faCrosshairs}
              className="main-how-works-content-box-icon"
            />
            <img
              src={StepBackground}
              className="main-how-works-content-box-img"
              alt="Number"
            />
          </div>
          <div className="main-how-works-content-box-description">
            <Translate
              component="h2"
              content="howWorksStepTitleThird"
              className="main-how-works-content-box-description-title"
            />
            <Translate
              component="p"
              content="howWorksStepTextThird"
              className="main-how-works-content-box-description-text"
            />
          </div>
        </div>
        <div className="main-how-works-content-box-empty"></div>
        <div
          className="main-how-works-content-box-arrow-box wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <img
            src={ArrowDownRight}
            className="main-how-works-content-box-arrow-down-right"
            alt="Arrow"
          />
        </div>
        <div
          className="main-how-works-content-box wow animate__fadeInRight"
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-how-works-content-box">
            <FontAwesomeIcon
              icon={faUsers}
              className="main-how-works-content-box-icon"
            />
            <img
              src={StepBackground}
              className="main-how-works-content-box-img"
              alt="Number"
            />
          </div>
          <div className="main-how-works-content-box-description">
            <Translate
              component="h2"
              content="howWorksStepTitleFouth"
              className="main-how-works-content-box-description-title"
            />
            <Translate
              component="p"
              content="howWorksStepTextFouth"
              className="main-how-works-content-box-description-text"
            />
          </div>
        </div>
      </div>
      <div
        className="main-how-works-contact-box wow animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-offset="100"
      >
        <Translate
          component="span"
          content="howWorksContact"
          className="main-how-works-contact"
          onClick={() => {openSignUpModal()}}
        />
      </div>
    </div>
  );
};
