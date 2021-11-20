import { useRef, useEffect } from "react";
import { Sprite } from "react-konva";

const CanvasHananoid = ({ color, happy }) => {
  const spriteRef = useRef(null);

  const randomCoordinate = () => Math.round(Math.random() * 13) * 32;

  const resolveImage = () => {
    let image = new window.Image();
    image.src = `${
      process.env.PUBLIC_URL + `/hananoids/${color}-${happy ? "happy" : "sad"}-animated.png`
    }`;
    return image;
  };

  useEffect(() => {
    spriteRef.current.start();
  }, [spriteRef]);

  return (
    <Sprite
      ref={spriteRef}
      x={randomCoordinate()}
      y={randomCoordinate()}
      image={resolveImage()}
      animation="bouncing"
      animations={{
        // x, y, width, height (4 frames)
        bouncing: [0, 0, 23, 32, 23, 0, 23, 32, 46, 0, 23, 32, 69, 0, 23, 32],
      }}
      frameRate={4}
      frameIndex={0}
    />
  );
};

export default CanvasHananoid;
