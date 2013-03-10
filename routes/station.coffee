stations = require('../lib/stations')
utils = require('../lib/utils')
pls = require('../lib/pls-parser')

exports.detail = (req, res) ->
  id = req.params.id
  station = stations.byId(req, id)

  render = (playlist) ->
    stream_url = station.stream_url
    if playlist
      items = (item for item in playlist when item.file)
      stream_url = items[0].file  if items.length
    locals =
      title: "#{ station.name } | classicalrad.io"
      bodyclass: utils.bodyClass(req, 'station')
      pop_url: req.path + '?pop'
      station: station
      stream_url: stream_url
    res.render 'station', locals

  if station.playlist_url
    pls.fetch station.playlist_url, render
  else
    render()