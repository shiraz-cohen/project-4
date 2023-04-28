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
    listText: [], //  arrat of objects with the properties: char, size, color, isBold , font
    sizeText: "14px",
    colorText: "black",
    weightsFont: "normal",
    familyFont: `"Times New Roman", Times, serif`,
    isHebLettersVisible: true,
    isEngUpperVisible: false,
    isEngLowerVisible: false,
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "center",
            marginTop: "50px",
            textAlign: "center",
            borderBottom: "5px solid red",
          }}
        >
          {this.state.listText.map((item, index) => (
            <span
              key={index}
              dir="rtl"
              style={{
                fontSize: item.size,
                color: item.color,
                fontWeight: item.isBold,
                fontFamily: item.font,
              }}
            >
              {item.char}
            </span>
          ))}
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
            this.addToTextItem("Delate");
          }}
        >
          Delate Last
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
        <select
          name="colorT"
          id="colorT"
          onChange={(event) => this.changeTextColor(event)}
        >
          <option value="" selected disabled>
            ---- Choose a text color ----
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
            Green
          </option>
          <option value="Pink" style={{ color: "Pink" }}>
            Green
          </option>
        </select>
        {/* 
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
        </button> */}
        <button
          type="button"
          onClick={() => {
            this.addToTextItem("Bold");
          }}
          style={{ color: "Black", fontWeight: "bold" }}
        >
          Bold
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
        {/* Special buttons */}
        <p> Special: </p>
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
        <label htmlFor="font">Choose a font:</label>
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
      </React.Fragment>
    );
  }

  //
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
      default: //color changing
        this.setState({ fontFamily: `"Times New Roman", Times, serif` });
        break;
    }
  };

  // the function changing for the requesetd color
  changeTextColor = (event) => {
    this.setState({ colorText: event.target.value });
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
    let listT;
    switch (someAction) {
      case "Undo Last": // return to default settings
        listT = [...this.state.listText];
        listT[listT.length - 1].size = "14px"; // sizeText= "14px"
        listT[listT.length - 1].color = "black"; // colorText= "black"
        listT[listT.length - 1].isBold = "normal";
        listT[listT.length - 1].font = `"Times New Roman", Times, serif`;
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
      case "normal": //make the charcter unbolded
        this.setState({ weightsFont: someAction });
        break;
      default: // a letter or space to add
        listT = [...this.state.listText];
        listT.push({
          char: someAction,
          size: this.state.sizeText,
          color: this.state.colorText,
          isBold: this.state.weightsFont,
          font: this.state.fontFamily,
        });
        this.setState({ listText: listT });
        break;
    }
  };
}
