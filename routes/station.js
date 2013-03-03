var stations = require('../lib/stations');

exports.detail = function(req, res){
	var id = req.params.id;
	var station = stations.byId(id);
	var pop = req.query.pop != undefined;
    var mobile = /mobile/i.test(req.header('user-agent'));
	var locals = {
		title: station.name + ' | classicalrad.io',
		bodyclass: 'station' + (pop ? ' pop' : '') + (mobile ? ' mobile' : ''),
		pop_url: req.path + '?pop',
		station: station
	};
	res.render('station', locals);
};