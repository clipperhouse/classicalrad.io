var stations = require('../lib/stations');
var utils = require('../lib/utils');

exports.index = function(req, res){
	var locals = { 
		title: 'classicalrad.io',
		bodyclass: utils.bodyClass(req, 'home'),
		stations: stations.bySurprise(req, false),
		surprise_stations: stations.bySurprise(req, true)
	};
	res.render('index', locals);
};