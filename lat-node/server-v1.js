//server.js

var http = require('http');

http.createServer( function (request, response)  {
    response.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "SimplyNode/0.0.1 (OSX)"
    });
    response.write("Hellow World");
    response.end();
}).listen(9000);
