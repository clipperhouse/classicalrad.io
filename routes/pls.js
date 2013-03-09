//http://provisioning.streamtheworld.com/pls/KDFCFM.pls
var pls = require('../lib/pls-parser.js');
var utils = require('../lib/utils');

exports.index = function(req, res){
	var locals = {
		title: 'About classicalrad.io',
		bodyclass: utils.bodyClass(req, 'about')
	};

	pls.parse(req.query.url, function(items) {
		res.json(200, items);
	});
};