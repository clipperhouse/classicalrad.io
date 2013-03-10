var default_station = 'classicalrad.io';

var all = {
  'classicalrad.io': {
    kdfc: {
      name: 'KDFC',
      location: 'San Francisco',
      playlist_url : 'http://provisioning.streamtheworld.com/pls/KDFCFM.pls',
      stream_url: 'http://9313.live.streamtheworld.com:80/KDFCFM_SC',
      surprise : false
    },
    wqxr: {
      name: 'WQXR',
      location: 'New York',
      stream_url: 'http://stream.wqxr.org/wqxr',
      surprise : false
    },
    kusc: {
      name: 'KUSC',
      location: 'Los Angeles',
      stream_url: 'http://64.202.109.2:80/kusc-128k',
      surprise : false
    },
    wfmt: {
      name: 'WFMT',
      location: 'Chicago',
      stream_url: 'http://wttw.ic.llnwd.net/stream/wttw_wfmt_MP3',
      surprise : false
    },
    wgbh: {
      name: 'WGBH',
      location: 'Boston',
      stream_url: 'http://audio.wgbh.org:9004/;*.nsv',
      surprise : false
    },
    kpbs: {
      name: 'KPBS',
      location: 'San Diego',
      stream_url: 'http://kpbs-classical.streamguys.tv',
      surprise : false
    },
    king: {
      name: 'KING',
      location: 'Seattle',
      stream_url: 'http://sc1.abacast.com:8246/;',
      surprise : false
    },
    kmfa: {
      name: 'KMFA',
      location: 'Austin',
      stream_url: 'http://pubint.ic.llnwd.net/stream/pubint_kmfa',
      surprise : true
    },
    wdav: {
      name: 'WDAV',
      location: 'North Carolina',
      stream_url: 'http://audio-mp3.ibiblio.org:8000/wdav-112k',
      surprise : true
    },
    mpr: {
      name: 'MPR',
      location: 'Minnesota',
      stream_url: 'http://classicalstream1.publicradio.org/',
      surprise : true
    },
    cfm: {
	  name: 'ClassicFM',
	  location: 'UK',
	  stream_url: 'http://media-ice.musicradio.com/ClassicFMMP3',
      surprise : true
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

function bySurprise(req, surprise) {
  var result = {}, key;
  var stations = byHost(req);

  for (key in stations) {
  	if (stations[key].surprise === surprise) {
  		result[key] = stations[key];
  	}
  }
  return result;
}

exports.bySurprise = bySurprise;

exports.byId = function(req, id) {
  return byHost(req)[id];
};
