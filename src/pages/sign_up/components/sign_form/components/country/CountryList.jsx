import React from "react";

import Countries from "./countries.js";

export const CountryList = ({ giveCountry, closeCountryList }) => {
  const countryAction = (value) => {
    giveCountry(value);
    closeCountryList();
  };
  return (
      <div className="sign-up-sign-form-content-left-side-form-country-country-list">
        {Countries &&
          Countries.map((name, index) => (
            <div
              className="sign-up-sign-form-content-left-side-form-country-country-list-country-box"
              key={`${name}_${index}`}
              onClick={() => {
                countryAction(name);
              }}
            >
              <span className="sign-up-sign-form-content-left-side-form-country-country-list-country-name">
                {name}
              </span>
            </div>
          ))}
      </div>
  );
};
