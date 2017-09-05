import _ from 'lodash';
import React, { Component } from 'react';
import Point from './point';

export default class Board extends Component {

  checkerColor(point) {
    if (this.props.gamestate['white'][point] > 0) {
      return 'white';
    } else {
      return 'black';
    }
  }

  checkerNumber(point) {
    return this.props.gamestate[this.checkerColor(point)][point];
  }

  render() {
    var points = _.range(1,25).map(e => {
      return (
        <Point number={e}
          checkerColor={this.checkerColor(e)}
          checkerNumber={this.checkerNumber(e)}
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
