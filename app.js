var socketio = require('socket.io');
var express = require('express');

var app = express();

//call ejs
app.set("views", __dirname + "/apps/views");
app.set("view engine" , 'ejs');

app.get("/", function(req,res){
  res.render("chat.ejs");
})

var server = app.listen (3000, function(){
  console.log('running port 3000');
});

var io = socketio(server);
var socketcontroll = require("./apps/controllers/socketcontrol")(io);
