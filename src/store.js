import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';


// Creating reducers here:
function feeling(state = 0, action) {
  return state;
}

function understanding(state = 0, action) {
  return state;
}

function supported(state = 0, action) {
  return state;
}

function comments(state = '', action) {
  return state;
}


// Storing Reducers
export const store = () =>
  createStore(
    combineReducers({
      // Putting reducers into the redux store here:
      feeling,
      understanding,
      supported,
      comments,
    }),
    applyMiddleware(logger)
  );