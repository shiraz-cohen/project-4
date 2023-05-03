import React, { Component } from "react";
import "./ourEditor.css";

export default class HebKeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hebrewLetters: [
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ז",
        "ח",
        "ט",
        "י",
        "כ",
        "ל",
        "מ",
        "נ",
        "ס",
        "ע",
        "פ",
        "צ",
        "ק",
        "ר",
        "ש",
        "ת",
        "ך",
        "ם",
        "ן",
        "ץ",
        "ף",
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
        <div className="keyboard-button" dir="rtl">
          {this.state.hebrewLetters.map((v, i) => (
            <button
              type="button"
              key={`${i}-hebrew-keyboard`}
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
