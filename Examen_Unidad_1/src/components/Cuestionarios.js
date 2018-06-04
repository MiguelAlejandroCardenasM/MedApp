import React from 'react';
import CuestionarioA from './Anatomia';
import CuestionarioP from './Pediatria';
import img from '../styles/components/fondo.png';
import Header from './Header';
export default class Cuestionarios extends React.Component{
  state={
    showan: false,
    showpe:false
  };
  mostrarAnatomia=()=>{
    if(this.state.showpe==false){
      const Sa= this.state.showan;
      this.setState({showan:!Sa});
    }

  }

  mostrarPediatria=()=>{
    if(this.state.showan==false){
    const  Sp=this.state.showpe;
    this.setState({showpe:!Sp});
  }
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
          <h1> Cuestionario de MedApp</h1>
          {this.state.showan &&(<div> <CuestionarioA/></div>)}
          {this.state.showpe && (<div><CuestionarioP/> </div>)}
          </div>
          </div>
      </div>
    ); }
}
