import React, { useState } from "react";

import arrow from "../../assets/images/icon-arrow.svg";

const CardAction = ({ onAction }) => {
  const [textSearch, setTextSearch] = useState("");

  const handleTextSearch = (event) => {
    setTextSearch(event.target.value);
  };

  const handleSendIp = () => {
    onAction(textSearch);
  };

  return (
    <div className="card card-action">
      <input
        className="font-text-action"
        type="text"
        value={textSearch}
        onChange={handleTextSearch}
        placeholder="Search for any IP address or domain"
      />
      <button className="button-action" onClick={handleSendIp}>
        <img className="img-arrow-action" src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default CardAction;
