import React, { useState } from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        <div className="ui container"></div>
      </main>
    </>
  );
};

export default Homepage;
