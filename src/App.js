import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import NavBar from "./components/nav-bar/NavBar";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
