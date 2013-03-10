default_site = 'classicalrad.io'

all = 'classicalrad.io':
  kdfc:
    name: 'KDFC'
    location: 'San Francisco'
    playlist_url: 'http://provisioning.streamtheworld.com/pls/KDFCFM.pls'
    surprise: false

  wqxr:
    name: 'WQXR'
    location: 'New York'
    playlist_url: 'http://www.wqxr.org/stream/wqxr/mp3.pls'
    surprise: false

  wfmt:
    name: 'WFMT'
    location: 'Chicago'
    stream_url: 'http://wttw.ic.llnwd.net/stream/wttw_wfmt_MP3'
    surprise: false

  wgbh:
    name: 'WGBH'
    location: 'Boston'
    stream_url: 'http://audio.wgbh.org:9004/;*.nsv'
    surprise: false

  kpbs:
    name: 'KPBS'
    location: 'San Diego'
    stream_url: 'http://kpbs-classical.streamguys.tv'
    surprise: false

  king:
    name: 'KING'
    location: 'Seattle'
    stream_url: 'http://sc1.abacast.com:8246/;'
    surprise: false

  kmfa:
    name: 'KMFA'
    location: 'Austin'
    stream_url: 'http://pubint.ic.llnwd.net/stream/pubint_kmfa'
    surprise: true

  kusc:
    name: 'KUSC'
    location: 'Los Angeles'
    stream_url: 'http://64.202.109.2:80/kusc-128k'
    surprise: true

  wdav:
    name: 'WDAV'
    location: 'North Carolina'
    stream_url: 'http://audio-mp3.ibiblio.org:8000/wdav-112k'
    surprise: true

  mpr:
    name: 'MPR'
    location: 'Minnesota'
    stream_url: 'http://classicalstream1.publicradio.org/'
    surprise: true

  cfm:
    name: 'ClassicFM'
    location: 'UK'
    stream_url: 'http://media-ice.musicradio.com/ClassicFMMP3'
    surprise: true

byHost = (req) ->
  all[req.host] or all[default_site]

bySurprise = (req, surprise) ->
  result = {}
  stations = byHost(req)
  for key of stations
    result[key] = stations[key]  if stations[key].surprise is surprise
  result

byId = (req, id) ->
  byHost(req)[id]

exports.byHost = byHost
exports.bySurprise = bySurprise
exports.byId = byId