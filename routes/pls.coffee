pls = require('../lib/pls-parser')
utils = require('../lib/utils')

exports.index = (req, res) ->
  locals =
    title: 'About classicalrad.io'
    bodyclass: utils.bodyClass(req, 'about')

  pls.fetch req.query.url, (items) ->
    res.json 200, items
