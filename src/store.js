import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

// Creating reducers here:
function feeling(state = 0, action) {
  if (action.type === 'FEELING_ADD') {
    return action.payload;
  } else if (action.type === 'RESET_FEEDBACK') {
    return (state = 0);
  }
  return state;
}

function understanding(state = 0, action) {
  if (action.type === 'UNDERSTANDING_ADD') {
    return action.payload;
  } else if (action.type === 'RESET_FEEDBACK') {
    return (state = 0);
  }
  return state;
}

function support(state = 0, action) {
  if (action.type === 'SUPPORT_ADD') {
    return action.payload;
  } else if (action.type === 'RESET_FEEDBACK') {
    return (state = 0);
  }
  return state;
}

function comments(state = '', action) {
  if (action.type === 'COMMENT_ADD') {
    return action.payload;
  } else if (action.type === 'RESET_FEEDBACK') {
    return (state = '');
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
      support,
      comments,
    }),
    applyMiddleware(logger)
  );
