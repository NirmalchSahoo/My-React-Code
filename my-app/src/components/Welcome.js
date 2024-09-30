import React, { Component } from 'react';

// using props

// class Welcome extends Component {
//   render() {
//     return (
//       <h1>
//         Class {this.props.name} a.k.a {this.props.heroName}
//       </h1>
//     );
//   }
// }

/// destructuring class component
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;

    return (
      <h1>
        Class {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
