import React, { PureComponent } from 'react';

class PureCompo extends PureComponent {
  render() {
    console.log('pure compo render *****');
    return <div>Pure Components {this.props.name}</div>;
  }
}

export default PureCompo;
