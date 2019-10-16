// Ecmascript 5
var MyComponent = React.createClass({
  
  componentWillReceiveProps: function(next_props){
    this.setState({ loading: true });
  },
  
  render: function() {
    className = this.state.loading ? 'loading' : 'loaded';
    return(<div className={className}>Soy un component</div>)
  }
  
});