var request = require('request');
var cache = {};

function toArray(playlist) {
	var result = [];
	var split = /[\r\n]+/g;
	var lines = playlist.split(split);

	var files_regex = /^File(\d+)\=(.*)$/;
	var titles_regex = /^Title(\d+)\=(.*)$/;
	var lengths_regex = /^Length(\d+)\=(\d+)$/;

	for (var i in lines) {
		var file_matches = files_regex.exec(lines[i]);
		if (file_matches && file_matches[1] && file_matches[2]) {
			var index = parseInt(file_matches[1]);
			var file = file_matches[2];
			result[index - 1] = { file: file };		// pls is 1-based, array is 0-based
		}
		var title_matches = titles_regex.exec(lines[i]);
		if (title_matches && title_matches[1] && title_matches[2]) {
			var index = parseInt(title_matches[1]);
			var title = title_matches[2];
			result[index - 1] = result[index - 1] || {};
			result[index - 1].title = title;
		}
		var length_matches = lengths_regex.exec(lines[i]);
		if (length_matches && length_matches[1] && length_matches[2]) {
			var index = parseInt(length_matches[1]);
			var length = parseInt(length_matches[2])
			result[index - 1] = result[index - 1] || {};
			result[index - 1].length = length;
		}
	}
	return result;
};

function parse(url, callback) {
	if (url) {
		if (cache[url]) {
			console.log('using cache for ' + url);
			callback(cache[url]);
			return;
		}
		request(url, function (error, response, body) {
			console.log('requesting ' + url);
			if (!error && response.statusCode == 200) {
				var result = toArray(body);
				cache[url] = result;		
				callback(result);
			}
		});		
	} else {
		callback([]);
	}
};

var count = 0;
exports.parse = parse;