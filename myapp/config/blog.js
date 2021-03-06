var schema = require("../models/schema");
var mongoose = require('mongoose');
var Post = schema.Post;

function newPost(body){

  var new_post = new Post(body);
  new_post.save();

}
function listPost(callback){
  Post.find(function(err,res){
    callback(res);
  });
}
function lerPost(titulo, callback){
  Post.findOne({titulo:titulo},function(err,res){
    callback(res);
  });
}

function updatePost(body){
  post={
    titulo:body.titulo,
    tags:body.tags,
    resumo:body.resumo,
    conteudo:body.conteudo
  }
  Post.update({titulo:body.titulo},post, function(err, res){
    console.log(post);
  });

}

module.exports ={
  newPost : function(body){
    newPost(body);
  },
  listPost: function(callback){
    listPost(callback);
  },
  lerPost : function(titulo, callback){
    lerPost(titulo, callback);
  },
  updatePost:function(body){
    updatePost(body);
  }
}
