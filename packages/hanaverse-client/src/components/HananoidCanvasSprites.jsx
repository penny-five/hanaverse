import React from "react";
import CanvasHananoid from "./CanvasHananoid";

const HananoidCanvasSprites = (props) => {
  const { count } = props;
  const hananoids = Array(count)
    .fill()
    .map(() => {
      return <CanvasHananoid />;
    });

  return hananoids;
};

export default HananoidCanvasSprites;
