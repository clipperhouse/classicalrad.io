var pls = require('../lib/pls-parser')
	, utils = require('../lib/utils');

exports.index = function(req, res){
	var locals = {
		title: 'About classicalrad.io',
		bodyclass: utils.bodyClass(req, 'about')
	};

	pls.fetch(req.query.url, function(items) {
		res.json(200, items);
	});
};