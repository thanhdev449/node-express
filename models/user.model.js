var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email : String,
    name : String,
    password : String,
    address : String,
    age : Number,
    avatar : String,
})

var userModel = mongoose.model('User', userSchema , 'users')

module.exports = userModel;