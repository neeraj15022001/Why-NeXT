import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "../reducers";
export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
