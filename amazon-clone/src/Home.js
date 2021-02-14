import React from "react";
import './Home.css';
import amazonHero from './images/amazon_hero.jpg';
import amazonHero2 from "./images/amazon_hero2.jpg";
import amazonHero3 from "./images/amazon_hero3.jpg";
import amazonHero4 from "./images/amazon_hero4.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="slider">
          <figure>
            <img className="home__image" src={amazonHero} alt="amazon hero" />
            <img className="home__image" src={amazonHero2} alt="amazon hero" />
            <img className="home__image" src={amazonHero3} alt="amazon hero" />
            <img className="home__image" src={amazonHero4} alt="amazon hero" />
            <img className="home__image" src={amazonHero} alt="amazon hero" />
          </figure>
        </div>

        {/* <img className="home__image" src={amazonHero} alt="amazon hero" /> */}

        <div className="home__row">
          <Product
            id="4903851"
            title="Govee LED Strip Lights 16.4ft Waterproof Color Changing Light Strips with Remote, Bright 5050 and Multicolor RGB LED Lights for Room, Bedroom, Kitchen, Yard, Party, Christmas"
            price={21.54}
            image="https://images-na.ssl-images-amazon.com/images/I/71PfcLNNkmL._AC_SL1500_.jpg"
            rating={4}
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
            id="12321341"
            title="SET Enterprises Five Crowns Card Game"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61JIlYixgCL._AC_SL1000_.jpg"
            rating={5}
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
            image="https://images-na.ssl-images-amazon.com/images/I/81NCnG8UvYL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="93730829332"
            title="Foxemart Computer Desk 47 Home Office Writing Desk with Storage Shelf"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71uBfqk8bkL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="798345454"
            title="Crest 3D White Toothpaste Radiant Mint (3 Count of 4.1 oz Tubes), 12.3 oz Packaging May Vary "
            price={9.18}
            image="https://images-na.ssl-images-amazon.com/images/I/61kcUZYve1L._SL1100_.jpg"
            rating={5}
          />

          <Product
            id="9226234"
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71gNUi3-qiL._AC_SL1500_.jpg"
            rating={2}
          />

          <Product
            id="1834832"
            title="Flber Macrame Table Runners Handwoven Boho Wedding Table Decoration Bedding Blanket"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Hm2CegiOL._AC_.jpg"
            rating={5}
          />

          <Product
            id="95234572"
            title="De'Longhi Oil-Filled Radiator Space Heater"
            price={89.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61V5KvnKFZL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="7938345454"
            title="DEGOL Skipping Rope with Ball Bearings Rapid Speed"
            price={11.89}
            image="https://images-na.ssl-images-amazon.com/images/I/51YYXSJ4T3L._AC_SL1001_.jpg"
            rating={4}
          />

          <Product
            id="92262234"
            title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial"
            price={69.89}
            image="https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SL1500_.jpg"
            rating={1}
          />

          <Product
            id="18334832"
            title="YOSUDA Indoor Cycling Bike Stationary - Cycle Bike with Ipad Mount ＆Comfortable Seat Cushion (Gray)"
            price={349.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61qutpOfWGL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="9523234572"
            title=" Ab Machine for Ab Workout - Ab Workout Equipment"
            price={16.95}
            image="https://images-na.ssl-images-amazon.com/images/I/91xVOnMVbfL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
