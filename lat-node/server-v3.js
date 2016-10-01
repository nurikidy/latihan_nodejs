//server.js

var http = require('http');
var serverPort = 9000;

function start() {
    function onRequest(request, response)  {
        response.writeHead(200, {
            "Content-Type": "text/plain",
            "Server": "SimplyNodeJS/0.0.1 (OSX)"
        });
        //console.log("____ dumping HTTP request\n");
        //console.log(request);
        response.write("Hello World " + Date.now());
        response.end();
    }
    http.createServer(onRequest).listen(serverPort);
    console.log("__ Server is running on port " + serverPort);
}

exports.start = start;
