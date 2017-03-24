var express = require('express');
var router = express.Router();
var auth = require('../config/myauth.js');
var blog = require("../config/blog.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cms_log', {title:'login'});
});


router.post('/login', function(req, res, next) {
  auth.login(req.body, function(user){
    if (res==null){
      res.send("Errou o login");
    }else{
    blog.lerPost(function(posts){
      res.render('cms', {post:posts, title:'adm'})
      });
    }
  });
});

router.post('/newpost', function(req, res, next) {
  blog.newPost(req.body);
  res.redirect('/easycms');
});

router.get('/post/', function(req, res, next) {
  res.render('cms_log', {title:'login'});
});


module.exports = router;
