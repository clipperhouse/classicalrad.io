var all = {
	kdfc : {
		name: 'KDFC',
		location: 'San Francisco',
		stream_url: ''
	},
	wqxr : {
		name: 'WQXR',
		location: 'New York',
		stream_url: ''
	}
}

exports.all = all;

exports.byId = function(id) {
	return all[id];
};