import React, { Component } from 'react';

class User extends Component {
  render() {
    return <div>{this.props.render(true)}</div>; // rename the the prop as render
    // return <div>{this.props.name(true)}</div>; // function as prop
    // return <div>{this.props.name()}</div>; // function as prop
    // <div>{this.props.name}</div>; // string as prop
  }
}

export default User;
