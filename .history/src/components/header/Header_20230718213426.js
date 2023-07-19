import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src="./Logo.svg" alt="Daily News" className="logo" />
      </a>
    </div>
  );
};

export default Header;
