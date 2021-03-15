import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ toggle, itemList }) => {
  const sidebarList = itemList.map((item, index) => {
    return (
      <div className="item" key={index}>
        {item}
      </div>
    );
  });

  return (
    <div
      className={`ui sidebar overlay right inverted menu ${
        toggle ? "visible" : null
      }`}
    >
      <div className="ui list">{sidebarList}</div>
    </div>
  );
};

export default Sidebar;
