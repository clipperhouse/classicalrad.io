var stations = require('../lib/stations');
var utils = require('../lib/utils');

exports.index = function(req, res){
	var locals = { 
		title: 'classicalrad.io',
		bodyclass: utils.bodyClass(req, 'home'),
		stations: stations.byHost(req) 
	};
	res.render('index', locals);
};