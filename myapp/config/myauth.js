var schema = require('../models/schema.js');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/cms');
var User = schema.User;

function isUnique(body){
 // Verificar se o usuario ja existe
  User.findOne({'username':body.username}, function(err, res){
    if(res==null){
    regUser(body);
  }else{
    aviso('Usuario ja existe');
  }
  });
}
function regUser(body){
  //Após ver se o usuario é unico, criar um novo documento do schema USER
  body.segredo = Math.floor((Math.random() * 99999) + 10000);
  console.log('Usuario registrado');
  var new_user = new User(body);
  new_user.save();
}
function loginCorrect(body, callback){
  //Verificar se a senha é compativel com o password
  User.findOne({'username':body.username, 'password':body.password}, function(err, res){
    if(res==null){
      aviso('Campos incorretos');
      callback(null);
    }else{
      callback(res);
    }
  });
}

function hadCookie(cookie, callback){
  //Verificar pelo req.cookies se o usuario ja estava logado
  User.findOne({'_id':cookie}, function(err, res){
    if(res==null){
      aviso('sem cookie');
      callback(null);
    }else{
      cookie_res = {
        username : res.username,
        privilegio: res.privelegio
              }
        // console.log(res);
      callback(cookie_res);
    }
  })
}

function aviso(str){
  return str;
}

module.exports = {
  register : function(body){
    isUnique(body);
  },
  login : function(body, callback){
    loginCorrect(body, callback);
  },
  wasLogged : function(cookie, callback){
    hadCookie(cookie, callback);
  }
}
