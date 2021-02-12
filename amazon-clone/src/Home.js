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
          <Product
            title=" The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation
          to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
