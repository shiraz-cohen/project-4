import React, { Component } from "react";
import { keyBoard } from "./KeyBoard";

class OurEditor extends Component {
  constructor(props) {
    this.state = {
      currentText: "",
      lastText: "",
    };
  }
  state = {
    currentText: "",
    lastText: "",
  };
  render() {
    return (
      <React.Fragment>
        <keyBoard />
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

export default OurEditor;
