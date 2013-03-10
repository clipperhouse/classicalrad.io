utils = require('../lib/utils')

exports.index = (req, res) ->
  locals =
    title: 'About classicalrad.io'
    bodyclass: utils.bodyClass req, 'about'
  res.render 'about', locals