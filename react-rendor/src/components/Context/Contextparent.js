import React, { useState } from 'react';
import { MemoizedChildA } from './Contextchild';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;
export const Contextparent = () => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {/* <ChildA></ChildA> */}
        <MemoizedChildA></MemoizedChildA>
      </CountProvider>
    </>
  );
};
