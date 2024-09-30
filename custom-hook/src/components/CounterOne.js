import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

const CounterOne = () => {
  // insted of this we can use our custom hook

  /*  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevsCount) => prevsCount + 1);
  };
  const decrement = () => {
    setCount((prevsCount) => prevsCount - 1);
  };
  const reset = () => {
    setCount(0);
  }; */
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterOne;
