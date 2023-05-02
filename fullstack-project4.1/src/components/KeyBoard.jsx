import React, { Component } from "react";
import "./keyBoard.css";

export class KeyBoard extends Component {
  state = {
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
    listText: [], //  array of objects with the properties: char, size, color, isBold , fontF , fontS , decorationTe
    directionOfText: "rtl",
    sizeText: "14px",
    colorText: "black",
    weightsFont: "normal",
    familyFont: `"Times New Roman", Times, serif`,
    styleFont: "normal",
    decorationText: "none",
    isHebLettersVisible: true,
    isEngUpperVisible: false,
    isEngLowerVisible: false,
  };

  render() {
    return (
      <React.Fragment>
        {/* writing the text */}
        <div
          id="text-place"
          dir={this.state.directionOfText}
          style={{
            display: "center",
          }}
        >
          {this.state.listText.map((item, index) => (
            <span
              key={index}
              dir={this.state.directionOfText}
              style={{
                fontSize: item.size,
                color: item.color,
                fontWeight: item.isBold,
                fontFamily: item.fontF,
                fontStyle: item.fontS,
                textDecoration: item.decorationTe,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>
        {/* line border to the text */}
        <hr id="line-border"></hr>
        {/*<label htmlFor="font">Choose a font:</label> */}
        <select
          name="font"
          id="font"
          onChange={(event) => this.changeTextFont(event)}
        >
          <option value="" selected disabled>
            ---- Choose a font ----
          </option>
          <option value="1">"Times New Roman", Times, serif</option>
          <option value="2">Arial, Helvetica, sans-serif</option>
          <option value="3">"Lucida Console", "Courier New", monospace</option>
        </select>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Bold");
          }}
          style={{
            color: "Black",
            fontWeight: "bold",
            fontSize: "16px",
            fontFamily: `"Times New Roman", Times, serif`,
          }}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("italic");
          }}
          style={{
            color: "Black",
            fontStyle: "italic",
            fontFamily: `"Times New Roman", Times, serif`,
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("underline");
          }}
          style={{
            color: "Black",
            fontFamily: `"Times New Roman", Times, serif`,
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "underline black",
          }}
        >
          U
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("line-through");
          }}
          style={{
            color: "Black",
            fontFamily: `"Times New Roman", Times, serif`,
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "line-through black 1.5px",
          }}
        >
          S
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("normal");
          }}
          style={{ color: "Black" }}
        >
          normal
        </button>
        {/* Change font size*/}
        {/*<p> Font size: </p>*/}
        <select
          name="sizeT"
          id="sizeT"
          onChange={(event) => this.changeFontSize(event)}
        >
          <option value="" selected disabled>
            Size
          </option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        {/* Change text color */}
        {/*<p> Color of the text: </p> */}
        <select
          name="colorT"
          id="colorT"
          onChange={(event) => this.changeTextColor(event)}
        >
          <option value="" selected disabled>
            Color
          </option>
          <option value="Black" style={{ color: "Black" }}>
            Black
          </option>
          <option value="Red" style={{ color: "Red" }}>
            Red
          </option>
          <option value="Green" style={{ color: "Green" }}>
            Green
          </option>
          <option value="Blue" style={{ color: "Blue" }}>
            Blue
          </option>
          <option value="Pink" style={{ color: "Pink" }}>
            Pink
          </option>
        </select>
        {/* Special buttons */}
        {/*<p> Special: </p> */}
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Clear all");
          }}
        >
          Clear all
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Upper all");
          }}
        >
          Upper all
        </button>
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Lower all");
          }}
        >
          Lower all
        </button>
        {/* END OF redesign place in the page*/}
        {/* <p>keyboard:</p> */}
        {/* Numbers keyBord */}
        <div className="keyboard-button" id="numbers-button">
          {this.state.numbers.map((v, i) => (
            <button
              type="button"
              key={`${i}-numbers-keyboard`}
              className="..."
              onClick={() => {
                this.addToTextItem(v);
              }}
            >
              {v}
            </button>
          ))}
        </div>
        {/* Hebrew keyboard */}
        <div className="keyboard-button" dir="rtl">
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
        <div className="keyboard-button">
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
        <div className="keyboard-button">
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
          id="space"
          type="button"
          onClick={() => {
            this.addToTextItem(" ");
          }}
        >
          SPACE
        </button>
        {/*  Undo Last button */}
        <button
          id="undoAndDelate"
          type="button"
          onClick={() => {
            this.addToTextItem("Undo Last");
          }}
        >
          Undo Last
        </button>
        {/* Delate Text button */}
        <button
          id="undoAndDelate"
          type="button"
          onClick={() => {
            this.addToTextItem("Delate");
          }}
        >
          Delate Last
        </button>
        <br></br>
        {/* Change Lanuage */}
        {/*<p>Lanuage:</p> */}
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
      </React.Fragment>
    );
  }

  //  the function changing for the requesetd font for the next text that will be written
  changeTextFont = (event) => {
    switch (event.target.value) {
      case "1": //make the charcter bold
        this.setState({ fontFamily: `"Times New Roman", Times, serif` });
        break;
      case "2": //make the charcter unbolded
        this.setState({ fontFamily: `Arial, Helvetica, sans-serif` });
        break;
      case "3": //make the charcter unbolded
        this.setState({
          fontFamily: `"Lucida Console", "Courier New", monospace`,
        });
        break;
      default:
        this.setState({ fontFamily: `"Times New Roman", Times, serif` });
        break;
    }
  };

  // the function changing for the requesetd color for the next text that will be written
  changeTextColor = (event) => {
    this.setState({ colorText: event.target.value });
  };

  // the function changing for the requesetd font size for the next text that will be written
  changeFontSize = (event) => {
    let choosenfontSize = event.target.value + "px";
    this.setState({ sizeText: choosenfontSize });
  };

  // the function switching for the requesetd language
  toggleButton = (someAction) => {
    switch (someAction) {
      case "hebrewLetters":
        this.setState({ isHebLettersVisible: true });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: false });
        this.setState({ directionOfText: "rtl" });
        break;
      case "englishLettersUpper":
        this.setState({ isHebLettersVisible: false });
        this.setState({ isEngUpperVisible: true });
        this.setState({ isEngLowerVisible: false });
        this.setState({ directionOfText: "ltr" });
        break;
      case "englishLettersLower":
        this.setState({ isHebLettersVisible: false });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: true });
        this.setState({ directionOfText: "ltr" });
        break;
      default: //defulat state is Hebrew keyBoard
        this.setState({ isHebLettersVisible: true });
        this.setState({ isEngUpperVisible: false });
        this.setState({ isEngLowerVisible: false });
        break;
    }
  };

  // the function add the press char into text
  addToTextItem = (someAction) => {
    let listT, decAndColor;
    switch (someAction) {
      case "Undo Last": // return to default settings
        listT = [...this.state.listText];
        listT[listT.length - 1].size = "14px"; // sizeText= "14px"
        listT[listT.length - 1].color = "black"; // colorText= "black"
        listT[listT.length - 1].isBold = "normal";
        listT[listT.length - 1].fontF = `"Times New Roman", Times, serif`;
        listT[listT.length - 1].fontS = "normal";
        listT[listT.length - 1].decorationTe = "none";
        this.setState({ listText: listT });
        break;
      case "Delate": // delete the last charcacter
        listT = [...this.state.listText];
        listT.pop();
        this.setState({ listText: listT });
        break;
      case "Clear all": // delete all the text
        this.setState({ listText: [{}] });
        break;
      case "Upper all": // Upper all the text
        listT = this.state.listText;
        for (let i = 0; i < listT.length; i++) {
          listT[i].char = listT[i].char.toUpperCase();
        }
        this.setState({ listText: listT });
        break;
      case "Lower all": // Lower all the text
        listT = this.state.listText;
        for (let i = 0; i < listT.length; i++) {
          listT[i].char = listT[i].char.toLowerCase();
        }
        this.setState({ listText: listT });
        break;
      case "Bold": //make the charcter bold
        this.setState({ weightsFont: someAction });
        break;
      case "italic": //make the charcter bold
        this.setState({ fontStyle: someAction });
        break;
      case "underline": //make the charcter with an under line
        if (this.state.decorationText.includes("line-through")) {
          decAndColor =
            someAction + " " + "line-through" + " " + this.state.colorText;
        } else {
          decAndColor = someAction + " " + this.state.colorText;
        }
        this.setState({ decorationText: decAndColor });
        break;
      case "line-through": //make the charcter with an under line
        if (this.state.decorationText.includes("underline")) {
          decAndColor =
            "underline" + " " + someAction + " " + this.state.colorText;
        } else {
          decAndColor = someAction + " " + this.state.colorText;
        }
        this.setState({ decorationText: decAndColor });
        break;
      case "normal": //make the charcter unbolded
        this.setState({ weightsFont: someAction });
        this.setState({ fontStyle: someAction });
        this.setState({ decorationText: someAction });
        break;
      default: // a letter or space to add
        listT = [...this.state.listText];
        listT.push({
          char: someAction,
          size: this.state.sizeText,
          color: this.state.colorText,
          isBold: this.state.weightsFont,
          fontF: this.state.fontFamily,
          fontS: this.state.fontStyle,
          decorationTe: this.state.decorationText,
        });
        this.setState({ listText: listT });
        break;
    }
  };
}
