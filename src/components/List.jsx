var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text": fromage}, {"id":2, "text": pate}, {"id":3, "text": jambon}];

var List = React.createclass({
  render: function(){
    var ListItem = ingredients.map(function(item){
        return <ListItem key= {item.id} ingredient={item.text} />;
    });
    return(<ul>{ListItem}</ul>);
  }
});

module.exports = List;
