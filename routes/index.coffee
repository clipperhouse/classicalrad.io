stations = require('../lib/stations')
utils = require('../lib/utils')

exports.index = (req, res) ->
  locals =
    title: 'classicalrad.io'
    bodyclass: utils.bodyClass(req, 'home')
    stations: stations.bySurprise(req, false)
    surprise_stations: stations.bySurprise(req, true)

  res.render 'index', locals