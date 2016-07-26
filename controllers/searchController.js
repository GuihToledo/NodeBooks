const https = require('https');

var SearchController = {
	search: function (req,res) {
		console.log('param: ' + req.query.q);
		https.get('https://www.googleapis.com/books/v1/volumes?q=' + req.query.q, (response) => {

			console.log('statusCode: ', response.statusCode);

			var body = '';

			response.on('data', function(chunk) {
				body += chunk;
			});

			response.on('end', function(){
				var fbResponse = JSON.parse(body);
				console.log("Got a response: ", fbResponse);
				res.json(fbResponse);
			});

		}).on('error', function(e){
      		console.log("Got an error: ", e)
		});


	}
}

module.exports = SearchController;
