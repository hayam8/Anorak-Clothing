import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// set up middleware
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); /// iterate through middleware array and apply middleware

// persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };
