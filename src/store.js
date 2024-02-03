import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';


// Creating reducers here:


// Storing Reducers
export const store = () =>
  createStore(
    combineReducers({
      // Putting reducers into the redux store here:
    }),
    applyMiddleware(logger)
  );