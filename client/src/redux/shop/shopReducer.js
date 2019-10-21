import {
  LOAD_COLLECTIONS_START,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_FAIL
} from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload
      };
    case LOAD_COLLECTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
