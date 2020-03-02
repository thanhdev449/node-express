var userModel = require('./../models/user.model');
//var mongoose = require('mongoose');
module.exports.index = async function(req,res,next){
    
    // try {
        
    // } catch (error) {
        
    // }

    userModel.find(function(err,data){
        if (err) {
            console.log(err);
        }
        else{
            let i = 0;
            let dataRes = data.map(res =>{
                i++;
                return {id : res._id,index:i,name:res.name,email: res.email,age: res.age,address: res.address,avatar: res.avatar}
            })
            console.log(dataRes);
            res.render('users/list',{dataUser:dataRes});
        }
    });
}

module.exports.create = function(req,res,next){
    res.render('./users/create');
}

module.exports.postCreate = function(req,res,next){
    //res.send(req.body);
    var status = userModel.create(req.body);
    if (status) {
        res.redirect(200,'/users');
    }
    else{
        res.send('fails');
    }
    
}
module.exports.edit = function(req,res,next){
    userModel.findById({_id:req.params.id_detail},function(err,data){
        if (err) {
            console.log(err)
            console.log(req.params.id_detail);
        }
        else{
            //res.send(data);
            res.render('users/edit',{userDetail:data});
        }
    })
}

module.exports.postEdit = function(req,res,next){
    let data = req.body;
    userModel.findByIdAndUpdate(data.id,data,function(err,re){
        if (err) {
            console.log(err)
        } else {
            res.redirect('/users');
            console.log(re);
        }
    })
}

module.exports.delete = function(req,res,next){
    res.send('hello world5');
}

