var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
		username: String,
		password: String,
    privilegio: Number
});

var postSchema = mongoose.Schema({
	titulo:String,
	tags:String,
	resumo:String,
	conteudo:String
});

module.exports ={
	 User : mongoose.model('User', userSchema),
	 Post : mongoose.model('Post', postSchema)
}
