import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <a href="/">
          <img src="./Logo.svg" alt="Daily News" className="w-60" />
        </a>
      </div>
    </div>
  );
};

export default Header;
