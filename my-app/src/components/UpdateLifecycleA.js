import React, { Component } from 'react';
import UpdateLifecycleB from './UpdateLifecycleB';

class UpdateLifecycleA extends Component {
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
  shouldComponentUpdate() {
    console.log('should component update lifecycle A');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getsnapshotupdate lifecycle A');
    return null;
  }
  componentDidUpdate() {
    console.log('componentgetupdate lifecycle A');
  }
  componentDidMount() {
    console.log('lifecycle A didmount ');
  }
  changeState = () => {
    this.setState({
      name: 'Brad evo',
    });
  };
  render() {
    console.log('lifecycle A rendor ');
    return (
      <div>
        <h1>lifecycle update method of component A</h1>
        <button onClick={this.changeState}>Change state</button>
        <UpdateLifecycleB></UpdateLifecycleB>
      </div>
    );
  }
}

export default UpdateLifecycleA;
