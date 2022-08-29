import React, { useState } from "react";
import axios from "axios";

import CardAction from "../cards/CardAction";
import CardResult from "../cards/CardResult";
import CardError from "../cards/CardError";
import Map from "./Map";

import pattern from "../../assets/images/pattern-bg.png";

const IPTracker = () => {
  const [ipAddressData, setIpAddressData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetIpAddressData = (ip) => {
    setIpAddressData(null);
    setError(null);

    const url = ip
      ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_iotQDUZwHyaZB0N5V5yuQdKFWsim6&ipAddress=${ip}`
      : `https://geo.ipify.org/api/v2/country,city?apiKey=at_iotQDUZwHyaZB0N5V5yuQdKFWsim6&ipAddress`;

    axios
      .get(url)
      .then((data) => {
        setIpAddressData(data.data);
      })
      .catch((err) => {
        const { code, messages } = err.response.data;
        setError({
          code,
          messages,
        });
      });
  };

  return (
    <div className="container">
      <img src={pattern} alt="pattern" style={{ height: "250px" }} />
      <h1 className="main-title">IP Address Tracker</h1>
      <CardAction onAction={handleGetIpAddressData} />
      {error && <CardError error={error} />}
      {ipAddressData && <CardResult data={ipAddressData} />}
      {ipAddressData && (
        <Map
          lat={ipAddressData.location.lat}
          lng={ipAddressData.location.lng}
        />
      )}
    </div>
  );
};

export default IPTracker;
