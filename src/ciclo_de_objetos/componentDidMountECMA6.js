import React from 'react';
// Ecmascript 6
class MyComponent extends React.Component {
  
    constructor(props){
      super(props);
      this.state = { data: [] }
      console.log('El componente aun no se ha montado');
    }

    componentDidMount() {
      console.log('El componente está disponible en el DOM');
    }
    
    render(){
      return <div>Soy un component</div>
    }
    
  }
  export default MyComponent;
  