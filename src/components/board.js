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

  allowedMoves(point) {

  }

  checkerNumber(point) {
    if (!this.checkerColor(point)) {
      return 0;
    }
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

  renderWhitePoints(half) {
    return _.range(1 + half*6,7 + half*6).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
          onClick={()=> {this.initiateMoveFromPoint(e)}}
          key={e} />
      );
    });
  }

  renderBlackPoints(half) {
    return _.rangeRight(13+half*6,19+half*6).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
          onClick={()=> {this.initiateMoveFromPoint(e)}}
          key={e} />
      );
    });
  }

  render() {
    return (
      <div>
        <div style={{ display: "inline-block", width: "500px" }} >
          {this.renderWhitePoints(0)}
          {this.renderWhitePoints(1)}
        </div>
        <div style={{ display: "inline-block", width: "500px" }} >
          {this.renderBlackPoints(1)}
          {this.renderBlackPoints(0)}
        </div>
      </div>
    );
  }
}
