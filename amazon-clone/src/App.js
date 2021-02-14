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
            <Payment />
            <h1>payment page</h1>
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
