var http = require("http");
var url = require('url');
var cradle = require('cradle');

function start(route, handle) {
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + "received.");
	route(handle, pathname, response, request);
    }

    var db = new(cradle.Connection)().database('socialgym');
    db.exists(function (err, exists) {
	if (err) {
	    console.log('error', err);
	} else if (exists) {
	    console.log('the force is with you.');
	} else {
	    console.log('database "socialgym" does not exists');
	    db.create();
	}
    });
    
    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}

exports.start = start;
