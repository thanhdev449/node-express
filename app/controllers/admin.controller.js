var adminModel = require('./../models/admin.model');
var hash = require('password-hash');

module.exports.index = async function(req,res,next){
    try {
        await adminModel.find(function(err,data){
            if(err){
                if (err.name = 'ValidationError') {
                    const message = Object.values(err.errors).map(res => res.message);
                    console.log(`${message}`.red.bold.underline);
                    res.status(400).json({
                        success : false,
                        error  : message,
                    })
                }
            }else{
                return res.status(200).json({
                    success : true,
                    data : data,
                    error : null
                })
            }
        }).exec();
    } catch (error) {
        return res.status(500).json({
            success : false,
            error : 'Server Error'
        })
    }
};

module.exports.doCreate = async function(req,res,next){
    try {
        req.body.forEach(element => {
            element.password = hash.generate(element.password);
        });
        await adminModel.create(req.body,function(err,data){
            if (err) {
                if (err.name == 'ValidationError') {
                    const message = Object.values(err.errors).map(res => res.message);
                    console.log(`${message}`.red.bold.underline);
                    res.status(400).json({
                        success : false,
                        error : message,
                    });
                }
            } else {
                res.status(201).json({
                    data:data,
                    success:true,
                }) 
            }
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            error : 'Server Error',
        });
    }
}