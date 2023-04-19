import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name ,
            number: Math.floor(Math.random() * (99)),
            active: true,
            steps:0,
            score:[]
    
    
          }
          this.changeNum = this.changeNum.bind(this);
          
    }
   
    

     
    render() { 
        return (
            <React.Fragment>
                <button>התחל משחק</button>
                <p>Gamer:{this.state.name}</p>
                <p>Number:{this.state.number}</p>
                <p>Steps:{this.state.steps}</p>
                <p>Score:{this.state.score}</p>
                
        <button type="button" onClick={this.changeNum.bind(this, "+1")}>+1</button>
        <button type="button" onClick={this.changeNum.bind(this, "-1")}>-1</button>
        <button type="button" onClick={this.changeNum.bind(this, "*2")}>*2</button>
        <button type="button" onClick={this.changeNum.bind(this, "/2")}>/2</button>


               
            </React.Fragment>
        );
    }
    /*RandomNumber = () => {
        return Math.floor(Math.random() * (99));
      };*/
    

      changeNum = (s) => {
        let temp=this.state.number;
        let count=this.state.steps;
        
        
        switch(s){
            case "-1":
                temp=temp-1;
                break;
        
            case "+1": 
                temp=temp+1;
                break;
            
            case "*2": 
                temp=temp*2;
                break;
            case "/2": 
                temp=temp/2;
                break;
            default:
                break;
        }
        temp=Math.floor(temp);


        this.setState({number: temp});
        let ste=this.setState({steps: count+1});
        this.StepsToWin(temp,ste);
      };

      StepsToWin = (num,s) =>{
        let count=this.state.steps;
        if(num == 100) {
            alert(`${this.state.name} are the winner`);
            this.setState({score:this.state.score.push(s)});
            

        
      }
    }

      
        
    /*ActiveGame(){
        const { active }= this.state.active;
        return active===true?"your turn": "it's not your turn";
    }*/



     /*MyForm() {
        const [name, setName] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`);
        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        )
      }*/
}
 
export default Player ;