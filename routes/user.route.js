var express = require('express');

var controller = require('../controllers/user.controller');

var db = require('../db');

var validate = require('../validate/user.validate');

var authMiddleware = require('../middlewares/auth.middlewares');

var router = express.Router();

router.get('/',controller.index);

router.get('/cookie',function(req,res,next){
   res.cookie('user-id',123456);
   res.send('Hello');
});

router.get('/search',controller.search);

router.get('/create',controller.create);

router.get('/:id',controller.get);

router.post('/create',validate.postCreate,controller.postCreate);

module.exports = router;