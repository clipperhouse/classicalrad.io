request = require("request")
cache = require("memory-cache")

cache_duration = 1000 * 60 * 60 * 6

parse = (playlist) ->
  result = []
  regex = /^(File|Title|Length)(\d+)\=(.*)$/gm        # same regex to identify the meaningful lines, then capture groups

  parseLine = (line) ->
    regex.lastIndex = 0                               # http://stackoverflow.com/a/2630538/70613
    parts = regex.exec(line)
    name = parts[1].toLowerCase()
    index = parseInt(parts[2]) - 1                    # pls is 1-based, array is 0-based
    value = parseInt(parts[3]) or parts[3]            # an integer if it is one
    result[index] = result[index] or {}
    result[index][name] = value

  lines = playlist.match(regex)
  parseLine line for line in lines
  result

fetch = (url, callback) ->
  if url
    cached = cache.get(url)
    if cached
      console.log "using cache for " + url
      callback cached
      return
    request url, (error, response, body) ->
      console.log "requesting " + url
      if not error and response.statusCode is 200
        result = parse(body)
        cache.put url, result, cache_duration
        callback result
  else
    callback []

exports.parse = parse
exports.fetch = fetch