import React from "react";

import "./Badge.css";

const Badge = ({ label }) => {
  return (
    <span className="badge">
      <span className="label">{label}</span>
    </span>
  );
};

export default Badge;
