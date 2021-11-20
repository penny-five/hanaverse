import React from "react";
import HananoidItem from "../HananoidItem";
import VillageNamePanel from "../VillageNamePanel";

import "./Hananoids.css";

const HananoidsPage = ({ village }) => {
  return (
    <div>
      <VillageNamePanel name={village.villageName} />
      <div className="hananoidsPage">
        <h2>My Hananoids</h2>
        <ul className="hananoidsList">
          {village.hananoids.map((hananoid) => (
            <HananoidItem
              key={hananoid.name}
              name={hananoid.name}
              color={hananoid.color}
              age={hananoid.age}
              mood={village.hananoidHappiness >= 0.5 ? "happy" : "sad"}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HananoidsPage;
