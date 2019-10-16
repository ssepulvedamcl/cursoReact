import React,{Component} from 'react';

class MyButton extends Component{

    constructor(props){
        super(props);
        this.state = {"message":"Hello world!"};
        //this.clicked = this.clicked.bind(this); 
        //State no puede ser recuperado si no se hace uso de bind
    }

    clicked(param){
        console.log("It was clicked!");
        console.log(param);
        console.log(this.state.message);
    }

    render(){
        return <div><button name="myButton" onClick={() => this.clicked("hola")}>Click me!</button></div>;
    }

}

export default  MyButton;