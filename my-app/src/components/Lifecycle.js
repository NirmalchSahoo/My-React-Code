import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Josh',
    };
    console.log('lifecycle A constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle A getderived method from props');
    return null;
  }
  componentDidMount() {
    console.log('lifecycle A didmount ');
  }
  render() {
    console.log('lifecycle A rendor ');
    return (
      <div>
        <h1>lifecycle of component A</h1>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default Lifecycle;
