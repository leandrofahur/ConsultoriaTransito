import React, { useEffect, useState, useRef } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();

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

  // use Effect to keep track of the browser window width:
  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.RemoveEventListener("resize", handleWindowSize);
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
    <header>
      <div
        ref={width > 760 ? null : menuRef}
        className="ui top inverted attached menu"
      >
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
          {width > 760 ? itemList : <i className="bars large icon"></i>}
        </span>
        {width > 760 ? null : <Sidebar toggle={toggle} itemList={itemList} />}
      </div>
    </header>
  );
};

export default Header;
