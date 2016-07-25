const https = require('https');

var options = {
  hostname: 'https://www.googleapis.com/books/v1/volumes?q=Harry+Potter',
  method: 'GET'
};

var SearchController = {
	search: function (req,res) {

		https.get('https://www.googleapis.com/books/v1/volumes?q=Harry+Potter', (response) => {
			console.log('statusCode: ', response.statusCode);
			console.log('headers: ', response.headers);


			response.on('data', (d) => {
				res.send(process.stdout.write(d));
			});
		});

	}
}

module.exports = SearchController;
