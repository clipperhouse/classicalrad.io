var request = require('request')
  , cache = require('memory-cache');

var cache_duration = 1000 * 60 * 60 * 6;					// 6 hours in milliseconds

function parse(playlist) {
	var result = [];
	var regex = /^(File|Title|Length)(\d+)\=(.*)$/mg;		// same regex to identify the meaningful lines, then capture groups
	playlist.match(regex).forEach(function(line, index){
		regex.lastIndex = 0;								// http://stackoverflow.com/a/2630538/70613
		var parts = regex.exec(line);
		var name = parts[1].toLowerCase();
		var index = parseInt(parts[2]) - 1;					// pls is 1-based, array is 0-based
		var value = parseInt(parts[3]) || parts[3];			// an integer if it is one
		result[index] = result[index] || {};
		result[index][name] = value;
	});
	return result;
};

function fetch(url, callback) {
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
				var result = parse(body);
				cache.put(url, result, cache_duration);
				callback(result);
			}
		});
	} else {
		callback([]);
	}
};

exports.parse = parse;
exports.fetch = fetch;
