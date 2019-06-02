var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm6.staticflickr.com/5694/21041875770_ffea6404d0.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://farm5.staticflickr.com/4176/34533122526_13d698e62a.jpg",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "blah blah blah"
    }
]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added a campground");
                   //create a comment
                   Comment.create(
                       {
                           text: "This place is great, but I wish there was internet",
                           author: "Homer"
                       },function(err, comment){
                           if(err){
                               console.log(err);
                           } else{
                               campground.comments.push(comment);
                               campground.save();
                                console.log("created new comment");  
                           }
                       });
               }
            });
        });
    });
    
}


module.exports = seedDB;