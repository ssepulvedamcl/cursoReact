import React from 'react'

export const AppContext = React.createContext({
    mostrarPendientes:false,
    filtroTexto:"",
});
//Se exporta la clase completa para hacer uso del proveedor
export class AppContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarPendientes:false,
            filtroTexto:"",
        };
        this.toggleMostrarPendientes = this.toggleMostrarPendientes.bind(this);
        this.changeFiltroTexto = this.changeFiltroTexto.bind(this);
    }

    toggleMostrarPendientes(){
        this.setState({mostrarPendientes:!this.state.mostrarPendientes});
    }

    changeFiltroTexto(event)
    {
        this.setState({filtroTexto:event.target.value});
        console.log("context filtroTexto: " + this.state.filtroTexto);
    }

    render(){
        const{
            children,
        } = this.props;
    
        const{
            mostrarPendientes,
            filtroTexto, 
        } = this.state;
        return(
            <AppContext.Provider
                value={{
                    mostrarPendientes,
                    filtroTexto,
                    toggleMostrarPendientes : this.toggleMostrarPendientes,
                    changeFiltroTexto: this.changeFiltroTexto,
                }}
                >
                    {children}
                </AppContext.Provider>
        );
    }

}

export const AppContextConsumer = AppContext.Consumer;
