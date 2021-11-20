import React from "react";

import Hananoid from "./Hananoid";
import "./HananoidItem.css";

const HananoidItem = ({ name, color, age, mood }) => {
  return (
    <li className="hananoidItem">
      <Hananoid color={color} mood={mood} />
      <div className="content">
        <span className="name">{name}</span>
        {age > 0 ? (
          <span className="age">{age} days old</span>
        ) : (
          <span className="age">Born today</span>
        )}
      </div>
    </li>
  );
};

export default HananoidItem;
