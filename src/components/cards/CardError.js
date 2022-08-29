import React from "react";

const CardError = (props) => {
  const { code, messages } = props.error;
  return (
    <div className="card card-error">
      <h1 className="label-error">{`Error: [${code}] -> ${messages}`}</h1>
    </div>
  );
};

export default CardError;
