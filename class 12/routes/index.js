var express = require('express');
var router = express.Router();
const Contact = require('../models/contacts');

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

router.post('/contact', function(req, res, next) {
  const body = req.body;
  const contact = new Contact(body);
  contact.save();
  res.json(contact);
});

router.get('/contacts', async function(req, res, next) {
  const contacts = await Contact.find();
  res.json(contacts);
});

// mongod // for server start
// mongo // for mongo client


module.exports = router;
