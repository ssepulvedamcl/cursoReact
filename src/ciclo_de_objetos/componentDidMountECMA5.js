// Ecmascript 5
var MyComponent = React.createClass({
  
  componentWillMount: function() {
    console.log('El componente aun no está disponible en el DOM');
    return { data:[] };
  },
  
  componentDidMount: function() {
    console.log('El componente está disponible en el DOM');
    // Pedimos algunos datos
    $.get(this.props.source, function(result) {
      var dato = result[0];
      this.setState({ data: [ dato ] });
    }).bind(this);
  }
  
  render: function() {
    <div>Soy un component</div>
  }
  
});