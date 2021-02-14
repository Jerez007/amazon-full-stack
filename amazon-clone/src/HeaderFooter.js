import React from "react";
import "./HeaderFooter.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function HeaderFooter() {
  return (
    <div className="headerFooter">
      <div className="headerFooter__option">
        <LocationOnOutlinedIcon className="headerFooter__locationIcon" />

        <div className="option__deliver">
          <p>
            <small>Deliver to</small>
          </p>

          <p>
            <strong>Canada</strong>
          </p>
        </div>

        <div className="option__links">
          <p>
            <a href="/">Today's Deals</a>
          </p>

          <p>
            <a href="/">Customer Service</a>
          </p>

          <p>
            <a href="/">Gift Cards</a>
          </p>

          <p>
            <a href="/">Sell</a>
          </p>

          <p>
            <a href="/">Registry</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderFooter;
