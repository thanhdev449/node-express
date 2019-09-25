var userModel = require('./../models/user.model');

module.exports.index = function(req,res,next){
    var dataUser = userModel.find();
    console.log(dataUser);
    console.log(process.env.MONGO_URI);
    res.render('./users/list');
}

module.exports.create = function(req,res,next){
    res.render('./users/create');
}

module.exports.postCreate = function(req,res,next){
    res.send(req.body);
    console.log(req.body);
}

module.exports.edit = function(req,res,next){
    res.send('hello world3');
}

module.exports.postEdit = function(req,res,next){
    res.send('hello world4');
}

module.exports.delete = function(req,res,next){
    res.send('hello world5');
}

