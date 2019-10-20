import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAIL
} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case SIGN_IN_FAIL:
    case SIGN_OUT_FAIL:
    case SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
