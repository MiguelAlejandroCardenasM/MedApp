import React from 'react';
import Cuestionario from './Anatomia';
import img from '../styles/components/fondo.png';
import Header from './Header';
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
    const title="MedApp";
    const subtitle="Cuestionarios"
    return(
      <div>
        <div className="sidenav">
          <h1>Cuestionarios</h1>
          <button className="button" onClick={this.mostrarAnatomia}>Anatomia</button><br/>
          <button className="button" onClick={this.mostrarPediatria}>Pediatria</button><br/>
          </div>
          <div className="container">
          <Header/>
          <img src={img} className="img"/>
          <div className="topleft">
          <h1> hola</h1>
          {this.state.showan &&(<div> <Cuestionario/></div>)}
          </div>
          </div>
      </div>
    ); }
}
