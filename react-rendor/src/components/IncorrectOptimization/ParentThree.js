import React, { useState } from 'react';
import { MemoizedChildFour } from './ChildFour';

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nirmal');
  console.log('ParentThree Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Nirmal Sahoo')}>
        Change Name {name}
      </button>
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name}></MemoizedChildFour>
    </div>
  );
};

export default ParentThree;
