import React from 'react';
import './HeaderFooter.css';
import LocationOnIcon from "@material-ui/icons/LocationOn";

function HeaderFooter() {
  return (
    <div className="headerFooter">
      <div className="headerFooter__option">
        <LocationOnIcon />

        <div className="option__deliver">
          <p>Deliver to</p>
          <p>
            <strong>Canada</strong>
          </p>
        </div>

        <div className="option__links">
          <p>
            <a href="#">Today's Deals</a>
          </p>

          <p>
            <a href="#">Customer Service</a>
          </p>

          <p>
            <a href="#">Gift Cards</a>
          </p>

          <p>
            <a href="#">Sell</a>
          </p>

          <p>
            <a href="#">Registry</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderFooter
