import React from "react";
import { Stage, Layer } from "react-konva";

import Background from "./Background";

const GameCanvas = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Background widthInTiles={10} heightInTiles={10} tileWidthPx={64} tileHeightPx={64} />
      </Layer>
    </Stage>
  );
};

export default GameCanvas;
