import React from "react";

import LabelField from "./LabelField/LabelField";

const CardResult = ({ data }) => {
  const { country, region, timezone } = data.location;
  return (
    <div className="card card-result">
      <div className="vertical-line">
        <LabelField title="IP ADDRESS" value={data.ip} />
      </div>
      <div className="vertical-line">
        <LabelField title="LOCATION" value={`${country} ${region}`} />
      </div>
      <div className="vertical-line">
        <LabelField title="TIMEZONE " value={"utc " + timezone} />
      </div>
      <LabelField title="ISP" value={data.isp} />
    </div>
  );
};

export default CardResult;
