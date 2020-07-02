var express = require("express");
var connection = require('./../config');
 
module.exports.register = function(req,res){
    var curr_time=new Date();
   
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":curr_time,
        "updated_at":curr_time
    }
    connection.query('INSERT INTO users SET ?',users,function(error,results,fields){
        if(error){
            console.log(error);
            res.json({
                status:false,
                message:'Error with query'
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'user registered successfully'
            })
        }
    });
}