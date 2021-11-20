import { Image } from "react-konva";
import React from "react";

const Tile = (props) => {
  const {x, y, width, height, image} = props;
  // console.log("image", image);
  return <Image x={x} y={y} width={width} height={height} image={image} />;
};

export default Tile;
