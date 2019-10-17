import React, { Component } from 'react';
import FiltroContext from '../FiltroContext';

export class FiltroClass extends Component {
  static contextType = FiltroContext;
  static contextProvider = FiltroContext.Provider;
  constructor(props) {
    super(props);
    this.state = { "ultimotexto": "" };
    this.onChangeText = this.onChangeText.bind(this);
  }

  render() {
    console.log("render Filtro");
    console.log("State:");
    console.log(this.state);
    console.log("Props:");
    console.log(this.props);
    console.log("Context:");
    console.log(this.context);
    console.log("Contexto:" + FiltroContext.displayName);
    return (
    <div>
      <input type="text" onChange={this.onChangeText}>
      </input>
    </div>);
  }

  onChangeText(event) {
    this.setState({ "ultimotexto": event.target.value });
    this.context = event.target.value;
    
    console.log("FiltroContext modificado: " + this.context);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivatedStateFromProps() called!");
    return state;
  }
}

export default FiltroClass;
