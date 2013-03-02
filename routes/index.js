var stations = require('../data/stations');

exports.index = function(req, res){
	res.render('index', { title: 'classicalrad.io', stations: stations.all });
};