import React from "react";
import HananoidItem from "../HananoidItem";

import "./Hananoids.css";

const HananoidsPage = () => {
  return (
    <div className="hananoidsPage">
      <h1>Hananoids</h1>
      <ul className="hananoidsList">
        <HananoidItem name="Bongo" color="green" age={10} />
        <HananoidItem name="Bongo" color="red" age={10} />
        <HananoidItem name="Bongo" color="red" age={10} />
        <HananoidItem name="Bongo" color="green" age={10} />
        <HananoidItem name="Bongo" color="green" age={10} />
        <HananoidItem name="Bongo" color="green" age={10} />
        <HananoidItem name="Bongo" color="green" age={10} />
      </ul>
    </div>
  );
};

export default HananoidsPage;
