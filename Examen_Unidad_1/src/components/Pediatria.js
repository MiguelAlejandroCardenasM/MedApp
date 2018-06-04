import React from 'react';
import ProgressBar from './ProgressB';

export default class CuestionarioP extends React.Component{
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
    this.pediatria();
  }
  //cambia el estado (nombre de la pregunta)
  pediatria=()=>{
    const contador=this.state.nump;
    const conp=this.state.progreso;
    if(contador==0){
      this.setState(()=>({pregunta:'El periodo fetal de gestación en que se encuentra ya formados los alvéolos pulmonares y ha comenzado la producción del factor surfactante es:'}));
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) 20 y 24 semanas ','b) 9 y 10 semanas','c) 12 y 14 semanas','d) 15 y 16 semanas','e) Menos de 8 semanas']}));
      this.maspb();
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});

    }
    else if(contador==1){
      this.setState(()=>({pregunta:'La insuficiencia respiratoria en el niño se caracteriza por:'}));
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) Una enfermedad metabólica','b) Presentar disnea','c) Por presentar disminución del uso de la musculatura accesoria','d)  Presentar espiración y frecuencia respiratoria normales','e) Presentar respiración rápida o taquipnea']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==2){
      this.setState(()=>({pregunta:'En un niño que presenta enfermedad diarreica aguda y vómito, con deshidratación leve el manejo adecuado es:'}));
      this.setState(()=>({respuesta:'e'}));
      this.setState(()=>({opcionesp:['a) Indicarle a la madre iniciar su alimentación y vigilar las deposiciones','b) Iniciar antibiótico y alimentación','c) Dejar al niño sin fórmula e indicarle a la madre que le de suero oral sólo si vomita.','d) Se le indica a la madre que el niño permanecerá en el centro y se leiniciará rehidratación oral con suero a 50ml/kg de solución de rehidrataciónoral en 4 horas','e) Dar líquidos claros y egresar al centro de salud al día siguiente']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==3){
      this.setState(()=>({pregunta:' las siguientes estructuras atraviesan la fisura orbitario'}));
      this.setState(()=>({respuesta:'e'}));
      this.setState(()=>({opcionesp:['a) Nervio oculomotor','b) Nervio abducens','c) Nervio troclear','d) Solamente pasan A y C','e) Todos son verdaderos']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();

    }
    else if(contador==4){
      this.setState(()=>({pregunta:'El las apófisis geny se insertan los siguientes músculos'}));
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) Genipalatino y geniogloso','b) Geniogloso y genitiroideo','c) Genihiodeo y geniogloso','d) Genihioideo y milohioideo','e) Geniogloso y digastrico']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==5){
      this.setState(()=>({pregunta:'Son características del musculo prócer los siguientes excepto'}));
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) Llamado musculo piramidal de la nariz','b) Una de sus inserciones termina en la cara profunda de la piel','c) Es antagonista de la porción medial del musculo superciliar','d) Tracciona inferiormente la piel del espacio interciliar','e) Esta inervado por el nervio facial']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==6){
      this.setState(()=>({pregunta:'Sobre el musculo canino uno es incorrectos'}));
      this.setState(()=>({respuesta:'a'}));
      this.setState(()=>({opcionesp:['a) Eleva la comisura y el labio superior','b) Se inserta en la fosa canina','c) Esta inervado por el nervio facial','d) Es elevador del Angulo de la boca','e) Forma parte de los musculos de la boca']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==7){
      this.setState(()=>({pregunta:'uno de los siguientes no es parte del hueso occipital'}));
      this.setState(()=>({respuesta:'d'}));
      this.setState(()=>({opcionesp:['a) Cresta occipital externa','b) Línea nucal inferior ','c) Apófisis yugular','d) Eminencia arqueada','e) Cresta sinostosica ']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }

    else if(contador==8){
      this.setState(()=>({pregunta:'los músculos de la mímica de la alegría son excepto'}));
      this.setState(()=>({respuesta:'d'}));
      this.setState(()=>({opcionesp:['a) Musculo Elevador del labio superior','b) Musculo risorio','c) Musculo cigomatico mayor','d) Musculo elevador del angulo de la boca','e) Musculo orbicular de los labios']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==9){
      this.setState(()=>({pregunta:'10.- El musculo largo del cuello se inserta inferiormente en:'}));
      this.setState(()=>({respuesta:'e'}));
      this.setState(()=>({opcionesp:['a) Las tres primeras vertebras torácicas','b) Tres últimas vértebras cervicales','c) Tubérculos anteriores de la cuarta, quinta y sexta vertebra cervical ','d) Solo A y B','e) Todas']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador>=9){
      const end= this.state.inicio;
      this.setState(()=>({pregunta:'El Cuestionario ha concluido'}));
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
    this.pediatria();
    }
    else{
      this.pediatria();
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
