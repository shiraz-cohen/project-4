import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: "",
    },
  };
  render() {
    return (
      <React.Fragment>
        <span>{2 + 2}</span> <br></br>
        <span>{this.formatCount()}</span> <br></br>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
    //return count === 0 ? "Zero" : count;
    //return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
