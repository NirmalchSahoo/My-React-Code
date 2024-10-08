import React, { useState } from 'react';
import HookMouse from './HookMouse';

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}> Toogle Display </button>
      {display && <HookMouse></HookMouse>}
    </div>
  );
};

export default MouseContainer;
