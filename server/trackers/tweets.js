// Generated by CoffeeScript 1.6.3
var americano;

americano = require('americano-cozy');

module.exports = {
  name: "Tweets",
  color: "#96A4A5",
  description: "Number of tweets you publish every day",
  model: americano.getModel('TwitterTweet', {
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
