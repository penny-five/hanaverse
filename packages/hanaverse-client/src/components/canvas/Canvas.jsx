import { React, useMemo } from "react";
import { Stage, Layer } from "react-konva";

import Background from "./Background";
import { generateHananoidLocations } from "../../utils/canvas";
import Hananoids from "./Hananoids";

const GRID_WIDTH = 14; // tiles
const GRID_HEIGHT = 14;
const TILE_SIZE = 32;

const Canvas = ({ village }) => {
  const hananoidLocations = useMemo(
    () => generateHananoidLocations([], village.hananoids, GRID_WIDTH, GRID_HEIGHT),
    [village]
  );

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
        <Hananoids
          hananoids={village.hananoids}
          coordinates={hananoidLocations}
          happy={village.hananoidHappiness >= 0.5 ? true : false}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
