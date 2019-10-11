import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

// set up middleware
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware)); /// iterate through middleware array and apply middleware

export default store;
