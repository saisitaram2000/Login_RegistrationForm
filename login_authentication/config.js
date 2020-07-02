var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'login'
});
connection.connect(function(err){
    if(!err){
        console.log("Database is connected");
    }else{
        console.log("error while connecting with database");
    }
});
module.exports = connection;