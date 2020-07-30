var express = require("express");
var bodyParser = require('body-parser');
var connection = require('./config');
var app = express();
var path=require('path');

var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+"/public")));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.get('/login.html',function(req,res){
    res.sendFile(__dirname+"/login.html");
})


app.post('/register',registerController.register);
app.post('/authenticate',authenticateController.authenticate);
console.log(authenticateController);

 app.post('/controllers/register-controller', registerController.register);
 app.post('/controllers/authenticate-controller',authenticateController.authenticate);



app.listen(8012);