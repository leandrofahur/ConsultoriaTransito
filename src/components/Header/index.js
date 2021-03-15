import React from "react";

import Navbar from "../Navbar";
import "./index.css";

const Header = (props) => {
  return (
    <header>
      <Navbar />
      {props.children}
    </header>
  );
};

export default Header;
