import React, { Component } from "react";
import "./ourEditor.css";

export default class EngLowerKeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      englishLettersLower: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
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
          {this.state.englishLettersLower.map((v, i) => (
            <button
              type="button"
              key={`${i}-EngLower-keyboard`}
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
