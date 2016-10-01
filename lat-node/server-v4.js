//server.js

var http = require("http");
var url  = require("url");
var reqhandler = require("./RequestHandler");

var serverPort = 9000;

function start(route) {
    function onRequest(request, response)  {
        var pathname = url.parse(request.url).pathname;
        console.log("Received request of "+pathname);
        route(pathname);

        response.writeHead(200, {
            "Content-Type": "text/plain",
            "Server": "SimplyNodeJS/0.0.1 (OSX)"
        });
        response.write("Hello World " + Date.now());
        response.end();
    }
    http.createServer(onRequest).listen(serverPort);
    console.log("__ Server is running on port " + serverPort);
}

exports.start = start;
