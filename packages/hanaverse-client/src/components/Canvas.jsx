import React from "react";
import { Stage, Layer } from "react-konva";

import Background from "./Background";
import HananoidCanvasSprites from "./HananoidCanvasSprites";

const GameCanvas = () => {
  return (
    <Stage width={450} height={450}>
      <Layer>
        <Background widthInTiles={14} heightInTiles={14} tileWidthPx={32} tileHeightPx={32} />
      </Layer>
      <Layer>
        <HananoidCanvasSprites count={10} />
      </Layer>
    </Stage>
  );
};

export default GameCanvas;
