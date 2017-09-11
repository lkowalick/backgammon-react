import React, { Component } from 'react';
import Board from './board';

export const WHITE=0;
export const BLACK=0;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkers: [0,-2,0,0,0,0,5,0,3,0,0,0,-5,5,0,0,0,-3,0,-5,0,0,0,0,2],
      turn: 'white',
      dice: [5,6]
    };
  }

  render() {
    return (
      <Board gamestate={this.state} />
    );
  }
}
