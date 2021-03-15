import React from "react";
import "./index.css";

const images = [
  "/images/cover1.jpg",
  "/images/cover2.jpg",
  "/images/cover3.jpeg",
];

const Carousel = () => {
  const imageList = images.map((image) => {
    return <img className="ui fluid image" src={image}></img>;
  });
  return (
    <div>
      <div>{imageList}</div>
    </div>
  );
};

export default Carousel;
