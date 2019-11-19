import React, { Component } from 'react';
import { AppContext } from '../context/contextApp';

export class FiltroClass extends Component {
  
  render() {
    
    const{
      // eslint-disable-next-line
      mostrarPendientes,
      // eslint-disable-next-line
      filtroTexto,
      // eslint-disable-next-line
      toggleMostrarPendientes,
      changeFiltroTexto,
    } = this.context;

    return (
        <div className={'container'}>
            <input className={'form-control'} type="text" onChange={changeFiltroTexto}>
            </input>
        </div>
    );
  }

  static getDerivedStateFromProps(props, state) {
      return state;
  }
}
FiltroClass.contextType = AppContext;
export default FiltroClass;
