import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { watchLoadData } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(watchLoadData)

export default store;
