import React, { useEffect, useState } from "react";
import "./index.css";

const images = [
  "/images/cover1.jpg",
  "/images/cover2.jpg",
  "/images/cover3.jpeg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(current);
    const id = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 1500);
    return () => {
      clearInterval(id);
    };
  }, [current]);

  const imageList = images.map((image) => {
    return (
      <div key={image}>
        <img className="ui fluid image" src={image} key={image}></img>
      </div>
    );
  });
  return <div>{imageList[current]}</div>;
};

export default Carousel;
