// Ecmascript 5
var MyComponent = React.createClass({
  
  shouldComponentUpdate: function(next_props, next_state) {
    return false;
  },
  
  // Despues del primer render, nunca volver a renderizarse.
  render: function() {
    return <div>Soy un component</div>
  }
  
});
