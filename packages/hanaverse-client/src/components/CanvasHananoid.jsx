import { useState } from "react";
import { Image } from "react-konva";

const HANANOID_COLORS = ["blue", "green", "orange", "red"];

const HANANOID_MOODS = ["happy", "sad"];

const CanvasHananoid = (props) => {
  const [x, setX] = useState(Math.round(Math.random() * 13) * 32);
  const [y, setY] = useState(Math.round(Math.random() * 13) * 32);

  const resolveImage = () => {
    const color = HANANOID_COLORS[Math.round(Math.random() * (HANANOID_COLORS.length - 1))];
    const mood = HANANOID_MOODS[Math.round(Math.random() * (HANANOID_MOODS.length - 1))];

    let image = new window.Image();
    image.src = `${process.env.PUBLIC_URL + `/hananoids/${color}-${mood}.png`}`;
    return image;
  };

  return <Image x={x} y={y} image={resolveImage()} />; // TODO change into an animated sprite
};

export default CanvasHananoid;
