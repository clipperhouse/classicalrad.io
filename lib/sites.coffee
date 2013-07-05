default_site = 'classicalrad.io'

sites = 
  'classicalrad.io':
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

    rrm:
      name: 'Radio România Muzical'
      location: 'Romania'
      stream_url: 'http://stream2.srr.ro:8026/;'
      surprise: true

  'jazzrad.io':
    kcsm:
      name: 'KCSM'
      location: 'Bay Area'
      stream_url: 'http://sc1.abacast.com:8240/;'
#      playlist_url: 'http://asx.abacast.com/kcsm-kcsm-sc64.pls'
      surprise: false

getSiteByHost = (req) ->
  sites[req.query.station] or sites[req.host] or sites[default_site]

getStations = (req, surprise) ->
  stations = getSiteByHost(req)
  if surprise is true or surprise is false
    result = {}
    for key of stations
      result[key] = stations[key]  if stations[key].surprise is surprise
    return result
  stations

getStationById = (req, id) ->
  getStations(req)[id]

exports.getStations = getStations
exports.getStationById = getStationById