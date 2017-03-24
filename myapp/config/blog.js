var schema = require("../models/schema");
var mongoose = require('mongoose');
var Post = schema.Post;

function newPost(body){
  var new_post = new Post(body);
  new_post.save();
}
function lerPost(callback){
  Post.find(function(err,res){
    console.log(res);
    callback(res);
  });
}
module.exports ={
  newPost : function(body){
    newPost(body);
  },
  lerPost: function(callback){
    lerPost(callback);
  }
}
