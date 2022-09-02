var express = require('express');
var router = express.Router();
const Contact = require('../models/contacts');
const CC = require('../controllers/contact');

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

router.get('/contacts', CC.list);
router.get('/contacts/:name', CC.show);
router.get('/contacts/:id/edit', CC.edit);
router.get('/contacts/:id/delete', CC.delete);

// mongod // for server start
// mongo // for mongo client

// MVC = Model, View, Controller
module.exports = router;
