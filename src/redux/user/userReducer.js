import {
  GOOGLE_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAIL,
  EMAIL_SIGN_IN_FAIL
} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case GOOGLE_SIGN_IN_FAIL:
    case EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
