//server.js

var http = require('http');
var dateFormat = require('dateformat');

function onRequest(request, response)  {
    response.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "SimplyNode/0.0.1 (OSX)"
    });
    console.log("____ dumping HTTP request\n");
    console.log(request);
    response.write("Hellow World");
    response.end();
}

http.createServer(onRequest).listen(9000);
console.log("__ Server is running...");
