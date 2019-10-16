import React from 'react'

// Ecmascript 6
class MyComponent extends React.Component {
  
    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
    
    // Despues del primer render, nunca volver a renderizarse.
    render(){
      <div>Soy un component</div>
    }
  
  }
  