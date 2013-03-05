var stations = require('../lib/stations');
var utils = require('../lib/utils');

exports.detail = function(req, res){
	var id = req.params.id;
	var station = stations.byId(req, id);
	var locals = {
		title: station.name + ' | classicalrad.io',
		bodyclass: utils.bodyClass(req, 'station'),
		pop_url: req.path + '?pop',
		station: station
	};
	res.render('station', locals);
};