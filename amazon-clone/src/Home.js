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
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation
          to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="4903850"
            title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61H0f42ypKL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903851"
            title="Govee LED Strip Lights 16.4ft Waterproof Color Changing Light Strips with Remote, Bright 5050 and Multicolor RGB LED Lights for Room, Bedroom, Kitchen, Yard, Party, Christmas"
            price={21.54}
            image="https://images-na.ssl-images-amazon.com/images/I/71PfcLNNkmL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Ring Fit Adventure - Nintendo Switch"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81V7L6auixL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung U28E590D 28-Inch UHD LED-Lit Monitor"
            price={288.99}
            image="https://images-na.ssl-images-amazon.com/images/I/A1R-83fsyaL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
