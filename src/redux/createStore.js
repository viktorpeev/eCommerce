import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {logger} from "redux-logger";
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares= [logger,sagaMiddleware, thunk];

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const exportedStore = {
    store,
    persistor
  };

  export default exportedStore

//TODO: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

