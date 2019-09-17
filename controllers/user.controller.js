module.exports.index = function(req,res,next){
    res.send('hello world');
}

module.exports.create = function(req,res,next){
    res.send('hello world1');
}

module.exports.postCreate = function(req,res,next){
    res.send('hello world2');
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

