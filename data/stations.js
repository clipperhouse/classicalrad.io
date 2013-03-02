var all = {
	kdfc : {
		name: 'KDFC',
		location: 'San Francisco',
		stream_url: 'http://9313.live.streamtheworld.com:80/KDFCFM_SC'
	},
	wqxr : {
		name: 'WQXR',
		location: 'New York',
		stream_url: 'http://fm939.wnyc.org/'
	}
}

exports.all = all;

exports.byId = function(id) {
	return all[id];
};