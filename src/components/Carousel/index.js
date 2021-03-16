import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const images = [
  "/images/cover1.jpg",
  "/images/cover2.jpg",
  "/images/cover3.jpeg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 2100);
    return () => {
      clearInterval(id);
    };
  }, [current]);

  const imageList = images.map((image) => {
    return (
      <div key={image}>
        <img
          className="ui fluid image kenburns-top layer"
          src={image}
          key={image}
        ></img>
        {/* <div className="label link pos">
          Photo by{" "}
          <Link
            style={{ color: "yellow", textDecoration: "underline" }}
            to="https://unsplash.com/@danielmonteirox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Daniel Monteiro{" "}
          </Link>{" "}
        </div> */}
      </div>
    );
  });
  return <div>{imageList[current]}</div>;
};

export default Carousel;
