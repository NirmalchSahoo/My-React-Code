import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      comments: '',
      topic: 'react',
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { userName, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            // value={this.state.value}
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
