import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2021/Valentines/CA_VDAY21_1500x50_Rec_en.png"
          alt="amazon banner ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Subtotal goes here</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
    </div>
  );
}

export default Checkout;
