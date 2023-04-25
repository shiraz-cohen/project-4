import React, { Component } from 'react';
import './player.css';
//import StartGame from './startGame';

class Player extends Component {
  constructor(props){
    super(props);
        // הגדרת המצבים של השחקן בכל רגע נתון במשחק
        this.state = {
          pid: this.props.index,
          number: this.getRandomNumber(),
          steps: 0,
          score: [],
          message: "",
          startGa: false,
          finish: false,
        };
      }
    
      // פונקציה שמחזירה מספר רנדומלי בין 1 ל-99
      getRandomNumber = () => {
        return Math.floor(Math.random() * (99)) + 1;
      };
    
      // פונקציה שמשמשת לטובת הצגת השחקן בדף המשחק
      render() {
        return (
          <React.Fragment>
            {/* הצגת ההודעות למשתמש */}
            <p>{this.state.message}</p>
    
            {/* יצירת תיבת הקלף של השחקן */}
            <div className='player'>
              <p>שחקן: {this.props.name}</p>
              <p>המספר שלי: {this.state.number}</p>
              <p>צעדים: {this.state.steps}</p>
              <p>ניקוד: {this.state.score.join(", ")}</p>
              <p className='turn'>{this.state.pid === this.props.currentTurn && <span>תורך</span>}</p>
    
              {/* יצירת כפתורי המשחק */}
              <button type="button" onClick={() => this.changeNum("+1")} disabled={this.state.number === 100}>+1</button>
              <button type="button" onClick={() => this.changeNum("-1")} disabled={this.state.number === 100}>-1</button>
              <button type="button" onClick={() => this.changeNum("*2")} disabled={this.state.number === 100}>*2</button>
              <button type="button" onClick={() => this.changeNum("/2")} disabled={this.state.number === 100}>/2</button>
    
              {/* יצירת כפתור לצאת מהמשחק ולהתחיל משחק חדש */}
              <div>{this.state.finish && <button className='finish' onClick={() => { this.fin() }}>צא מהמשחק</button>}</div>
              <div>{this.state.startGa && <button className='startGa' onClick={() => { this.again() }}>התחל משחק חדש</button>}</div>
            </div>
          </React.Fragment>
        );
      }
  again(){
    this.setState({number: this.getRandomNumber()});
    this.setState({steps: 0});
    this.setState({finish: false});
    this.setState({startGa: false});
    this.setState({message: ""});
     
  }
  fin=()=>{
    this.props.finishG(this.state.pid);
  }
  
  changeNum = (s) => {
    if (this.state.pid !== this.props.currentTurn) {
      alert("המתן לתורך");
      return;
    }
    
    let temp = this.state.number;
    let count = this.state.steps;
    

    switch(s){
      case "-1":
        temp = temp - 1;
        break;
      case "+1":
        temp = temp + 1;
        break;
      case "*2":
        temp = temp * 2;
        break;
      case "/2":
        temp = temp / 2;
        break;
      default:
        break;
    }
    temp = Math.floor(temp);
    this.setState({number: temp});
    this.setState({steps: count+1});
    this.checkForWin(temp, this.props.name);
    this.props.goToNext();
  };

  checkForWin = (num, playerName) =>{
    if(num === 100) {
      this.setState({message:(`${playerName} כל הכבוד! ניצחת`)});
      let s= [...this.state.score, this.state.steps+1];//המערך החדש של הניצחונות
      let temp= s.length;// אורך המערך שווה למספר הניצחונות של השחקן
      this.props.numOfWin(temp, this.props.name);//נקרא לפונקציה עם מס הניצחונות שלי שבודקת אם נכנסתי לשיאים
      this.setState({score: s});
      this.setState({finish: true});
      this.setState({startGa: true});
      
      
    }
  };
}

export default Player;















