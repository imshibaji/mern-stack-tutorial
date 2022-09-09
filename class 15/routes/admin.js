const express = require('express');
const router = express.Router();
const CC = require('../controllers/admin/contact');
const userController = require('../controllers/admin/user');


router.get('/', function(req, res, next){

    res.render('admin/dashboard',{title: 'Dashoboard', user:req.user});
});


router.get('/contacts', CC.list);
router.get('/contacts/:name', CC.show);
router.get('/contacts/:id/edit', CC.edit);
router.post('/contacts/:id/update', CC.update);
router.get('/contacts/:id/delete', CC.delete);

router.get('/users', userController.list);
router.get('/users/show/:name', userController.show);
router.get('/users/add', userController.add);
router.post('/users', userController.create);
router.get('/users/:id/edit', userController.edit);
router.post('/users/:id/update', userController.update);
router.get('/users/:id/delete', userController.delete);


module.exports = router;