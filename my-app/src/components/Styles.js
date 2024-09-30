import React from 'react';
import './MyStyles.css';

function Styles(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      {/* <h1 className={className}>Stylesheet</h1> */}
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Styles;
