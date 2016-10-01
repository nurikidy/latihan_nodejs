/**
 * router.js
 */

 function route(handler, pathname, response, data) {
     console.log("Routing request to "+pathname)
     /*
     console.log("-----DEBUG-----");
     console.log(handler);
     console.log("-----DEBUG-----");
     */
     if (typeof handler[pathname] === 'function') {
         handler[pathname](response, data);
     } else {
         console.log("=>>>> Undefined handler %s <<<<=", pathname);
         response.writeHead(404, {"Content-Type":"text/plain"});
         response.write("404 Not Found");
         response.end();
     }
 }

 exports.route = route;
