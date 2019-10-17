import React from 'react';
import useContext from 'react';
import FiltroContext from '../App';
//import FiltroConsumer from '../App';
function Filtro(){
  const context = useContext(FiltroContext);
  
  function onChangeText(event){
    
    this.setState({"ultimotexto": event.target.value});
    console.log("FiltroTextoContext modificado: " + context.value);
  };

  return(
    <div>
      <FiltroContext.Consumer>
      <input type="text" 
      onChange={onChangeText}>
          </input>
          </FiltroContext.Consumer>
    </div>

  );
}

export default Filtro;