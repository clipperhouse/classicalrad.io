var utils = require('../lib/utils');

exports.index = function(req, res){
	var locals = {
		title: 'About classicalrad.io',
		bodyclass: utils.bodyClass(req, 'about')
	};
	res.render('about', locals);
};