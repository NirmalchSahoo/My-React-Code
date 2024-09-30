import React, { Component } from 'react';

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'hello',
    };
    // binding in the constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: 'good bye',
  //     });
  //     console.log(this);
  //   }

  // 4th approch to bind
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!',
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* // binding render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* binding arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
