import { createSelector } from "reselect";

const selectCart = state => state.cart;

/**
 * @params array of input selectors, function that
 * returns desired value from selector
 */
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

/**
 * @returns number of items in shopping cart
 */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
