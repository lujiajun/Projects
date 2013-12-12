var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {}
handle["/"] = requestHandlers.start;
handle["/goals"] = requestHandlers.goals;
handle["/friends"] = requestHandlers.friends;
// handle["/put"] = requestHandlers.put;
// handle["/get"] = requestHandlers.get;


server.start(router.route, handle);