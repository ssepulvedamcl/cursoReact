//import MyButton from './components/MyButtonEvents';
//import MyButton from './components/MyButtonBindings';
//import Formulario from './components/InteractionsAndForms';
//import MyComponent from './ciclo_de_objetos/componentWillMountECMA6';
//import MyComponent from './ciclo_de_objetos/componentDidMountECMA6';
//import MyComponent from './ciclo_de_objetos/componentWillReceivePropsECMA6';
import React,{Component} from 'react';
import './App.css';
import Filtro from './components/FiltroComponente';
import BotonMostrar from './components/BotonMostrarComponente';
import Tareas from './containers/TareasContainer'

class App extends Component
{
  constructor(props){
    super(props)
    this.state = {
      "tareas" : [{"id":"01","fecha":"01-11-2019", "titulo":"Comprar el pan", "estado":"Pendiente"},
                  {"id":"02","fecha":"10-11-2019", "titulo":"Hacer plan estratégico", "estado":"En progreso"}],
      "mostrarPendientes":true,
      "textoFiltro":""
    }
    this.toggleMostrarPendientes = this.toggleMostrarPendientes.bind(this);
  }


  render(){
    console.log("render Apps");
    return(
    
    <div className="App">
    <header>
      <Filtro texto="prueba"/>
      <BotonMostrar mostrarPendientes={this.state.mostrarPendientes} 
                    onClick={this.toggleMostrarPendientes}/>
      <Tareas mostrarLista={this.state.mostrarPendientes} 
              lista={this.state.tareas}/>
    </header>
    
    </div>
    
    )
  }

  toggleMostrarPendientes(event){
    console.log(this.state);
    let value =this.state.mostrarPendientes;
    this.setState({"mostrarPendientes":!value});
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivatedStateFromProps() called!");
    return state;
  }

}


export default App;
