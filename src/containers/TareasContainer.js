import React,{Component} from 'react';
import { AppContext } from '../context/contextApp';

class ListaTareas extends Component{
    constructor(props){
        super(props)
        this.state = {"lista":props.lista};
      }
    
      render(){
        let estado;
        let tareasFiltradas =this.props.lista;
        console.log("render Tareas" + this.state.lista);
        console.log("Context TareasContainer filtroTexto:" + this.context.filtroTexto)
                
        if(this.context.filtroTexto!==""){
          tareasFiltradas = 
            tareasFiltradas.filter(tarea=>{ return tarea.titulo.indexOf(this.context.filtroTexto)>0;});
        }
        else{
          tareasFiltradas = this.props.lista;
        }
        
        
        if(this.props.mostrarLista){
          estado = "Pendiente";
          tareasFiltradas = 
            tareasFiltradas.filter(tarea=>{ return tarea.estado === estado;});
        }
        
                
        return(
          <ul className={'container'}>
          {tareasFiltradas.map(tarea=>{
                let className="";
                if(tarea.estado === "Finalizada")
                  className = "bg-success";
                else if(tarea.estado === "Pendiente")
                  className = "bg-danger";
                else
                  className = "bg-info";
                    return <li className={className} key={tarea.id}>{tarea.id} {tarea.fecha} {tarea.titulo} {tarea.estado} </li>
          })}
          </ul>
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
ListaTareas.contextType = AppContext;
export default ListaTareas;