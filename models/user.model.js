var mongoose = require('mongoose');

var userSchema = new mongooge.Schema({
    email:String,
    password:String,
    name:String,
    avatar: String,
    phone:String
});

var User = mongoose.model('User',userSchema,'users');

module.exports = User;