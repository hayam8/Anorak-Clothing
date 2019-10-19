import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { loadCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// set up middleware
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); /// iterate through middleware array and apply middleware

sagaMiddleware.run(rootSaga);

// persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };
