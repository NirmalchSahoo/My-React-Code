import React from 'react';
import { useContext } from 'react';
import { CountContext } from './Contextparent';

export const ChildA = () => {
  console.log('ChildA render');
  return (
    <>
      <div>ChildA</div>
      <ChildB></ChildB>
    </>
  );
};
export const MemoizedChildA = React.memo(ChildA);
export const ChildB = () => {
  console.log('ChildB render');
  return (
    <>
      <div>ChildB</div>
      <ChildC></ChildC>
    </>
  );
};
export const ChildC = () => {
  const count = useContext(CountContext);
  console.log('ChildC render');
  return (
    <>
      <div>ChildC Count = {count}</div>
    </>
  );
};
