import { TOGGLE_CART_VISIBILITY, ADD_ITEM } from "../types";

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
