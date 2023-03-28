import { configureStore } from '@reduxjs/toolkit'

import logger from "redux-logger";

import rootReducer from "./rootReducer";

export const middlewares= [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;

//TODO: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

