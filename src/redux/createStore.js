import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {logger} from "redux-logger";
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";

export const middlewares= [logger, thunk];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;

//TODO: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

