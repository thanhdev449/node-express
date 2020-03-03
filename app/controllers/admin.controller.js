var adminModel = require('./../models/admin.model');

module.exports.index = async function(req,res,next){
    try {
        await adminModel.find(function(err,data){
            if(err){
                console.log(err);
            }else{
                return res.json({
                    success : true,
                    data : data,
                    error : null
                })
            }
        })
    } catch (error) {
        return res.json({
            success : false,
            error : error.message
        })
    }
};