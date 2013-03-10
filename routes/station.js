var stations = require('../lib/stations')
  , utils = require('../lib/utils')
  , pls = require('../lib/pls-parser');

exports.detail = function(req, res) {
	var id = req.params.id;
	var station = stations.byId(req, id);

	var render = function(playlist) {
		var stream_url = station.stream_url;
		if (playlist) {
			// get first item with 'file' property
			var items = playlist.filter(function(item) {
				return item.file;
			});
			if (items.length) {
				stream_url = items[0].file;
			}
		}
		var locals = {
			title: station.name + ' | classicalrad.io',
			bodyclass: utils.bodyClass(req, 'station'),
			pop_url: req.path + '?pop',
			station: station,
			stream_url: stream_url
		};
		res.render('station', locals);
	};

	if (station.playlist_url) {
		pls.fetch(station.playlist_url, render);
	} else {
		render();
	}
};