import React, { Component } from 'react';
import RegularCompo from './RegularCompo';
import PureCompo from './PureCompo';
import MemoCompo from './MemoCompo';

class ParentCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Joe',
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Joe',
      });
    }, 2000);
  }

  render() {
    console.log('************************* parent compo render ***********');
    return (
      <div>
        Parent Component
        {/* <RegularCompo name={this.state.name}></RegularCompo>
        <PureCompo name={this.state.name}></PureCompo> */}
        <MemoCompo name={this.state.name}></MemoCompo>
      </div>
    );
  }
}

export default ParentCompo;
