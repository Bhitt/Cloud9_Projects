var express = require("express"),
    app     = express(),
    socketio = require('socket.io');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
   res.render("index.ejs"); 
});

//start the server and listen for requests
var server = app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Socket test server has started"); 
});

var io = socketio(server);


io.sockets.on('connection', (socket) => {
    console.log("Client has connected with id: " + socket.id);
    
    socket.on('disconnect', () => {
    	console.log("Client has disconnected with id: " + socket.id);
    });
});