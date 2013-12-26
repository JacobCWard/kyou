americano = require 'americano-cozy'
moment = require 'moment'

module.exports = Mood = americano.getModel 'Mood',
    status: type: String
    date: type: Date

Mood.getMood = (day, callback) ->
    day = moment(day, 'YYYY-MM-DD').format 'YYYY-MM-DD'

    Mood.request 'byDay', key: day, (err, moods) ->
        if err
            callback err
        else if moods.length isnt 0
            callback null, moods[0]
        else
            callback()
