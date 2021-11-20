import React from "react";

import Tile from "./Tile";

const GREEN_TILES = ["grass1", "grass2", "grass3", "ponds", "field"];

const DRY_TILES = ["desert", "desertgrass1", "desertgrass2"];

const Background = ({ weather, widthInTiles, heightInTiles, tileWidthPx, tileHeightPx }) => {
  const resolveTileImage = () => {
    let image = new Image();
    const tileSet = weather === "BURNING_HOT" ? DRY_TILES : GREEN_TILES;
    const tileName = tileSet[Math.round(Math.random() * (tileSet.length - 1))];
    image.src = `${process.env.PUBLIC_URL + `/tiles/${tileName}.png`}`;
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
              image={resolveTileImage()}
            />
          );
        });
    })
    .flat();

  return tilemap;
};

export default Background;
