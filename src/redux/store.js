import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

// set up middleware
const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware)); /// iterate through middleware array and apply middleware

// persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };
