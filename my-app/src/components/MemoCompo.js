import React from 'react';

const MemoCompo = ({ name }) => {
  console.log('Rendoring memo compo');
  return <div>{name}</div>;
};

export default React.memo(MemoCompo);
