
var express = require('express');
var router = express.Router();
var searchController = require('./../controllers/searchController');

/* GET search a book. */
router.get('/searchBook', searchController.search);

router.get('/', function (req,res) {
	res.render('index',{ title: 'Express' });
});

module.exports = router;