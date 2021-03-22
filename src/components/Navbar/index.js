import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";

import "./index.css";

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

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();

  const onToggleMenu = () => {
    setToggle(!toggle);
  };

  const itemList = items.map(({ label, icon, path }) => {
    return (
      <NavLink
        to={`${path}`}
        exact={path === "/"}
        // activeStyle={{ height: "100%", width: "100%" }}
        activeStyle={{ backgroundColor: "red" }}
        key={icon}
      >
        <div className={`item`} key={label}>
          <i className={`${icon} icon`}></i> {label}
        </div>
      </NavLink>
    );
  });

  // use Effect to keep track of the browser window width:
  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  // use Effect to keep track of the mouse click outside vertical menu:
  useEffect(() => {
    const onBodyClick = (e) => {
      if (menuRef.current && menuRef.current.contains(e.target)) {
        return;
      }
      setToggle(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <Navbar>
      <div
        ref={width > 760 ? null : menuRef}
        className="ui top inverted attached menu"
      >
        <NavLink to="/" exact>
          <div className={`item`}>
            <img src="/images/logo2.png" alt="" />
          </div>
        </NavLink>

        {width > 760 ? (
          <>
            <div className="right menu">{itemList}</div>
          </>
        ) : (
          <>
            <div
              className="item right floated link"
              onClick={() => {
                onToggleMenu();
              }}
            >
              <i className="bars large icon"></i>
            </div>
            <Sidebar toggle={toggle} itemList={itemList} />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
