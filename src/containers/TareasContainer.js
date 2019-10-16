import React,{Component} from 'react';

class ListaTareas extends Component{
    constructor(props){
        super(props)
        this.state = {"lista":props.lista};
      }
    
      render(){
        console.log("render Tareas" + this.state.lista);
        return(
            this.props.lista.map(tarea=>{
                return <li>{tarea.id} {tarea.fecha} {tarea.titulo} {tarea.estado} </li>
            })

        )
      }

      tareaPendiente()
      {
        return <li className="TaskPendent"> Id, Fecha, Titulo, Estado</li>
      }

      tareaTerminada()
      {
        return <li className="TaskFinished"> Id, Fecha, Titulo, Estado</li>
      }

      tareaEnProgreso()
      {
        return <li className="TaskInProgress"> Id, Fecha, Titulo, Estado</li>
      }
      static getDerivedStateFromProps(props, state){
        console.log("getDerivatedStateFromProps() called!");
        return state;
      }

      shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called! " + nextProps.mostrarLista);
        return nextProps.mostrarLista;
      }
           
}
export default ListaTareas;