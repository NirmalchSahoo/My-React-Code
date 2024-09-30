import React, { useState } from 'react';
import { MemoizedChildTwo } from './ChildTwo';

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nirmal');
  console.log('ParentTwo Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Nirmal Sahoo')}>
        Change Name {name}
      </button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;
