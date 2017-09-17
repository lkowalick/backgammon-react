import React, { Component } from 'react';

export default class Point extends Component {
  style() {
    if (this.props.number % 2 == 0) {
      return { "fill": "white", "stroke": "black","strokeWidth": "1" }
    } else {
      return { "fill": "black" }
    }
  }

  points() {
    if (this.props.number <= 12) {
      return "0,0 40,0 20,200";
    } else {
      return "20,20 0,200, 40,200";
    }
  }

  renderCheckers() {
    var total = this.props.checkerNumber;
    if (total < 1) { return []; }

    var offset = 200/(total+1);

    return (
      _.range(this.props.checkerNumber).map((e) => {
        return (
          <circle
            cx="20"
            cy={`${(e+1)*offset}`}
            r="19"
            style={{ fill: this.props.checkerColor, stroke: 'black' }}
            key={[this.props.number,e]} />
        )
      })
    );
  }

  render() {
    return (
      <svg
        height="200"
        width="8%"
        style={{ marginTop: "10px 0" }}
        onClick={()=> this.props.onClick(this.props.number)}
      >
        <polygon points={this.points()} style={this.style()} />
        {this.renderCheckers()}
      </svg>
    );
  }
}
