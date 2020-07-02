var express = require("express");
var bcrypt = require("bcrypt");
var connection = require('./../config');
 
module.exports.register = function(req,res){
    var curr_time=new Date();
    const saltRounds=10;
   bcrypt.hash(req.body.password,saltRounds,function(err,hashedPassword){

    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":hashedPassword,
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
           const markup=`
            <h1>Hey ${users.name}, you have successfully registered</h1>
           `;
           res.send(markup);
        }
    });
   });
   
  
}