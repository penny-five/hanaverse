import React from "react";
import Hananoid from "./Hananoid";

const Hananoids = ({ hananoids, happy, coordinates }) => {
  return hananoids.map((hananoid, index) => {
    return (
      <Hananoid
        key={hananoid.name}
        color={hananoid.color}
        happy={happy}
        location={coordinates[index]}
      />
    );
  });
};

export default Hananoids;
