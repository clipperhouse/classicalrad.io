exports.index = function(req, res){
	var locals = {
		title: 'About classicalrad.io',
		bodyclass: 'about'
	};
	res.render('about', locals);
};