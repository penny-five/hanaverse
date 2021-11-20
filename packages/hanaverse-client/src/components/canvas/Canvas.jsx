import React from "react";
import { Stage, Layer } from "react-konva";

import Background from "./Background";
import {
  generatePropLocations,
  generateHananoidLocations,
  scaleLocationsToCoordinates,
} from "../../utils/canvas";
import Hananoids from "./Hananoids";
import Props from "./Props";

const GRID_WIDTH = 14; // tiles
const GRID_HEIGHT = 14;
const TILE_SIZE = 32;

const Canvas = ({ village }) => {
  const propLocations = generatePropLocations(village.hananoids.length, GRID_WIDTH, GRID_HEIGHT);
  const hananoidLocations = generateHananoidLocations(
    propLocations,
    village.hananoids,
    GRID_WIDTH,
    GRID_HEIGHT
  );
  console.log(propLocations, hananoidLocations);
  const propCoordinates = propLocations.map((location) => {
    return scaleLocationsToCoordinates(location, TILE_SIZE);
  });
  const hananoidCoordinates = hananoidLocations.map((location) => {
    return scaleLocationsToCoordinates(location, TILE_SIZE);
  });
  console.log(propCoordinates, hananoidCoordinates);

  return (
    <Stage width={448} height={448}>
      <Layer>
        <Background
          weather={village.weatherForecast}
          widthInTiles={GRID_WIDTH}
          heightInTiles={GRID_HEIGHT}
          tileWidthPx={TILE_SIZE}
          tileHeightPx={TILE_SIZE}
        />
      </Layer>
      <Layer>
        <Props coordinates={propCoordinates} />
      </Layer>
      <Layer>
        <Hananoids
          hananoids={village.hananoids}
          coordinates={hananoidCoordinates}
          happy={village.hananoidHappiness >= 0.5 ? true : false}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
