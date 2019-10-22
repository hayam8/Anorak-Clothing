import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import { GlobalStyle } from "./global.styles";

import { checkUserSession } from "./redux/user/userActions";

import { selectCurrentUser } from "./redux/user/user.selector";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
