import React from "react";
import CanvasHananoid from "./CanvasHananoid";

const HananoidCanvasSprites = ({ hananoids, happy }) => {
  return hananoids.map((hananoid) => {
    return <CanvasHananoid key={hananoid.name} color={hananoid.color} happy={happy} />;
  });
};

export default HananoidCanvasSprites;
