import React, { Component } from 'react';

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevsProps, prevsState) {
    if (prevsState.count !== this.state.count) {
      document.title = `Clicked ${this.state.count} times`;
      console.log('updateing document title');
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {' '}
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterTwo;
