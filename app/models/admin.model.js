var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var adminSchema = mongoose.Schema({
    email : {
        type : String, required : [true ,'Email is required']
    },
    name : {
        type : String, required : [true ,'Name is required']
    },
    password : {
        type : String, required : [true ,'Password is required']
    },
    address : String,
    age : Number,
    avatar : String,
    api_token : String,
    role : Number
});

var adminModel = mongoose.model('admins',adminSchema);

module.exports = adminModel;

