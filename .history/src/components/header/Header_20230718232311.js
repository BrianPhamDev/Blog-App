import React from "react";
import "./header.scss";
import { Button } from "../button";

const menuLinks = [
  { href: "/#", title: "Home" },
  { href: "/#", title: "Blog" },
  { href: "/#", title: "Contact" },
];

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <a href="/">
          <img src="./Logo.svg" alt="Daily News" className="w-60" />
        </a>
        <div className="header-main">
          {menuLinks.map((item) => (
            <li className="menu-item" key={item.title}>
              <a href={item.href} className="menu-link">
                {item.title}
              </a>
            </li>
          ))}
          <div className="header-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
