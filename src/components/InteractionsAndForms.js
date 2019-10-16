import React,{Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={"texto":this.props.value};
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(event){
        console.log("El texto ha cambiado");
        this.setState({ "texto":event.target.value });
        console.log(this.state);
    }

    render(){
        const { textValue } = this.state.texto;
        
        return(
        <div>
            <form>
                <input 
                    type="text" 
                    value={textValue} 
                    onChange={this.onTextChange}/>
            </form>
        </div>
        );
    }
}

export default Formulario;