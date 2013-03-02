
/*
 * GET home page.
 */

 exports.index = function(req, res){
 	var stations = require('../stations.js');
 	res.render('index', { title: 'classicalrad.io', stations: stations.all });
 };