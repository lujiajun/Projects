var url = require("url");
var cradle = require("cradle");

function put(response, request) {
    console.log("Request handler 'put' was called.");
    console.log(JSON.stringify({
	major: 'cs',
	sex: 'female',
	occupation: 'PhD',
	favorite_sport: 'running in circles',
	current_goal: 'learn Chinese by the end of semester',
	lucky_numbers: [3, 9, 16, 32,
			'and it changes every time she eats '+
			'another fortune cookie']
    }));
}

function get(response, request) {
    console.log("Request handler 'get' was called.");
    var query = url.parse(request.url, true).query;
    
    var db = new(cradle.Connection)().database('starwars');
    db.get(query.key, function(error, doc) {
	if (error) {
	    response.writeHead(500, {"Content-Type": "text/plain"});
	    response.write('Document Key "' + query.key + '" Not Found.\n');
	    response.end();
	} else {
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(doc + '\n');
	    response.end();
	}
    });
}

exports.put = put;
exports.get = get;