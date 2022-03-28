import { useSelector, useDispatch } from 'react-redux';

const CounterApp = () => {
  // using useSelector use state from store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    // Using dispatch to dispatch an action
    // according to this action state will be changed in store

    dispatch({ type: 'INC' });
  };
  const reset = () => {
    // Using dispatch to dispatch an action
    // according to this action state will be changed in store
    // in this case we are also dispatching the payload

    dispatch({ type: 'RES', payload: 0 });
  };
  const decrement = () => {
    // Using dispatch to dispatch an action
    // according to this action state will be changed in store

    dispatch({ type: 'DEC' });
  };

  return (
    <div style={{ width: '300px', textAlign: 'center', margin: '10px' }}>
      <h1>{counter}</h1>
      <div>
        <button
          style={{ padding: '4px 5px', margin: '5px' }}
          onClick={increment}
        >
          Increase
        </button>
        <button style={{ padding: '4px 5px', margin: '5px' }} onClick={reset}>
          Reset
        </button>
        <button
          style={{ padding: '4px 5px', margin: '5px' }}
          onClick={decrement}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
