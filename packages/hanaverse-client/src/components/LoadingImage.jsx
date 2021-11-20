
import { useState, useRef, useEffect } from "react";

// http://disq.us/p/29ylwth
const LoadingImage = (props) => {
  const {url} = props;

  const imageRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(()=>{
    loadImage();
  }, [])

  const handleLoad = () => {
    setImage(imageRef.current);
  }

  const loadImage = () => {
    const img = new window.Image();
    img.src = url;
    img.crossOrigin="Anonymous";
    imageRef.current = img;
    imageRef.current.addEventListener('load', handleLoad);
  }

  console.log(image);
  return image;
}

export default LoadingImage;
