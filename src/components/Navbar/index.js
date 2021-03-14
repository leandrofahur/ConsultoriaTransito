import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  {
    label: "Início",
    icon: "home",
    path: "/",
  },
  {
    label: "Sobre Mim",
    icon: "user",
    path: "/sobre",
  },
  // {
  //   label: "Serviços",
  //   icon: "cogs",
  //   path: "/servicos",
  // },
  // {
  //   label: "Blog",
  //   icon: "pencil alternate",
  //   path: "/blog",
  // },
  // {
  //   label: "Contato",
  //   icon: "address card outline",
  //   path: "/contato",
  // },
];

const Navbar = () => {
  const itemList = items.map(({ label, icon, path }) => {
    return (
      <NavLink to={`${path}`} exact={path === "/"} key={label}>
        <div
          className={`item`}
          onClick={() => {
            console.log(`Route: ${path}`);
          }}
        >
          <i className={`${icon} icon`}></i> {label}
        </div>
      </NavLink>
    );
  });

  return (
    <div className="ui secondary menu">
      <div className="right menu">{itemList}</div>
    </div>
  );
};

export default Navbar;
