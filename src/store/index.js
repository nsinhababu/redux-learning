import { createStore } from 'redux';

// Reducer
const reducerFn = (state = { counter: 0 }, action) => {
  return state;
};

// creating store

const store = createStore(reducerFn);

export default store;
