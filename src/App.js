import React,{Component} from 'react';
import './App.css';
import Filtro from "./components/FiltroClass";
import BotonMostrar from './components/BotonMostrarComponente';
import Tareas from './containers/TareasContainer'
import { AppContext } from './context/contextApp';
import {AppContextProvider} from './context/contextApp'

class App extends Component
{
  
  constructor(props){
    super(props)
    this.state = {
      "tareas" : [{"id":"01","fecha":"01-11-2019", "titulo":"Comprar el pan", "estado":"Pendiente"},
                  {"id":"02","fecha":"10-11-2019", "titulo":"Hacer plan estratégico", "estado":"En progreso"},
                  {"id":"03","fecha":"10-11-2019", "titulo":"Hacer plan financiero", "estado":"Finalizada"},
                  {"id":"04","fecha":"10-11-2019", "titulo":"Hacer la pega", "estado":"Finalizada"}
                ],
      "mostrarPendientes": this.mostrarPendientes,        
    }
    
    this.toggleMostrarPendientes = this.toggleMostrarPendientes.bind(this);
  }

  toggleMostrarPendientes(event){
    this.setState({mostrarPendientes: !this.state.mostrarPendientes});
  }

  render(){
    console.log("render Apps");
      return(
            <div className="App">
            <header>
                <AppContextProvider>
                  <Filtro/>
                  <BotonMostrar mostrarPendientes={this.state.mostrarPendientes} 
                                onClick={this.toggleMostrarPendientes}/>
                  
                  <Tareas mostrarLista={this.state.mostrarPendientes} 
                          lista={this.state.tareas}/>
                </AppContextProvider>
            </header>
            </div>
    )
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivatedStateFromProps() called!");
    return state;
  }

}
App.contextType = AppContext;
export default App;
