import React from "react";
import "./Header.css";
import logo from "./images/amazon_logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option"></div>

        <div className="header__option"></div>

        <div className="header__option"></div>
      </div>
    </div>
  );
}

export default Header;
