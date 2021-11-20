import { Image } from "react-konva";

const Props = ({ coordinates }) => {
  const resolveImage = () => {
    let image = new window.Image();
    image.src = `${process.env.PUBLIC_URL + `/tiles/house.png`}`;
    return image;
  };

  return coordinates.map((coordinate) => {
    return (
      <Image
        key={`${coordinate.x} ${coordinate.y}`}
        image={resolveImage()}
        x={coordinate.x * 32}
        y={coordinate.y * 32}
      />
    );
  });
};

export default Props;
