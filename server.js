var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + "/src"));

app.get('/', function(req, res){
  res.send('index.html');
});

var server = http.createServer(app);

server.listen(3000, function(){
  console.log("Server created on Port: 3000");
});
