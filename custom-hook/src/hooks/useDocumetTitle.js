import React, { useEffect } from 'react';

const useDocumetTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};

export default useDocumetTitle;
