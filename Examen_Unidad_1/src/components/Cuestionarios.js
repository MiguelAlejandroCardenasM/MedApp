import React from 'react';//importa react
import CuestionarioA from './Anatomia';//importa el componente del cuestionario de Anatomia
import CuestionarioP from './Pediatria';//importa el componente del cuestionario de Pediatria
import img from '../styles/components/fondo.png';//importa una imagen
import Header from './Header';//importa el componente Header

//Exporta el componente como predefinido que a su ves hereda de React.Component
export default class Cuestionarios extends React.Component{
  //Estados es una propiedad de los componentes que permite usar funciones para cambiar estos atributos
  state={
    showan: false,
    showpe:false
  };
  //Este metodo es para la visibilidad y renderizar los cuestionarios con la condicion
  //de que solo se puede mostrar uno a la vez
  mostrarAnatomia=()=>{
    if(this.state.showpe==false){
      const Sa= this.state.showan;
      this.setState({showan:!Sa});
    }

  }
  //Misma funcion que la de mostrarAnatomia
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
          <Header title={title} subtitle={subtitle}/>
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
