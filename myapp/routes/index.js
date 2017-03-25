var express = require('express');
var router = express.Router();
var blog = require('../config/blog.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  blog.listPost(function(post){
      console.log(post);
      res.render('index', { title: 'Express', post:post});
  })
});

router.get('/teste', function(req, res, next) {
  console.log(req.query.valor1);
  res.render('index', { title: 'Express' });
});


module.exports = router;
