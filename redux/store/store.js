import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "../reducers";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  createStore(rootReducer, applyMiddleware(thunk, logger));

export const wrapper = createWrapper(makeStore);
