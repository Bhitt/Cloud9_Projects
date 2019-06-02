var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg"},
    {name: "Granite Hill", image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3319/3493312828_365d80acb7.jpg"},
    {name: "Timber Lane", image: "https://farm6.staticflickr.com/5059/5518252117_d232831997.jpg"},
    {name: "Grizzly Falls", image: "https://farm5.staticflickr.com/4274/34752990060_7825abe206.jpg"},
    {name: "Greed Oaks", image: "https://farm7.staticflickr.com/6082/6142484013_74e3f473b9.jpg"},
    {name: "Mountain Pass", image: "https://farm9.staticflickr.com/8294/7777868526_882af8ae41.jpg"}
    ];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing"); 
});

app.get("/campgrounds", function(req, res){

        
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");
});