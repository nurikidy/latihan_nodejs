var server = require("./server");
var router = require("./router");
var reqHandler = require("./requestHandler");

// definining the request handler
var handler = {};
handler["/"]       = reqHandler.start;
handler["/start"]  = reqHandler.start;
handler["/upload"] = reqHandler.upload;

// calling the server with request router and its handler as arguments
server.start( router.route, handler );
