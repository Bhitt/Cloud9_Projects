var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");

//INDEX - Show all campgrounds
router.get("/", function(req, res){
    //Get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            // res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});  //sends the current user info to this specific page, overwritten at top to send to every page for header
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});


//CREATE - add new campground to db
router.post("/", isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description:desc};
    //Create a new campground and save to the db
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
            console.log(err);
       }else{
            res.redirect("campgrounds");
       }
    });
    //redirect back to campgrounds page
});



//NEW - show form to create a new campground
router.get("/new", isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});




//SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with the provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
});

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;