//server.js

var http = require("http");
var url  = require("url");
var reqhandler = require("./RequestHandler");

var serverPort = 9000;

function start(router, handler) {
    function onRequest(request, response)  {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Received request of %s ",pathname);

        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("--- receiving POST data chunk '"+postDataChunk+"'.");
        });

        request.addListener("end", function() {
            router(handler, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(serverPort);
    console.log("__ Server is running on port " + serverPort);
}

exports.start = start;
