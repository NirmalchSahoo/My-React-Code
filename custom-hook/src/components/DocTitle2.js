import React, { useState, useEffect } from 'react';
import useDocumetTitle from '../hooks/useDocumetTitle';

const DocTitle2 = () => {
  const [count, setCount] = useState(0);
  // insted of use this we can use our custom hook useDocumnetTitle(count) hook
  /* useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]); */
  useDocumetTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default DocTitle2;
