import React from "react";
import "./header.scss";

const menuLinks = [{ href: "/#", title: HTMLModElement }];

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <a href="/">
          <img src="./Logo.svg" alt="Daily News" className="w-60" />
        </a>
        <div className="header-main">
          <li className="menu-item">
            <a href="" className="menu-link"></a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
