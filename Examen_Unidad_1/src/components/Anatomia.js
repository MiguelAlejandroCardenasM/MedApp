import React from 'react';
import ProgressBar from './ProgressB';

export default class Cuestionario extends React.Component{
  state={
    ocultar:true,
    inicio:false,
    pregunta:'Comenzar',
    respuesta:'',
    opcionesp:[,],
    compararr:'',
    nump:0,
    ga:0,
    ba:0,
    progreso:0
  };
  //Muestra el inicio del Cuestionario
  iniciar=()=>{
    const start= this.state.inicio;
    const oc=this.state.ocultar;
    this.setState({inicio:!start});
    this.setState({ocultar:!oc})
    this.anatomia();
  }
  //cambia el estado (nombre de la pregunta)
  anatomia=()=>{
    const contador=this.state.nump;
    const conp=this.state.progreso;
    if(contador==0){
      this.setState(()=>({pregunta:'El arco cigomático está conformado por la articulación de:'}));
      this.setState(()=>({respuesta:'Elsa'}));
      this.setState(()=>({opcionesp:['a) Hueso Vómer y temporal','Hans','Christhoper','Michelle']}));
      this.maspb();
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});

    }
    else if(contador==1){
      this.setState(()=>({pregunta:'¿Quien le pega al Chavo?'}));
      this.setState(()=>({respuesta:'Quico'}));
      this.setState(()=>({opcionesp:['Quico','Chilindrina','Don Ramon','Profesor Jirafales']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==2){
      this.setState(()=>({pregunta:'¿Quien hizo llorar al cerdito George?'}));
      this.setState(()=>({respuesta:'Peppa'}));
      this.setState(()=>({opcionesp:['Mama Cerdita','Papa Cerdito','Peppa']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==3){
      this.setState(()=>({pregunta:'¿Quien era el mejor amigo del perrito Toby?'}));
      this.setState(()=>({respuesta:'Sabueso'}));
      this.setState(()=>({opcionesp:['La señora Vaca','Sabueso','Señora Buho','Michelle']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();

    }
    else if(contador==4){
      this.setState(()=>({pregunta:'¿Quien se comio una manzana envenenada?'}));
      this.setState(()=>({respuesta:'Blanca Nieves'}));
      this.setState(()=>({opcionesp:['Cenicienta','Rapunzel','Blanca Nieves','Michelle']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==5){
      this.setState(()=>({pregunta:'¿Quien es una doctora muy buena y atiende a sus juguetes?'}));
      this.setState(()=>({respuesta:'La doctora juguetes'}));
      this.setState(()=>({opcionesp:['La doctora juguetes','La doctora sandra','La abuela','Michelle']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==6){
      this.setState(()=>({pregunta:'¿Cual es la comida favorita de Garfield?'}));
      this.setState(()=>({respuesta:'Lasaña'}));
      this.setState(()=>({opcionesp:['Lasaña','Pizza','Albondigas','Tacos de Pescado']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==7){
      this.setState(()=>({pregunta:'¿Es una gatita muy bonita?'}));
      this.setState(()=>({respuesta:'Hello Kitty'}));
      this.setState(()=>({opcionesp:['El gato con botas','La gatita alegre','Hello Kitty']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==8){
      this.setState(()=>({pregunta:'Es una vaquera que ayuda a sus amigos'}));
      this.setState(()=>({respuesta:'Sheriff Callie'}));
      this.setState(()=>({opcionesp:['La guardiana de la galaxia','Sheriff Woody','Una vaquera','Michelle']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==9){
      this.setState(()=>({pregunta:'¿Quien se acaba los Doritos?'}));
      this.setState(()=>({respuesta:'Todos'}));
      this.setState(()=>({opcionesp:['Alejandro','Miguel','Myriam','Michelle','Lizeth', 'Todos']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador>=9){
      const end= this.state.inicio;
      this.setState(()=>({pregunta:'fin'}));
      this.setState({inicio:!end});
    }

  }
  maspb=()=>{
    var elem = document.getElementById("myBar");
    var width=this.state.progreso;
    if(width==0){
      var total=width+10;
      elem.style.width=total+'%';
      elem.innerHTML=total+'%';
    }
    else {
      var total=width+10;
      elem.style.width=total+'%';
      elem.innerHTML=total+'%';
    }
  }
  //valida la respuesta correcta
  correcto = (e) => {
    e.preventDefault();
    const Counter=this.state.nump;
    const  Value=e.target.elements.answer.value;
    const  R=this.state.respuesta;
    const Ga=this.state.ga;
    if(Value==R){
    this.setState(()=>({ga:Ga+1})),
    this.anatomia();
    }
    else{
      this.anatomia();
    }
   }
   //Permite el cambio de value en el input
  cambiarR=(e)=>{
    this.setState({compararr:e.target.value})
  }
  //renderizado de el cuestionario
  render(){
    return(
      <div>
      <ProgressBar/>
      <h1>{this.state.pregunta}</h1>
      <h2>{this.state.progreso} </h2>
      {this.state.ocultar&&(<button onClick={this.iniciar}>Begin</button>)}
        {this.state.inicio &&(<div>
          <h2>Respuestas Correctas:{this.state.ga}/10</h2>
          <p>{this.state.opcionesp.map((opcionesp) => <li key={opcionesp}>{opcionesp}</li>
        )}</p>
        <form onSubmit = {this.correcto}>
              <input type = "text" name = "answer" placeholder="Enter your answer" value={this.state.compararr} onChange={this.cambiarR}/>
              <input type="submit" value="Submit"/>
        </form>
        </div>
    )}
      </div>
    );
  }
}
