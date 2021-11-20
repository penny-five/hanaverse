import { useRef, useState, useEffect } from "react";
import { Image, Sprite } from "react-konva";

const HANANOID_COLORS = ["blue", "green", "orange", "red"];

const HANANOID_MOODS = ["happy", "sad"];

const CanvasHananoid = (props) => {
  const [x, setX] = useState(Math.round(Math.random() * 13) * 32);
  const [y, setY] = useState(Math.round(Math.random() * 13) * 32);
  const spriteRef = useRef(null);

  const resolveImage = () => {
    let image = new window.Image();
    image.src = `${process.env.PUBLIC_URL + "/hananoids/blue-happy.png"}`;
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
        bouncing: [0, 0, 32, 44, 32, 0, 32, 44, 64, 0, 32, 44],
      }}
      frameRate={2}
      frameIndex={0}
    />
  );
};

export default CanvasHananoid;
