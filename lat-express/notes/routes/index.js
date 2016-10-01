var express = require('express');
var router = express.Router();

var notes = require('../models/notes');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'NodeNotes',
        notes: notes
    });
});

module.exports = router;
