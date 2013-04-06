sites = require('../lib/sites')
utils = require('../lib/utils')

exports.index = (req, res) ->
  locals =
    title: 'classicalrad.io'
    bodyclass: utils.bodyClass(req, 'home')
    stations: sites.getStations(req, false)
    surprise_stations: sites.getStations(req, true)

  res.setHeader 'Cache-Control', 'max-age=3600'
  res.render 'index', locals