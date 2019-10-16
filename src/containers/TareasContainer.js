import React,{Component} from 'react';

class ListaTareas extends Component{
    constructor(props){
        super(props)
        this.state = {"lista":props.lista};
      }
    
      render(){
        let estado;
        let tareasFiltradas;
        console.log("render Tareas" + this.state.lista);
        if(this.props.mostrarLista){
          estado = "Pendiente";
          tareasFiltradas = 
            this.props.lista.filter(tarea=>{ return tarea.estado == estado;});
        }
        else
        {
          estado = "";
          tareasFiltradas = this.props.lista;     
        }
        
        
        return(
          tareasFiltradas.map(tarea=>{
                return <li key={tarea.id}>{tarea.id} {tarea.fecha} {tarea.titulo} {tarea.estado} </li>
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
        //return nextProps.mostrarLista;
        return true;
      }
           
}
export default ListaTareas;