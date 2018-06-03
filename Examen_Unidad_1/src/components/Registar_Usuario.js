import React from 'react';

// <label for="apellido"> Apellido: </label>
const Registro =(props)=>{
  return(
    <div>
    <form>
    <h1 className="h1"> Nombre</h1>
    <h1> Nombre</h1>
    <input type="text" name="nombre" className=""/><br/>
    <h1>Apellido</h1>
    <input type="text" name="nombre" className=""/><br/>
    <input type="text" className="apellido"/><br/>
    <input type="checkbox" name="male" className="a"/>Male<br/>
    <input type="checkbox" name="women" className="a"/>Women<br/>
    </form>
    </div>
  );
};
export default Registro;
