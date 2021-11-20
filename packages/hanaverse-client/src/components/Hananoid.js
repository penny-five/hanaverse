import React from "react";

import "./Hananoid.css";

const Hananoid = ({ color, mood }) => {
  const url = `/hananoids/${color.toLowerCase()}-${mood.toLowerCase()}.png`;
  return <img className="hananoid" src={url} alt="hananoid" />;
};

Hananoid.defaultProps = {
  color: "GREEN",
  mood: "HAPPY",
};

export default Hananoid;
