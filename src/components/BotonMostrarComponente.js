import React,{Component} from 'react';


class BotonMostrar extends Component{
    constructor(props){
        super(props)
        this.toggleEstado = 
            this.toggleEstado.bind(this);
      }
    
      render(){
        let textoBoton ="";
        textoBoton = "Mostrar Pendientes"; 
        if(this.props.mostrarPendientes){
            textoBoton = "Mostrar todos"; 
        }
        
        console.log("render BotonMostrar");
        return(
            <button className={'btn-primary'}
            onClick={this.props.onClick}>
                {textoBoton}</button>      
        )
      }

      toggleEstado(){
        console.log("Cambio texto boton");
      }

      static getDerivedStateFromProps(props, state){
        console.log("getDerivatedStateFromProps() called!");
        return state;
      }

      
}
export default BotonMostrar;