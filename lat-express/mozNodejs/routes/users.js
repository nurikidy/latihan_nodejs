var express = require('express');
var router = express.Router();


var pahlawan_nasional = [
    'Abdul  Muis',
    'Ki Hadjar Dewantoro',
    'Surjopranoto',
    'Mohammad Hoesni Thamrin',
    'K.H. Samanhudi',
    'H.O.S. Tjokroaminoto',
    'Si Singamangaradja XII',
    'Dr.G.S.S.J.Ratulangi',
    'Dr. Sutomo'
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('latihan_users', { title: 'Pahlawan Nasional', pahlawan: pahlawan_nasional });
});

module.exports = router;
