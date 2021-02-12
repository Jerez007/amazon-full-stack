import React from "react";
import "./Header.css";
import logo from "./images/amazon_logo.png";
import SearchIcon from '@material-ui/icons/Search';  
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="option__headerLineOne">Hello Guest</span>
          <span className="option__headerLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="option__headerLineOne">Returns</span>
          <span className="option__headerLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="option__headerLineOne">Your</span>
          <span className="option__headerLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
