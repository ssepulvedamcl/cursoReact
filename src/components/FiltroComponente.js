import React,{Component} from 'react';

class Filtro extends Component{
    constructor(props){
        super(props)
        this.state={"ultimotexto":""};
        this.onChangeText = this.onChangeText.bind(this);

      }
    
      render(){
        console.log("render Filtro");
        console.log(this.state);
        return(
            <div>
                <input type="text" 
                onChange={this.onChangeText}>
                    </input>
            </div>
        )
        
      }

      onChangeText(event){
        this.setState({"ultimotexto": event.target.value});
      }

      static getDerivedStateFromProps(props, state){
        console.log("getDerivatedStateFromProps() called!");
        return state;
      }
}

export default Filtro;