var express = require('express')
  , routes = require('./routes')
  , station = require('./routes/station')
  , about = require('./routes/about')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.all(/.*/, function(req, res, next) {
    var host = req.host;
    if (host.match(/^www\..*/i)) {
      res.redirect(301, "http://" + host.replace(/^www\./, ''));
    } else {
      next();
    }
  });
  app.use(express.compress());
  app.use(express.logger('dev'));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public'), { maxAge: 1800000 }));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/about', about.index);
app.get('/:id', station.detail);

http.createServer(app).listen(app.get('port'), function(){
  console.log("classicalrad.io started on port " + app.get('port'));
});
