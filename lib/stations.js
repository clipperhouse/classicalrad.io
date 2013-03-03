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
	}
}

exports.all = all;

exports.byId = function(id) {
	return all[id];
};