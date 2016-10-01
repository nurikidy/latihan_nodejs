var express = require('express');
var router = express.Router();

function getRandom() {
    return Math.random() * 100;
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var randomNumber = getRandom();
    res.render('latihan_index', { title: 'Express', acak: randomNumber });
});

module.exports = router;
