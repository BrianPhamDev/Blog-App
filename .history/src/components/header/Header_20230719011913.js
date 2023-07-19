import React from "react";
import "./header.scss";
import { Button } from "../button";
import { IconSearch } from "../icons";

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
          <img src="./Logo.svg" alt="Daily News" className="header-logo" />
        </a>
        <div className="search">
          <span className="search-icon">
            <IconSearch></IconSearch>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search posts..."
          />
        </div>
        <div className="header-main">
          <div className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <a href={item.href} className="menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </div>
          <button className="button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
