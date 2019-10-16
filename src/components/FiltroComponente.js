import React from 'react';
import useContext from 'react';
import FiltroContext from '../App';

function Filtro(){
  const context = useContext(FiltroContext);
  
  function onChangeText(event){
    
    this.setState({"ultimotexto": event.target.value});
    console.log("FiltroTextoContext modificado: " + context.value);
  };

  return(
    <div>
    <input type="text" 
    onChange={onChangeText}>
        </input>
    </div>
  );
}

export default Filtro;