moods = require './moods'
tasks = require './tasks'
mails = require './mails'
coffeecups = require './coffeecups'
trackers = require './trackers'

module.exports =
    'trackerId': param: trackers.loadTracker
    'tasks/:day':
        get: tasks.all
    'mails/:day':
        get: mails.all
    'moods/:day':
        get: moods.all
    'moods/mood/:day':
        get: moods.day
        put: moods.updateDay
    'trackers':
        get: trackers.all
        post: trackers.create
    'trackers/:trackerId':
        put: trackers.update
        del: trackers.destroy
    'trackers/:trackerId/day/:day':
        get: trackers.day
        put: trackers.updateDayValue
    'trackers/:trackerId/amounts/:day':
        get: trackers.amounts
