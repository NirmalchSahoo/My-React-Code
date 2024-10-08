import React, { Component } from 'react';

class IntervalCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        {console.log(this.state.count)}

        <h1> Class Counter {this.state.count}</h1>
      </div>
    );
  }
}

export default IntervalCounter;
