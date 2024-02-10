import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

// Creating reducers here:
function feeling(state = 0, action) {
  if (action.type === 'FEELING_ADD') {
    return action.payload;
  }
  return state;
}

function understanding(state = 0, action) {
  if (action.type === 'UNDERSTANDING_ADD') {
    return action.payload;
  }
  return state;
}

function supported(state = 0, action) {
  if (action.type === 'SUPPORT_ADD') {
    return action.payload;
  }
  return state;
}

function comments(state = '', action) {
  if (action.type === 'COMMENT_ADD') {
    return action.payload;
  }
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
