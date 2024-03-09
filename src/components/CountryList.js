import React from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";

const CountryList = ({ countryList, getSelectedCountry }) => {
  return countryList.map((country, index) => (
    <div
      className={"country-row"}
      key={index}
    >
      <div key={country}>
        {country}
      </div>
      <div className="icons">
        <AiTwotoneCheckCircle onClick={() => getSelectedCountry(country)} />
      </div>
    </div>
  ));
};

export default CountryList;
