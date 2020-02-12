var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var adminSchema = mongoose.Schema({
    email : {type : String, required : true},
    name : {type : String, required : true},
    password : {type : String, required : true},
    address : String,
    age : Number,
    avatar : String,
    api_token : String,
    role : Number
});

var adminModel = mongoose.model('admins',adminSchema);

module.exports = adminModel;

