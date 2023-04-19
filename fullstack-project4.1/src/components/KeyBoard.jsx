import React, { Component } from "react";

export class KeyBoard extends Component {
  state = {
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
    ],
    englishLettersUpper: [
      "A",
      "B",
      "C",
      "D",
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
    ],
    englishLettersLower: [
      "a",
      "b",
      "c",
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
    ],
    textBeforChange: "",
    text: "שלום,",
    sizeText: "14px",
    colorText: "black",
    isHebLettersVisible: true,
    isEngUpperVisible: false,
    isEngLowerVisible: false,
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <p
            dir="rtl"
            style={{
              display: "center",
              marginTop: "50px",
              textAlign: "center",
              borderBottom: "5px solid red",
              fontSize: this.state.sizeText,
            }}
          >
            {this.state.text}
          </p>
        </div>
        <p>keyboard:</p>
        {/* Hebrew keyboard */}
        <div className="..." dir="rtl">
          {this.state.isHebLettersVisible &&
            this.state.hebrewLetters.map((v, i) => (
              <button
                type="button"
                key={`${i}-hebrew-keyboard`}
                className="..."
                onClick={() => {
                  this.addToTextItem(v);
                }}
              >
                {v}
              </button>
            ))}
        </div>
        {/* English Lower Letters keyboard */}
        <div className="...">
          {this.state.isEngLowerVisible &&
            this.state.englishLettersLower.map((v, i) => (
              <button
                type="button"
                key={`${i}-EngLower-keyboard`}
                className="..."
                onClick={() => {
                  this.addToTextItem(v);
                }}
              >
                {v}
              </button>
            ))}
        </div>
        {/* English Uper Letters keyboard */}
        <div className="...">
          {this.state.isEngUpperVisible &&
            this.state.englishLettersUpper.map((v, i) => (
              <button
                type="button"
                key={`${i}-EngUpper-keyboard`}
                className="..."
                onClick={() => {
                  this.addToTextItem(v);
                }}
              >
                {v}
              </button>
            ))}
        </div>
        {/* SPACE button */}
        <button
          type="button"
          onClick={() => {
            this.addToTextItem(" ");
          }}
        >
          SPACE
        </button>
        {/*  Undo Last button */}
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Undo Last");
          }}
        >
          Undo Last
        </button>
        {/* Delate Text button */}
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Delate Text");
          }}
        >
          Delate Text
        </button>
        <br></br>
        {/* Change Lanuage */}
        <p>Lanuage:</p>
        <button
          type="button"
          onClick={() => {
            this.toggleButton("englishLettersLower");
          }}
        >
          English Lower Case
        </button>
        <button
          type="button"
          onClick={() => {
            this.toggleButton("englishLettersUpper");
          }}
        >
          English Upper Case
        </button>
        <button
          type="button"
          onClick={() => {
            this.toggleButton("hebrewLetters");
          }}
        >
          עברית
        </button>
        {/* Change font size*/}
        <p> Font size: </p>
        <button
          type="button"
          onClick={() => {
            this.changeFontSize("12");
          }}
        >
          12
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeFontSize("14");
          }}
        >
          14
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeFontSize("18");
          }}
        >
          18
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeFontSize("24");
          }}
        >
          24
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeFontSize("36");
          }}
        >
          36
        </button>
        {/* Change text color */}
        <p> Color of the text: </p>
        <button
          type="button"
          onClick={() => {
            this.changeTextColor("Black");
          }}
          style={{ color: "Black" }}
        >
          Black
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeTextColor("Red");
          }}
          style={{ color: "Red" }}
        >
          Red
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeTextColor("Green");
          }}
          style={{ color: "Green" }}
        >
          Green
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeTextColor("Blue");
          }}
          style={{ color: "Blue" }}
        >
          Blue
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeTextColor("Pink");
          }}
          style={{ color: "Pink" }}
        >
          Pink
        </button>
      </React.Fragment>
    );
  }

  // the function changing for the requesetd color
  changeTextColor = (requesetdColor) => {
    this.setState({ colorText: requesetdColor });
  };

  // the function changing for the requesetd language
  changeFontSize = (fontSize) => {
    fontSize = fontSize + "px";
    this.setState({ sizeText: fontSize });
  };

  // the function switching for the requesetd language
  toggleButton = (someAction) => {
    switch (someAction) {
      case "hebrewLetters":
        this.setState({ isHebLettersVisible: true });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: false });
        break;
      case "englishLettersUpper":
        this.setState({ isHebLettersVisible: false });
        this.setState({ isEngUpperVisible: true });
        this.setState({ isEngLowerVisible: false });
        break;
      case "englishLettersLower":
        this.setState({ isHebLettersVisible: false });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: true });
        break;
      default:
        this.setState({ isHebLettersVisible: true });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: false });
        break;
    }
  };

  // the function add the press char into text
  addToTextItem = (someAction) => {
    switch (someAction) {
      case "Undo Last":
        this.setState({ text: this.state.textBeforChange });
        break;
      case "Delate Text":
        this.setState({ textBeforChange: "" });
        this.setState({ text: "" });
        break;
      default: // a letter or space to add
        this.setState({ textBeforChange: this.state.text });
        let tempText = this.state.text + someAction;
        this.setState({ text: tempText });
        break;
    }
  };
}
