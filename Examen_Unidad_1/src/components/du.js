import React from 'react';

export default class Datos extends React.Component{
  state={
    name:undefined,
    score:0,
    picture:'1'
  };
  componentDidMount1(){
    console.log('component Did Mount');
    try{
      const json = localStorage.getItem('score');
      const score = JSON.parse(json);
      if(score){
      this.setState(()=>({score}+1));
      }
    }
    catch(e){
        console.log("Error");
    }
    console.log("componentDidMount");
  }
  render(){
    return(
      <div>
      <button className="submit" onClick={this.componentDidMount1}> hola </button>
      <h3>{this.state.score}</h3>
      </div>
    );
  }
}
