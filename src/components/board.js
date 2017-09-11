import _ from 'lodash';
import React, { Component } from 'react';
import Point from './point';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.gamestate;
  }

  checkerColor(point) {
    if (this.state.checkers[point] > 0) {
      return 'white';
    } else {
      return 'black';
    }
  }

  checkerNumber(point) {
    return Math.abs(this.state.checkers[point]);
  }

  handlePointClick(point) {
    var newArrangement = this.state.checkers.slice();
    var sign = Math.sign(prevArrangement[point]);
    var sign = Math.sign(prevArrangement[point]);
    newArrangement[point] -= sign*1;
    newArrangement[point + 1] += 1;
    this.setState((prevState, props) => {
      return { ...prevState, [this.checkerColor(point)]: newArrangement };
    });
  }

  render() {
    var points = _.range(1,25).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
          onClick={()=> {this.handlePointClick(e)}}
          key={e}
        />
      );
    });

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }} width="480px" >
        {points}
      </div>
    );
  }
}
