import React, { useMemo, useState } from 'react';

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // this will be very slow rendering
  /*  const isEven = () => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }; */

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // here we use the usememo hook for fast rendoring
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One - {counterOne} </button>
        {/* <span>{isEven() ? ' Even ' : ' Odd '}</span> for the normal function we can use the isEven() with braces  */}
        <span>{isEven ? ' Even ' : ' Odd '}</span>{' '}
        {/* but for the usememo hook the isEven is not a function now so we hav eto call without braces */}
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo} </button>
      </div>
    </div>
  );
};

export default Counter;
