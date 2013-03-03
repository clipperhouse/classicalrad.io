var stations = require('../lib/stations');

exports.detail = function(req, res){
	var id = req.params.id;
	var station = stations.byId(id);
	var locals = {
		title: station.name + ' | classicalrad.io',
		bodyclass: 'station',
		station: station
	};	
	res.render('station', locals);
};