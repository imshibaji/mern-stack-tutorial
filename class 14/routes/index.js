var express = require('express');
var router = express.Router();
const CC = require('../controllers/admin/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MERN Stack Course' });
});

router.get('/about', function(req, res, next) {
  res.render('page', { title: 'About Page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact', CC.create);


// mongod // for server start
// mongo // for mongo client

// MVC = Model, View, Controller
module.exports = router;
