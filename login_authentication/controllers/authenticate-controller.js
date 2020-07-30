var bcrypt = require('bcrypt');
var connection = require('./../config');
const { json } = require('body-parser');
var express = require("express");

module.exports.authenticate = function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email],function(error,results,fields){
       // console.log(results);
        if(error){
            res.json({
                status:false,
                message:'error with query'
            })
        }else{
            if(results.length>0){
               bcrypt.compare(password,results[0].password,function(err,doesMatch){
                    if(doesMatch){
                    //     const markup=`
                    //     <center><h1>Welcome back ${results[0].name}</h1></center>;
                    //    `;
                    //    res.send(markup);
                    const path="/mnt/d/workspace/loginform/Login_RegistrationForm/login_authentication";
                  //  console.log(__dirname);
                     res.sendFile(path+"/game1.html");

                    }else{
                        res.json({
                            status:false,
                            message:'Email and password does not match'
                        });
                    }
                    });

               }
        }
    });
}


