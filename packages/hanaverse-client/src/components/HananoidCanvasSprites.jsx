import React from "react";
import { Image, Sprite } from "react-konva";
import CanvasHananoid from "./CanvasHananoid";

const HananoidCanvasSprites = (props) => {
  const { count } = props;

  const positions = [];

  const hananoids = Array(count)
    .fill()
    .map(() => {
      return <CanvasHananoid />;
    });

  console.log(hananoids);

  return hananoids;
};

export default HananoidCanvasSprites;
