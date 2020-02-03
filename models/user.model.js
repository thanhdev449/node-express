var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email : String,
    name : String,
    password : String,
    address : String,
    age : Number,
    avatar : String,
},{collection:'user'})

var userModel = mongoose.model('users', userSchema , 'users')

module.exports = userModel;