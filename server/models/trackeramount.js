// Generated by CoffeeScript 1.6.3
var americano, date_helpers;

americano = require('americano-cozy');

date_helpers = require('../lib/date');

module.exports = americano.getModel('TrackerAmount', {
  tracker: String,
  amount: Number,
  date: Date
});