import React from "react";

import Tile from "./Tile";

const TILETYPES = [
  "grass1",
  "grass2",
  "grass3",
  "ponds",
  "field",
  // "desert",
  // "desertgrass1",
  // "desertgrass2",
];

const Background = (props) => {
  const { widthInTiles, heightInTiles, tileWidthPx, tileHeightPx } = props;

  const resolveTileImage = (tileType) => {
    let image = new Image();
    image.src = `${process.env.PUBLIC_URL + `/tiles/${tileType}.png`}`;
    return image;
  };

  const tilemap = Array(widthInTiles)
    .fill()
    .map((_, x) => {
      return Array(heightInTiles)
        .fill()
        .map((_, y) => {
          return (
            <Tile
              key={`${x} ${y}`}
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
    })
    .flat();

  return tilemap;
};

export default Background;
