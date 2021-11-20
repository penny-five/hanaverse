import { Image } from "react-konva";
import React from "react";

const Tile = (props) => {
  const { x, y, width, height, image } = props;
  return <Image x={x * width} y={y * height} width={width} height={height} image={image} />;
};

export default Tile;
