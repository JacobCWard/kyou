// Generated by CoffeeScript 1.9.3
var americano;

americano = require('cozydb');

module.exports = {
  name: "Commits",
  color: "#4CAF50",
  description: "This tracker counts your amount of commits on a daily basis.",
  model: americano.getModel('commit', {
    date: Date
  }),
  request: {
    map: function(doc) {
      return emit(doc.date.substring(0, 10), 1);
    },
    reduce: function(key, values, rereduce) {
      return sum(values);
    }
  }
};
