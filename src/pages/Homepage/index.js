import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const Homepage = () => {
  return (
    <>
      <div>
        <Header />
        <Carousel />
        <img src="/images/logo3.png"></img>
        <main>
          <div className="ui container"></div>
        </main>
      </div>
    </>
  );
};

export default Homepage;
