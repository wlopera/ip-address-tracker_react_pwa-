import React from "react";

const LabelField = ({ title, value }) => {
  return (
    <div className="lbl-field-main">
      <p className="lbl-field-title">{title}</p>
      <p className="lbl-field-value">{value}</p>
    </div>
  );
};

export default LabelField;
