import React, { Component } from "react";
import "./ourEditor.css";

export default class NumbersKeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        "~",
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="keyboard-button" id="numbers-button">
          {this.state.numbers.map((v, i) => (
            <button
              type="button"
              key={`${i}-numbers-keyboard`}
              className="..."
              onClick={() => {
                this.props.addToTextItem(v);
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
