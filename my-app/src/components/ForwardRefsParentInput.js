import React, { Component } from 'react';
import ForwardRefsInput from './ForwardRefsInput';

class ForwardRefsParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardRefsInput ref={this.inputRef}></ForwardRefsInput>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardRefsParentInput;
