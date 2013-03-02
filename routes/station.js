var stations = require('../data/stations');

exports.detail = function(req, res){
	var id = req.params.id;
	var station = stations.byId(id);
	var data = {
		title: station.name + ' | classicalrad.io',
		station: station
	};
	res.render('station', data);
};