import React from 'react';
import ProgressBar from './ProgressB';
import CModal from'./Modal';
import gif from '../styles/components/killua.gif';

export default class CuestionarioA extends React.Component{
  state={
    prize:true,
    prizes:[,],
    ocultar:true,
    inicio:false,
    pregunta:'Comenzar',
    respuesta:'',
    opcionesp:[,],
    compararr:'',
    nump:0,
    ga:0,//good answer
    ba:0,//bad answer
    progreso:0,
    mm:false
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
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) Hueso Vómer y temporal','b) Apófisis ascendente del maxilar superior con apófisis cigomática del frontal','c) Hueso malar y temporal','d) Hueso cigomático con el peñasco del hueso temporal','e) Apófisis cigomatico del hueso malar y proceso cigomático del frontal']}));
      this.maspb();
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});

    }
    else if(contador==1){
      this.setState(()=>({pregunta:'el tecmen timpani forma parte del'}));
      this.setState(()=>({respuesta:'c'}));
      this.setState(()=>({opcionesp:['a) Proceso mastoideo del hueso temporal','b) Escama del hueso temporal','c) Parte del peñasco del hueso temporal','d) Ninguno','e) todos']}));
      this.setState({progreso:conp+10});
      this.setState({nump:contador+1});
      this.maspb();
    }
    else if(contador==2){
      this.setState(()=>({pregunta:'¿Respecto al pico del esfenoides todos son ciertos EXCEPTO?'}));
      this.setState(()=>({respuesta:'e'}));
      this.setState(()=>({opcionesp:['a) Es el extremo anterior de la cresta esfenoidal inferior','b) Se encuentra en la cara inferior del cuerpo del esfenoides','c) Se continúa con la cresta esfenoidal','d) A y C son correctos ','e) todos son correctos']}));
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
      this.setState(()=>({pregunta:'Cuestionario Terminado'}));
      this.setState({inicio:!end});
      this.activarModal(contador);
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
  activarModal=(contador)=>{
    if(contador>=9){
      const Mm=this.state.mm;
      this.setState({mm:!Mm});

    }
  }
  handleClearPrize = () => {
    this.setState(() => ({prize: undefined}));
  }
  cambiarR=(e)=>{
    this.setState({compararr:e.target.value})
  }
  //renderizado de el cuestionario
  render(){
    return(
      <div>
      <ProgressBar/>
      <h1>{this.state.pregunta}</h1>
      {this.state.mm &&(<div>
        <CModal ga={this.state.ga} prize={this.state.prize} clearModal={this.handleClearPrize}
        />
        </div>
       )
      }
      {this.state.ocultar&&(<button className='button--link' onClick={this.iniciar}>Begin</button>)}
        {this.state.inicio &&(<div>
          <h2>Respuestas Correctas:{this.state.ga}/10</h2>
          <p>{this.state.opcionesp.map((opcionesp) => <li key={opcionesp}>{opcionesp}</li>
        )}</p>

        <form onSubmit = {this.correcto}>
              <input type = "text" name = "answer" placeholder="Enter your answer" value={this.state.compararr} onChange={this.cambiarR}/>
              <input  className='submit' type="submit" value="Submit"/>
        </form>
        </div>
    )}
      </div>
    );
  }
}
