import React from 'react';
import Cuestionario from './Anatomia'
export default class Cuestionarios extends React.Component{
  state={
    showan: false,
    showpe:false
  };
  mostrarAnatomia=()=>{
    const Sa= this.state.showan;
    this.setState({showan:!Sa});
  }
  mostrarPediatria=()=>{

  }
  render(){
    return(
      <div className="container">
      <h1>Cuestionarios</h1>
      <button onClick={this.mostrarAnatomia}>Anatomia</button><br/>
      <button onClick={this.mostrarPediatria}>Pediatria</button><br/>
      {this.state.showan &&(<div> <Cuestionario/></div>)}
      </div>
    ); }
}
