import React from "react";

import Tile from "./Tile";

import grass from "../resources/grass.png";
import puddle from "../resources/puddle.png";

const TILETYPES = ["grass", "puddle"];

const Background = (props) => {
  const {widthInTiles, heightInTiles, tileWidthPx, tileHeightPx} = props;

  // const grass = <LoadingImage url={`${process.env.PUBLIC_URL + '/tiles/grass.png'}`} />;
  // const puddle = <LoadingImage url={`${process.env.PUBLIC_URL + '/tiles/puddle.png'}`} />;

  const resolveTileImage = (tileType) => {
    let image = new Image();
    switch (tileType) {
      case "grass":
        image.src = grass;
        return image;
      case "puddle":
        image.src = puddle;
        return image;
      default:
        throw Error("Unknown tile type ", tileType);
    }
  };

  const tilemap = (Array(widthInTiles)
    .fill()
    .map((_, x) => {
      return Array(heightInTiles)
        .fill()
        .map((_, y) => {
          return (
            <Tile
              key={`${x}${y}`}
              x={x}
              y={y}
              width={tileWidthPx}
              height={tileHeightPx}
              image={resolveTileImage(
                TILETYPES[Math.round(Math.random() * (TILETYPES.length - 1))]
              )}
            />
          );
        });
    })).flat();

  return tilemap;
};

export default Background;
