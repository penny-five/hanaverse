import { useRef, useState, useEffect } from "react";
import { Sprite } from "react-konva";

const HANANOID_COLORS = ["blue", "green", "orange", "red"];
const HANANOID_MOODS = ["happy", "sad"];

const CanvasHananoid = ({ color, happy }) => {
  const [x, setX] = useState(Math.round(Math.random() * 13) * 32);
  const [y, setY] = useState(Math.round(Math.random() * 13) * 32);
  const spriteRef = useRef(null);

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
      x={x}
      y={y}
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
