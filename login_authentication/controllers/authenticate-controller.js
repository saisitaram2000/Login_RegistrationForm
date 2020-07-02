const fs = require('fs'); //allows to work with filesystem on ur computer
const http = require('http');
const url = require('url');
var connection = require('./../config');
const { json } = require('body-parser');
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
               
                if(password==results[0].password){
                    const markup=`
                     <center><h1>Welcome back ${results[0].name}</h1></center>;
                    `;
                    res.send(markup);
                }else{
                    res.json({
                        status:false,
                        message:'Email and password does not match'
                    });
                }
            }else{
               res.send("Email doesnt exist");
            }
        }
    });
}


