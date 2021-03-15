import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";

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
  {
    label: "Blog",
    icon: "pencil alternate",
    path: "/blog",
  },
  {
    label: "Serviços",
    icon: "cogs",
    path: "/servicos",
  },
  {
    label: "Contato",
    icon: "address card outline",
    path: "/contato",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const onToggleMenu = () => {
    setToggle(!toggle);
  };

  const itemList = items.map(({ label, icon, path }) => {
    return (
      <NavLink to={`${path}`} exact={path === "/"} key={label}>
        <div className={`item`}>
          <i className={`${icon} icon`}></i> {label}
        </div>
      </NavLink>
    );
  });

  return (
    <header>
      <div className="ui top inverted attached menu">
        <NavLink to="/" exact>
          <div className={`item`}>
            <img src="/images/logo2.png" />
          </div>
        </NavLink>
        <span
          className="item right floated link"
          onClick={() => {
            onToggleMenu();
          }}
        >
          <i className="bars large icon"></i>
        </span>
        <Sidebar toggle={toggle} itemList={itemList} />
      </div>
    </header>
  );
};

export default Header;
