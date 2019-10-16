import React from 'react';
// Ecmascript 6
class MyComponent extends React.Component {
    constructor(){
        super();
        this.setState({loading: false });
    }
    componentWillReceiveProps(next_props) {
      this.setState({loading: true });
    }
    
    render(){
      var className = this.state.loading ? 'loading' : 'loaded';
      return(<div className={className}>Soy un component</div>)
    }
  
  }

  export default MyComponent;
  