
var express = require('express');
var router = express.Router();
var searchController = require('./../controllers/searchController');

/* GET search a book. */
router.get('/', searchController.search);

module.exports = router;