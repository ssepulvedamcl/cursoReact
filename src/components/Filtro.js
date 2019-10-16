import React, { Component } from 'react';
export class FiltroClass extends Component {

  constructor(props) {
    super(props);
    this.state = { "ultimotexto": "" };
    this.onChangeText = this.onChangeText.bind(this);
  }
  render() {
    console.log("render Filtro");
    console.log(this.state);
    console.log("FiltroTextoContext modificado: " + this.context.value);
    return (<div>
      <input type="text" onChange={this.onChangeText}>
      </input>
    </div>);
  }
  onChangeText(event) {
    this.setState({ "ultimotexto": event.target.value });
    console.log("FiltroTextoContext modificado: " + this.context.value);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivatedStateFromProps() called!");
    return state;
  }
}
export default FiltroClass;
