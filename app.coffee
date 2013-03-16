express = require('express')
routes = require('./routes')
station = require('./routes/station')
about = require('./routes/about')
pls = require('./routes/pls')
http = require('http')
path = require('path')
assets = require('connect-assets')
app = express()

app.configure ->
  app.set 'port', process.env.PORT or 3000
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.favicon(__dirname + '/public/favicon.ico')
  app.all /.*/, (req, res, next) ->
    host = req.host
    if host.match(/^www\..*/i)
      res.redirect 301, 'http://' + host.replace(/^www\./, '')
    else
      next()
  app.use express.compress()
  app.use express.logger('dev')
  app.use app.router
  app.use assets({ src: 'public' })
  app.use express.static(path.join(__dirname, 'public'),
    maxAge: 1800000
  )

app.configure 'development', ->
  app.use express.errorHandler()

app.get '/', routes.index
app.get '/about', about.index
app.get '/pls', pls.index
app.get '/:id/:mode?', station.detail

http.createServer(app).listen app.get('port'), ->
  console.log 'classicalrad.io started on port ' + app.get('port')
