import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome Nirmal</div>;

    // ---------- ternary operator
    /* return this.state.isLoggedIn ? (
      <div>Welcome Nirmal</div>
    ) : (
      <div>Welcome Guest</div>
    ); */

    // ------- elememt variable
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Nirmal</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; */
    // ---------- if else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Nirmal</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Nirmal</div>
    //     <div>Welcome Gu est</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
