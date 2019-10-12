import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import Button from "../button/Button";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
