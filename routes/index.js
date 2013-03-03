var stations = require('../data/stations');
var locals = { 
	title: 'classicalrad.io',
	bodyclass: 'home',
	stations: stations.all 
};

exports.index = function(req, res){
	res.render('index', locals);
};