// Generated by CoffeeScript 1.9.3
var moment;

moment = require('moment');

module.exports = {
  filterDates: function(rows, start, end) {
    var i, len, row;
    for (i = 0, len = rows.length; i < len; i++) {
      row = rows[i];
      console.log(row);
    }
    return rows;
  },
  normalize: function(rows, start, end) {
    var data, date, dateString, endDate, i, len, normalizedRows, row;
    data = {};
    data[start] = 0;
    for (i = 0, len = rows.length; i < len; i++) {
      row = rows[i];
      data[row.key] = row.value;
    }
    if (data[end] == null) {
      data[end] = 0;
    }
    date = moment(start);
    normalizedRows = {};
    endDate = moment(end);
    while (date <= endDate) {
      date = date.add('days', 1);
      dateString = date.format("YYYY-MM-DD");
      if (data[dateString] != null) {
        normalizedRows[dateString] = data[dateString];
      } else {
        normalizedRows[dateString] = 0;
      }
    }
    console.log(normalizedRows);
    return normalizedRows;
  },
  toClientFormat: function(data) {
    var date, dateEpoch, results, value;
    results = [];
    for (date in data) {
      value = data[date];
      dateEpoch = new Date(date).getTime() / 1000;
      results.push({
        x: dateEpoch,
        y: value
      });
    }
    return results;
  }
};
