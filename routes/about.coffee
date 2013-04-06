utils = require('../lib/utils')

exports.index = (req, res) ->
  locals =
    title: 'About classicalrad.io'
    bodyclass: utils.bodyClass req, 'about'
  res.setHeader 'Cache-Control', 'max-age=3600'
  res.render 'about', locals