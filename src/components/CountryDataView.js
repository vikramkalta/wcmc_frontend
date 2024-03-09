import React, { useState } from "react";
import CountryDataForm from "./CountryDataForm";
import CountryList from "./CountryList";
import CountryDataService from "../services/CountryData";
import Metrics from "./Metrics";

function CountryDataView() {
  const [countryList, setCountryList] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [init, setInit] = useState(false);
  const [country, setCountry] = useState('');

  const getCountryList = async (searchStr) => {
    try {
      setMetrics([]);
      if (!searchStr?.length || searchStr.length < 2) {
        setCountryList([]);
        return;
      }
      setInit(true);
      const result = await CountryDataService.getCountryNames(searchStr);
      setCountryList(result);
    } catch (error) {
      console.log("Error in fetching country list", error);
    }
  };

  const getCountryMetrics = async (country) => {
    if (!country) {
      return;
    }
    try {
      const _metrics = await CountryDataService.getCountryMetrics(country);
      setCountry(country);
      setMetrics(_metrics);
    } catch (error) {
      console.log("Error in updating metrics", error);
    }
  };

  return (
    <>
      <h1>Get country metrics</h1>
      <CountryDataForm onSearch={getCountryList} />
      {metrics.length ? (
        <><Metrics country={country} metrics={metrics} /></>
      ) : (
        <>
          {!countryList.length && init ? (
            <p style={{ color: "white" }}>{"Please insert a valid country"}</p>
          ) : (
            ""
          )}
          <CountryList
            countryList={countryList}
            getSelectedCountry={getCountryMetrics}
          />
        </>
      )}
    </>
  );
}

export default CountryDataView;
