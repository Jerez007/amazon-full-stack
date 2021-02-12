import React from "react";
import './Home.css';
import amazonHero from './images/amazon_hero.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={amazonHero}
          alt="amazon body background "
        />
      </div>
    </div>
  );
};

export default Home;
