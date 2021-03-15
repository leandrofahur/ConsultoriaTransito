import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navbarRef = useRef();
  const BREAKPOINT = 1060;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (navbarRef.current && navbarRef.current.contains(e.target)) {
        return;
      }
      setIsSidebarVisible(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

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

  const navbarWeb = () => {
    return (
      <div className="ui inverted menu">
        <NavLink to="/" exact>
          <div className={`item isActive`}>
            <img src="/images/logo2.png" />
          </div>
        </NavLink>
        <div className="right menu">{itemList}</div>
      </div>
    );
  };

  const navbarTablet = () => {
    return (
      <div ref={navbarRef} className="ui inverted menu">
        <NavLink to="/" exact>
          <div className={`item isActive`}>
            <img src="/images/logo2.png" />
          </div>
        </NavLink>
        <div
          className="ui icon dropdown button inverted"
          onClick={() => {
            setIsSidebarVisible(true);
          }}
        >
          <i className="bars icon large"></i>
          {isSidebarVisible ? (
            <div className="right vertical menu">{itemList}</div>
          ) : null}
        </div>
      </div>
    );
  };

  return <>{width >= BREAKPOINT ? navbarWeb() : navbarTablet()}</>;
};

export default Navbar;
