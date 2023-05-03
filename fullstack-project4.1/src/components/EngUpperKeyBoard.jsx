import React, { Component } from "react";
import "./ourEditor.css";

export default class EngUpperKeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      englishLettersUpper: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        ",",
        ".",
        "/",
        "@",
        `"`,
        "?",
        "!",
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="keyboard-button">
          {this.state.englishLettersUpper.map((v, i) => (
            <button
              type="button"
              key={`${i}-EngUpper-keyboard`}
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
