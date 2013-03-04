var all = {
	kdfc : {
		name: 'KDFC',
		location: 'San Francisco',
		stream_url: 'http://9313.live.streamtheworld.com:80/KDFCFM_SC'
	},
	wqxr : {
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
	}
};

exports.all = all;

exports.byId = function(id) {
	return all[id];
};