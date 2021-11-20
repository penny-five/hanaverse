import React from "react";

import Hananoid from "./Hananoid";
import "./HananoidItem.css";

const HananoidItem = ({ name, color, age }) => {
  return (
    <li className="hananoidItem">
      <Hananoid color={color} mood="HAPPY" />
      <div className="content">
        <span className="name">{name}</span>
        <span className="age">{age} days old</span>
      </div>
    </li>
  );
};

export default HananoidItem;
