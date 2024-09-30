import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Josh',
    };
    console.log('lifecycle B constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle B getderived method from props');
    return null;
  }
  componentDidMount() {
    console.log('lifecycle B didmount ');
  }
  render() {
    console.log('lifecycle B rendor ');
    return (
      <div>
        <h1>lifecycle of component B</h1>
      </div>
    );
  }
}

export default LifecycleB;
