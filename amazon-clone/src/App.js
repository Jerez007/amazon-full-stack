import "./App.css";
import Header from "./Header";
import Home from "./Home";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import HeaderFooter from "./HeaderFooter";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IKcqBGq0pDmnvbrClgWGQgGgf9ArxqHNlsGbl9mX4Z1hrPt2Mxa0zfJvp4gPJXvvqw2BdPffvJg6Lcxj1wpQLBy00li4INzgE"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS LOGGED IN >>> ", authUser);

      if (authUser) {
        //user just logged in or has already logged in(but refreshes the page)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <HeaderFooter />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <HeaderFooter />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
