var http = require('http');
var url = require('url');

// var hostname = 'weightwatcher.vagrant.f8';
var hostname = '172.17.0.13';
// var port = 80;
var port = 8080;
var path = '/kie-server/services/rest/server/containers/instances/watch';
var method = 'POST';
var username = 'erics';
var password = 'jbossbrms1!';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var options = {
	hostname : hostname,
  	port : port,
  	path : path,
  	username : username,
  	password : password,
  	method : method,
  	headers : {
  		'Authorization' : auth,
  		'Content-Type' : 'application/xml',
  		'X-KIE-ContentType' : 'XSTREAM',
  	}
};

var body = '';

http.createServer(function (req, res) {

	body = '';

	var postReq = http.request(options, function(res) {
  		console.log('Status: ' + res.statusCode);
  		console.log('Headers: ' + JSON.stringify(res.headers));
  		res.setEncoding('utf8');
  		res.on('data', function (body) {
  		});
	});

    req.on('data', function (chunk) {
      body += chunk.toString();

		  console.log('===> Posting to weightwatcher');
		  // write data to request body
		  postReq.write( body );
		  postReq.end();

    });

	postReq.on('error', function(e) {
  		console.log('Problem with post request: ' + e.message);
	});


  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Thankyou & Goodbye');

}).listen(9090);

console.log('Server running at http://localhost:9090/');
