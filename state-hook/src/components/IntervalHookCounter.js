import React, { useEffect, useState } from 'react';

const IntervalHookCounter = (someprop) => {
  const [count, setCount] = useState(0);

  //   const tick = () => {
  //     setCount(count + 1);
  //   };
  const tick = () => {
    setCount((prvsCount) => prvsCount + 1);
  };
  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);
  //     return () => [clearInterval(interval)];
  //   }, [count]);
  useEffect(() => {
    function doSomething(someprop) {
      console.log('doing something ===> ', someprop);
    }
    doSomething(someprop);
    const interval = setInterval(tick, 1000);
    return () => [clearInterval(interval)];
  }, [someprop]);
  // function doSomething(){
  //     console.log(someprop)
  // }
  return (
    <div>
      <h1> Hook counter {count}</h1>
    </div>
  );
};

export default IntervalHookCounter;
