import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware( ReduxThunk, promiseMiddleware))(createStore); //logger,
export const store = createStoreWithMiddleware(rootReducer)