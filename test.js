var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    var q = url.parse(req.url, true).query
    var text = q.year + " " + q.month
    res.send(text)
}).listen(8080)