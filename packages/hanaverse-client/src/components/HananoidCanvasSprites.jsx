import React from "react";
import CanvasHananoid from "./CanvasHananoid";

const HananoidCanvasSprites = ({ hananoids, happy }) => {
  return hananoids.map((hananoid) => {
    return <CanvasHananoid color={hananoid.color} happy />;
  });
};

export default HananoidCanvasSprites;
