import React, { Component } from "react";

export class KeyBoard extends Component {
  state = {
    hebrewLetters: ["א", "ב", "ג", "ד", "ה"],
    englishLettersUpper: ["A", "B", "c"],
    englishLettersLower: ["a", "b", "c"],
  };
  render() {
    return (
      <div className="..." dir="rtl">
        {this.state.hebrewLetters.map((v, i) => (
          <button
            key={`${i}-hebrew-keyboard`}
            className="..."
            onClick={() => this.context.addToCurrentTextItem(v)}
          >
            {v}
          </button>
        ))}
      </div>
    );
  }
}
