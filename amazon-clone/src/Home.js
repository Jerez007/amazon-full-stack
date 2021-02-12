import React from "react";
import './Home.css';
import amazonHero from './images/amazon_hero.jpg'
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonHero} alt="amazon hero" />

        <div className="home__row">
          <Product />
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
        </div>
      </div>
    </div>
  );
};

export default Home;
