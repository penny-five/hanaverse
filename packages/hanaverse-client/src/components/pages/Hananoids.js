import React from "react";
import HananoidItem from "../HananoidItem";
import VillageNamePanel from "../VillageNamePanel";

import "./Hananoids.css";

const HananoidsPage = () => {
  return (
    <div>
      <VillageNamePanel name="Yolo Village" />
      <div className="hananoidsPage">
        <h2>My Hananoids</h2>
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
    </div>
  );
};

export default HananoidsPage;
