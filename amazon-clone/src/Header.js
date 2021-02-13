import React from "react";
import "./Header.css";
import logo from "./images/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="option__headerLineOne">Hello Guest</span>
            <span className="option__headerLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="option__headerLineOne">Returns</span>
          <span className="option__headerLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="option__headerLineOne">Your</span>
          <span className="option__headerLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
