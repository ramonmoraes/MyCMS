var express = require('express');
var router = express.Router();
var auth = require('../config/myauth.js');
var blog = require("../config/blog.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.clearCookie('r404rermycms4201410wwt0x477777707729b18x3737keko')
  .render('cms_log', {title:'clear cookie'});
});


router.post('/login', function(req, res, next) {
  auth.login(req.body, function(user){
    if (user==null){
      res.render('cms_log', {title:'errou log'});
    }else{
    blog.listPost(function(posts){
      res.cookie('r404rermycms4201410wwt0x477777707729b18x3737keko', user._id)
        .render('cms', {post:posts, title:'adm',user:user})
      });
    }
  });
});

router.get('/login', function(req, res, next) {
  auth.wasLogged(req.cookies.r404rermycms4201410wwt0x477777707729b18x3737keko, function(user){
    if(user==null){
      res.render('cms_log', {title:'login'});
    }else{
          blog.listPost(function(posts){
        res.render('cms', {post:posts, title:'adm',user:user});
        });
    }
  });
});


router.post('/newpost', function(req, res, next) {
  blog.newPost(req.body);
  res.redirect('/easycms/login');
});

router.get('/post/', function(req, res, next) {
  blog.lerPost(req.query.titulo, function(post){
    res.json(post);
  });

});

router.post('/update_post', function(req, res, next) {
  blog.updatePost(req.body);
  res.redirect('/easycms/login');
});

router.get('/login/delete_posts', function(req, res, next) {
  auth.wasLogged(req.cookies.r404rermycms4201410wwt0x477777707729b18x3737keko, function(x){
    if(x!=null){
    blog.deletePost(req.query.titulo);
    res.redirect('/easycms/login');
  }else{
    res.send("wat");
  }
  });
});

module.exports = router;
