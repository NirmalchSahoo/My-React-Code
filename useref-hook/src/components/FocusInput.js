import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name !" />
    </div>
  );
};

export default FocusInput;
