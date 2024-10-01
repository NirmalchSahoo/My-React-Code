import React, { useState, useMemo, useCallback } from 'react';
import { MemoizedChildFive } from './ChildFive';

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nirmal');

  const person = {
    fname: 'Bruce',
    lname: 'Ray',
  };
  const memoizedPerson = useMemo(() => person, []);
  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);
  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Nirmal Sahoo')}>
        Change Name {name}
      </button>
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFive
        name={name}
        handleClick={memoizedHandleClick}
        // person={memoizedPerson}
      ></MemoizedChildFive>
    </div>
  );
};

export default ParentFour;
