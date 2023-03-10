const express = require('express');
const router = express.Router();
const multer  = require('multer');

const CC = require('../controllers/admin/contact');
const userController = require('../controllers/admin/user');


const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname.replaceAll(' ','-').toLowerCase())
    }
});
const upload = multer({ storage: storage });

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
router.post('/users', upload.single('image'), userController.create);
router.get('/users/:id/edit', userController.edit);
router.post('/users/:id/update', upload.single('image'), userController.update);
router.get('/users/:id/delete', userController.delete);


module.exports = router;