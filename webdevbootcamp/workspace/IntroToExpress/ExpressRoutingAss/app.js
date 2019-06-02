var express = require("express");
var app = express();

//  greeting page
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!"); 
});

// animal speak
app.get("/speak/:animal", function(req,res){
    // ****THIS IS MY SHIT VERSION****
    // var speak = "something";
    // if(animal === "cow"){
    //     speak = "Moo!";
    // }else if( animal === "pig"){
    //     speak = "Oink!";
    // }else if( animal === "dog"){
    //     speak = "Woof Woof!";
    // }else if( animal === "dragon"){
    //     speak = "Roar!";
    // }else if( animal === "cat"){
    //     speak = "Meow!";
    // }else{
    //     speak = "Gobbledegook";
    // }
    
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        dragon: "Roar",
        cat: "Meow"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'"); 
});

//repeat
app.get("/repeat/:word/:num", function(req, res) {
    var str = "";
    for(var i=0;i<Number(req.params.num);i++){
        str+=req.params.word + " ";
    }
    res.send(str);
});

//default path
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});