// Generated by CoffeeScript 1.9.3
var americano;

americano = require('cozydb');

module.exports = {
  name: "Weight",
  color: "#E91E63",
  description: "Your weight in grams.",
  model: americano.getModel('weight', {
    date: Date
  }),
  request: {
    map: function(doc) {
      return emit(doc.date.substring(0, 10), doc.weight);
    },
    reduce: function(key, values, rereduce) {
      return sum(values) / values.length;
    }
  }
};
