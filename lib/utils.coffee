isMobile = (req) ->
  ua = req.header('user-agent')
  /mobile/i.test(ua) or /android/i.test(ua) or /nexus/i.test(ua)

isPopup = (req) ->
  req.query.pop isnt `undefined`

bodyClass = (req, classname) ->
  result = '' + classname
  result += ' mobile'  if isMobile(req)
  result += ' pop'  if isPopup(req)
  result

exports.isMobile = isMobile
exports.isPopup = isPopup
exports.bodyClass = bodyClass