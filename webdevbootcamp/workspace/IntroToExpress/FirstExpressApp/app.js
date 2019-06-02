// console.log("Express App goes here");

var express = require("express");
var app = express();

// "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

//Bye-bye
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

//dog
app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /DOG");
    res.send("MEOW");
});

//routing parameters example
app.get("/r/:subredditName", function(req, res){
    // console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!" );
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to the comments page"); 
});

// * default catch for missing links
app.get("*", function(req, res){
    res.send("You are a star");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});