import React from 'react';
import { Stage, Layer, Text, Circle } from 'react-konva';

const GameCanvas = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <Circle x={100} y={120} radius={100} fill="red"/>
          </Layer>
        </Stage>);
}

export default GameCanvas;