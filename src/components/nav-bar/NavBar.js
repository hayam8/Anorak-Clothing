import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import CartIcon from "../cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/anorak.svg";
import "./nav-bar.scss";

const NavBar = ({ currentUser, hidden }) => {
  return (
    <div className='nav-bar'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='nav-bar-options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

NavBar.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(NavBar);
