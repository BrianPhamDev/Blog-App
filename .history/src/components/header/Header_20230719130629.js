import React, { useState } from "react";
import "./header.scss";
import { IconSearch } from "../icons";
import { NavLink } from "react-router-dom";

const menuLinks = [
  { href: "/#", title: "Home" },
  { href: "/#", title: "Blog" },
  { href: "/#", title: "Contact" },
];
const Header = () => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <NavLink to="/">
          <img src="./Logo.svg" alt="Daily News" className="header-logo" />
        </NavLink>
        <div
          className={`search ${
            inputFocused ? "bg-white" : "bg-backgroundInactive"
          }`}
        >
          <span className="search-icon">
            <IconSearch></IconSearch>
          </span>
          <input
            type="text"
            className="search-input group-hover:bg-white"
            placeholder="Search posts..."
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
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
          <button className="menu-button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
