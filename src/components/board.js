import _ from 'lodash';
import React, { Component } from 'react';
import Point from './point';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.gamestate;
  }

  checkerColor(point) {
    if (this.state['white'][point] > 0) {
      return 'white';
    } else if (this.state['black'][point] > 0) {
      return 'black';
    } else {
      return;
    }
  }

  checkerNumber(point) {
    return this.state[this.checkerColor(point)][point];
  }

  initiateMoveFromPoint(point) {
    if (!this.checkerColor(point)) {
      return;
    }
    var prevArrangement = this.state[this.checkerColor(point)].slice();
    prevArrangement[point] -= 1;
    prevArrangement[point + 1] += 1;
    this.setState((prevState, props) => {
      return { ...prevState, [this.checkerColor(point)]: prevArrangement };
    });
  }

  render() {
    var white_points = _.range(1,13).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
          onClick={()=> {this.handlePointClick(e)}}
          key={e} />
      );
    });

    var black_points = _.rangeRight(13,25).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
          onClick={()=> {this.initiateMoveFromPoint(e)}}
          key={e} />
      );
    });

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", width: "480px" }} >
          {white_points}
          {black_points}
        </div>
      </div>
    );
  }
}
