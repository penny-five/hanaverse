import React from "react";
import { Stage, Layer } from "react-konva";

import Background from "./Background";
import HananoidCanvasSprites from "./HananoidCanvasSprites";

const GameCanvas = ({ village }) => {
  return (
    <Stage width={448} height={448}>
      <Layer>
        <Background widthInTiles={14} heightInTiles={14} tileWidthPx={32} tileHeightPx={32} />
      </Layer>
      <Layer>
        <HananoidCanvasSprites hananoids={village.hananoids} />
      </Layer>
    </Stage>
  );
};

export default GameCanvas;
