var express = require('express');
var router = express.Router();
const CC = require('../controllers/admin/contact');


router.get('/', function(req, res, next){

    res.render('admin/dashboard',{title: 'Dashoboard'});
});


router.get('/contacts', CC.list);
router.get('/contacts/:name', CC.show);
router.get('/contacts/:id/edit', CC.edit);
router.post('/contacts/:id/update', CC.update);
router.get('/contacts/:id/delete', CC.delete);

module.exports = router;