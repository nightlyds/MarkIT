import React, { useState } from "react";
import Translate from "react-translate-component";

import { CountryList } from "./CountryList.jsx";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Country = ({ giveCountry, getErrorCountry, giveErrorCountry }) => {
  let [country, setCountry] = useState(false);
  let [countryList, setCountryList] = useState(false);

  const closeCountryList = () => {
    setCountryList(false);
  }

  const getCountry = (value) => {
    setCountry(value);
    giveCountry(value);
    giveErrorCountry(false);
  }
  return (
    <div className="sign-up-sign-form-content-left-side-form-country-box">
      <div className="sign-up-sign-form-content-left-side-form-country-header">
        <Translate
          component="span"
          content="signUpCountryLabel"
          className="sign-up-sign-form-content-left-side-form-label"
        />
      </div>

      {!country ? (
        <div
          className="sign-up-sign-form-content-left-side-form-country-choose-box"
          onClick={() => {
            setCountryList(!countryList);
          }}
        >
          <Translate
            component="span"
            content="signUpCountryChoose"
            className="sign-up-sign-form-content-left-side-form-country-choose"
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            className="sign-up-sign-form-content-left-side-form-country-choose-icon"
          />
        </div>
      ) : (
        <div
          className="sign-up-sign-form-content-left-side-form-country-value-box"
          onClick={() => {
            setCountryList(!countryList);
          }}
        >
          <span className="sign-up-sign-form-content-left-side-form-country-value">
            {country}
          </span>
        </div>
      )}

      {getErrorCountry && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signErrorCountry"
            className="sign-modal-error"
          />
        </div>
      )}

      {countryList && <CountryList giveCountry={getCountry} closeCountryList={closeCountryList} />}
    </div>
  );
};
