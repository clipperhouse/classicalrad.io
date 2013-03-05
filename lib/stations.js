
var default_station = 'classicalrad.io';

var all = {
  'classicalrad.io': {
    kdfc: {
      name: 'KDFC',
      location: 'San Francisco',
      stream_url: 'http://9313.live.streamtheworld.com:80/KDFCFM_SC'
    },
    wqxr: {
      name: 'WQXR',
      location: 'New York',
      stream_url: 'http://stream.wqxr.org/wqxr'
    },
    kpbs: {
      name: 'KPBS',
      location: 'San Diego',
      stream_url: 'http://kpbs-classical.streamguys.tv'
    },
    kusc: {
      name: 'KUSC',
      location: 'Los Angeles',
      stream_url: 'http://64.202.109.2:80/kusc-128k'
    },
    wdav: {
      name: 'WDAV',
      location: 'North Carolina',
      stream_url: 'http://audio-mp3.ibiblio.org:8000/wdav-112k'
    },
    wfmt: {
      name: 'WFMT',
      location: 'Chicago',
      stream_url: 'http://wttw.ic.llnwd.net/stream/wttw_wfmt_MP3'
    },
    wgbh: {
      name: 'WGBH',
      location: 'Boston',
      stream_url: 'http://audio.wgbh.org:9004/;*.nsv'
    },
    king: {
      name: 'KING',
      location: 'Seattle',
      stream_url: 'http://sc1.abacast.com:8246/;'
    },
    kmfa: {
      name: 'KMFA',
      location: 'Austin',
      stream_url: 'http://pubint.ic.llnwd.net/stream/pubint_kmfa'
    },
    mpr: {
      name: 'MPR',
      location: 'Minnesota',
      stream_url: 'http://classicalstream1.publicradio.org/'
    },
    cfm: {
        name: 'ClassicFM',
        location: 'UK',
        stream_url: 'http://media-ice.musicradio.com/ClassicFMMP3Low'
    }/*,
    bbc3: {
      name: 'BBC Radio 3',
      location: 'UK',
      stream_url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_intl_lc_radio3_p?s=1362261751&e=1362276151&h=47e8b2755e05d1a5ceeb665f116984de'
    }*/
  }
};

function byHost(req) {
  var host = req.host;
  return all[host] || all[default_station];
}

exports.byHost = byHost;

exports.byId = function(req, id) {
  return byHost(req)[id];
};
