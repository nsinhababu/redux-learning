import { createStore } from 'redux';

// Reducer
const reducerFn = (state = { counter: 0 }, action) => {
  // Only synchronous Fns are allowed
  // main state should be untouched
  // according to dispatch action we are changing state in this reducer Fn

  if (action.type === 'INC') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'RES') {
    return { counter: action.payload };
  }

  if (action.type === 'DEC') {
    return { counter: state.counter - 1 };
  }

  return state;
};

// creating store

const store = createStore(reducerFn);

export default store;
