import React, { Component } from 'react';
import Player from './player';
import './player.css';


class StartGame extends Component {
  constructor(props) {
    super(props);
  
    this.state = { 
      inputValue: '', // הערך המצוי בתיבת הטקסט המשמשת להזנת שם השחקן החדש
      listPlayer:[], // מערך השחקנים שהתחברו למשחק
      start:false, // משחק חדש אחרי שהתחלנו לשחק
      enterName:true, // ערך בוליאני המציין האם להציג את פניית המשתמש להכניס שם שחקן חדש למשחק
      inputText:true, // ערך בוליאני המציין האם להציג את תיבת הטקסט להזנת שם שחקן חדש למשחק
      enterPlayer:true, // ערך בוליאני המציין האם להציג את כפתור ההוספה של שם שחקן חדש למשחק
      startG:true,
      win:false,
      currentTurn:0,
      listScore:[{nameW:"",wins:0}, {nameW:"",wins:0}, {nameW:"",wins:0}]
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.turnOn = this.turnOn.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.finishG = this.finishG.bind(this);
    this.numOfWin = this.numOfWin.bind(this);
  }
  
  handleInputChange(event) {// פונקציה המתאימה לאירוע השינוי של ערך ה- input
    this.setState({ inputValue: event.target.value });
  }

  addPlayer(name) {//פונקציה המוסיפה שחקן לרשימת השחקנים
    const listPlayer = [...this.state.listPlayer, name];
    this.setState({ listPlayer, inputValue: '' });
  }

  turnOn() { //פונקציה המפעילה את המשחק עם רשימת השחקנים שנוצרה
    this.setState({ 
      start: true,
      enterName: false,
      inputText: false,
      enterPlayer: false,
      startG: false,
      currentTurn: 0,
      win:true,
    });
  }

  goToNext() {//פונקציה זו מעדכנת את התור הנוכחי לפי רשימת השחקנים הקיימים במשחק
    const next = (this.state.currentTurn + 1) % this.state.listPlayer.length;
    this.setState({ currentTurn: next });
  }

  numOfWin(number, name) {// פונקציה זו מעדכנת את הטבלת השיאים עם ניצחונות חדשים עבור שחקן מסוים אם הם יותר גבוהים מהכיוון הקיים שלו בטבלה. אם השחקן לא נמצא בטבלה, הפונקציה תוסיף אותו כשחקן חדש ותמיין את הטבלה על פי מספר הניצחונות
    const { listScore } = this.state;
    let newScore = [...listScore];
    let addedPlayer = false;
  
    // בודק אם השחקן כבר קיים ברשימת התוצאות
    newScore.forEach((player, index) => {
      if (player.nameW === name) {
        if (number > player.wins) {
          newScore[index] = { nameW: name, wins: number };
        }
        addedPlayer = true;
      }
    });
  
    // אם השחקן לא נמצא תוסיף אותו לרשימה
    if (!addedPlayer) {
      newScore.push({ nameW: name, wins: number });
    }
  
    // מיין את הרשימה  לפי מספר הניצחונות מהגבוה לנמוך
    newScore.sort((a, b) => b.wins - a.wins);
  
    
    this.setState({ listScore: newScore.slice(0, 3) });
  }
  
 

  finishG(index) {//פונקציה זו מסירה שחקן מהרשימה של השחקנים במשחק על פי האינדקס שקיבלה
    const listPlayer = [...this.state.listPlayer];
    listPlayer.splice(index, 1);
    this.setState({ listPlayer });
  }
  
  render() {
    return (
      <div>
        <div>{this.state.enterName && <p className='enterName'>הכנס שם שחקן</p>}</div>
        <div>{this.state.inputText && <p className='inputText'><input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /></p>}</div>
          
        <div>{this.state.enterPlayer && <button className='enterPlayer' onClick={() => this.addPlayer(this.state.inputValue)}>הוסף שחקן</button>}</div>
        <div>{this.state.startG && <button className='startG' onClick={() => this.turnOn()}>התחל משחק</button>}</div> 

        <div>
          <div className='TableOFRecord'>{this.state.win && <p className='win'>טבלת שיאים</p> }</div>
          {this.state.listScore.map((item, index) => (
          item.wins > 0 && <span key={index}> |{item.nameW}: {item.wins}| </span>
          ))}
        </div>
        
        <div className="...">
          {this.state.start &&
            this.state.listPlayer.map((v,i) => (
              <Player 
                key={i} 
                name={v}
                currentTurn={this.state.currentTurn} 
                index={i} 
                goToNext={this.goToNext}
                finishG={this.finishG}
                numOfWin={this.numOfWin}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default StartGame;