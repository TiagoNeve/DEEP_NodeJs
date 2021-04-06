const http = require('http')
var routes = {
    '/': function index(req, res) {
        res.writeHead(200);
        res.end('Hello, World');
    },
    '/foo': function foo(req, res) {
        res.writeHead(200);
        res.end('Estamos na seção de view');
    }
}

http.createServer((req, res) => {
    if (req.url in routes) {
        return routes[req.url](req, res);
    }

    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(3000);