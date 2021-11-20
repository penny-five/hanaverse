import React from "react";
import LoadingImage from "./LoadingImage";

import Tile from "./Tile";
import useImage from "use-image";

const TILETYPES = ["grass", "puddle"];

const Background = (props) => {
  const {widthInTiles, heightInTiles, tileWidthPx, tileHeightPx} = props;

  const grass = <LoadingImage url={`${process.env.PUBLIC_URL + '/tiles/grass.png'}`} />;
  const puddle = <LoadingImage url={`${process.env.PUBLIC_URL + '/tiles/puddle.png'}`} />;

  const resolveTileImage = (tileType) => {
    switch (tileType) {
      case "grass":
        return grass;
      case "puddle":
        return puddle;
      default:
        throw Error("Unknown tile type ", tileType);
    }
  };

  const tilemap = (Array(widthInTiles)
    .fill()
    .map((_, x) => {
      console.log(x);
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
    })).flat();;

  console.log(tilemap);

  return tilemap;
};

export default Background;
