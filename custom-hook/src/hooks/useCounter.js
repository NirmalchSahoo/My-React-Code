import React, { useState } from 'react';

const useCounter = (initialvalue = 0, value) => {
  const [count, setCount] = useState(initialvalue);

  const increment = () => {
    setCount((prevsCount) => prevsCount + value);
  };
  const decrement = () => {
    setCount((prevsCount) => prevsCount - value);
  };
  const reset = () => {
    setCount(initialvalue);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
