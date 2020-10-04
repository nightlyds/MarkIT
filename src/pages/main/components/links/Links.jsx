import React, { useState } from "react";
import Translate from "react-translate-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Links = () => {
  let [toggleIndex, setToggleIndex] = useState(0);

  const openToggleContent = (index) => {
    if (document.documentElement.clientWidth <= 991) {
      if (index !== toggleIndex) {
        setToggleIndex(index);
      } else {
        setToggleIndex(0);
      }
    }
  };
  return (
    <div className="main-links">
      <div className="main-links-box">
        <div
          className="main-links-header"
          onClick={() => {
            openToggleContent(1);
          }}
        >
          <div className="main-links-title-box">
            <Translate
              component="h3"
              content="linkTitleFirst"
              className="main-link-title wow animate__fadeInLeft"
              data-wow-duration="1s"
              data-wow-offset="100"
            />
          </div>
          <div className="main-links-title-icon-box">
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`main-link-title-icon-right ${toggleIndex === 1 ? "main-link-title-icon-rotate" : ''}`}
            />
          </div>
        </div>
        <div
          className={`main-links-content wow animate__fadeInLeft ${
            document.documentElement.clientWidth >= 991 || toggleIndex === 1
              ? ""
              : "hidden"
          }`}
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstFirst"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstSecond"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstThird"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstFouth"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstFifth"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFirstSixth"
              className="main-links-link"
            />
          </div>
        </div>
      </div>
      <div className="main-links-box">
        <div
          className="main-links-header"
          onClick={() => {
            openToggleContent(2);
          }}
        >
          <div className="main-links-title-box">
            <Translate
              component="h3"
              content="linkTitleSecond"
              className="main-link-title wow animate__fadeInDown"
              data-wow-duration="1s"
              data-wow-offset="100"
            />
          </div>
          <div className="main-links-title-icon-box">
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`main-link-title-icon-right ${toggleIndex === 2 ? "main-link-title-icon-rotate" : ''}`}
            />
          </div>
        </div>
        <div
          className={`main-links-content wow animate__fadeInDown ${
            document.documentElement.clientWidth >= 991 || toggleIndex === 2
              ? ""
              : "hidden"
          }`}
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextSecondFirst"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextSecondSecond"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextSecondThird"
              className="main-links-link"
            />
          </div>
        </div>
      </div>
      <div className="main-links-box">
        <div
          className="main-links-header"
          onClick={() => {
            openToggleContent(3);
          }}
        >
          <div className="main-links-title-box">
            <Translate
              component="h3"
              content="linkTitleThird"
              className="main-link-title wow animate__fadeInDown"
              data-wow-duration="1s"
              data-wow-offset="100"
            />
          </div>
          <div className="main-links-title-icon-box">
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`main-link-title-icon-right ${toggleIndex === 3 ? "main-link-title-icon-rotate" : ''}`}
            />
          </div>
        </div>
        <div
          className={`main-links-content wow animate__fadeInDown ${
            document.documentElement.clientWidth >= 991 || toggleIndex === 3
              ? ""
              : "hidden"
          }`}
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextThirdFirst"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextThirdSecond"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextThirdThird"
              className="main-links-link"
            />
          </div>
        </div>
      </div>
      <div className="main-links-box">
        <div
          className="main-links-header"
          onClick={() => {
            openToggleContent(4);
          }}
        >
          <div className="main-links-title-box">
            <Translate
              component="h3"
              content="linkTitleFouth"
              className="main-link-title wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-offset="100"
            />
          </div>
          <div className="main-links-title-icon-box">
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`main-link-title-icon-right ${toggleIndex === 4 ? "main-link-title-icon-rotate" : ''}`}
            />
          </div>
        </div>
        <div
          className={`main-links-content wow animate__fadeInRight ${
            document.documentElement.clientWidth >= 991 || toggleIndex === 4
              ? ""
              : "hidden"
          }`}
          data-wow-duration="1s"
          data-wow-offset="100"
        >
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthFirst"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthSecond"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthThird"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthFouth"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthFifth"
              className="main-links-link"
            />
          </div>
          <div className="main-links-link-box">
            <Translate
              component="a"
              href="/"
              content="linkTextFouthSixth"
              className="main-links-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
