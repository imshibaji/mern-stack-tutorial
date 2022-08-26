var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MERN Stack Course' });
});

router.get('/about', function(req, res, next) {
  res.render('page', { title: 'About Page' });
});

router.get('/contact', function(req, res, next) {
  res.render('page', { title: 'Contact Page' });
});


module.exports = router;
