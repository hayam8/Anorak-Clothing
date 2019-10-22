import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavBar from "./components/nav-bar/NavBar";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/user.selector";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
const CheckoutPage = lazy(() => import("./pages/checkout/CheckoutPage"));
const SignInAndSignUpPage = lazy(() => import("./pages/auth/SignInAndSignUp"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />

            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
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
