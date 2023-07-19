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
          <img src="./Logo.svg" alt="Daily News" className="header-logo" />
        </a>
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
          <div className="search">
            <input type="text" className="search-input" />
          </div>
          {/* <div className="header-button">
            <Button>Sign up</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
