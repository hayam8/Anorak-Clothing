import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import {
  auth,
  createUserProfileDocument
  //addCollectionDocuments
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  // set user to logged in user
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // CALL DISPATCH ON SET CURRENT USER REDUCER
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      // Return object of titles & items, ignoring other values
      /*
      addCollectionDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
      */
    });
  }

  // logs out user when component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
