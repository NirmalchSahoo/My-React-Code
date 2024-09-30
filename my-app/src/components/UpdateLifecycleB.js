import React, { Component } from 'react';

class UpdateLifecycleB extends Component {
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
  shouldComponentUpdate() {
    console.log('should component update lifecycle B');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getsnapshotupdate lifecycle B');
    return null;
  }
  componentDidUpdate() {
    console.log('componentgetupdate lifecycle B');
  }
  componentDidMount() {
    console.log('lifecycle B didmount ');
  }
  render() {
    console.log('lifecycle B rendor ');
    return (
      <div>
        <h1>lifecycle of UpdateLifecycle B component B</h1>
      </div>
    );
  }
}

export default UpdateLifecycleB;
