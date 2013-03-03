var stations = require('../lib/stations');

exports.index = function(req, res){
	var mobile = /mobile/i.test(req.header('user-agent'));	
	var locals = { 
		title: 'classicalrad.io',
		bodyclass: 'home' + (mobile ? ' mobile' : ''),
		stations: stations.all 
	};
	res.render('index', locals);
};