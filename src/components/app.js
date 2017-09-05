import React, { Component } from 'react';
import Board from './board';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      white: [0,0,0,0,0,0,5,0,3,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,2],
      black: [0,2,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,3,0,5,0,0,0,0,0]
    };
  }

  render() {
    return (
      <Board gamestate={this.state} />
    );
  }
}
