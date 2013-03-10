var request = require('request')
	, cache = require('memory-cache');

var cache_duration = 1000 * 60 * 60 * 6;					// 6 hours in milliseconds

function addEntry(array, index, name, value) {
	array[index - 1] = array[index - 1] || {};				// pls is 1-based, array is 0-based
	array[index - 1][name] = value;
}

function toArray(playlist) {
	var result = [];
	var regex = /^(File|Title|Length)(\d+)\=(.*)$/mg;		// same regex to identify the meaningful lines, then capture groups
	playlist.match(regex).forEach(function(line, index){
		regex.lastIndex = 0;								// http://stackoverflow.com/a/2630538/70613
		var parts = regex.exec(line);
		var name = parts[1].toLowerCase();
		var index = parseInt(parts[2]);
		var value = parseInt(parts[3]) || parts[3];
		addEntry(result, index, name, value);
	});
	return result;
};

function parse(url, callback) {
	if (url) {
		var cached = cache.get(url);
		if (cached) {
			console.log('using cache for ' + url);
			callback(cached);
			return;
		}
		request(url, function (error, response, body) {
			console.log('requesting ' + url);
			if (!error && response.statusCode == 200) {
				var result = toArray(body);
				cache.put(url, result, cache_duration);
				callback(result);
			}
		});		
	} else {
		callback([]);
	}
};

var count = 0;
exports.parse = parse;