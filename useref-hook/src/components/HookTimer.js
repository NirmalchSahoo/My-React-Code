import React, { useState, useEffect, useRef } from 'react';

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  // create intervalref
  const intervalRef = useRef();

  useEffect(() => {
    // instead of interval variable we have to use intervalref.current here
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        {' '}
        Clear Hook Timer
      </button>
    </div>
  );
};

export default HookTimer;
