var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm6.staticflickr.com/5694/21041875770_ffea6404d0.jpg",
        description: "Nam viverra tempus felis, non malesuada lacus consectetur in. Nulla luctus ornare ex, a venenatis tellus sollicitudin ut. Morbi id imperdiet nulla, sed tempus mauris. Vivamus vestibulum aliquam lobortis. Maecenas id imperdiet lectus. Suspendisse cursus varius erat, quis tristique nibh posuere ultricies. In hac habitasse platea dictumst. Maecenas accumsan interdum tellus, sit amet aliquam nunc eleifend non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur non nisl non justo fringilla aliquam. Phasellus dignissim iaculis malesuada. Suspendisse condimentum nisi vel ligula sollicitudin euismod. Praesent eleifend elementum tincidunt."
    },
    {
        name: "Desert Mesa",
        image: "https://farm5.staticflickr.com/4176/34533122526_13d698e62a.jpg",
        description: "Nam viverra tempus felis, non malesuada lacus consectetur in. Nulla luctus ornare ex, a venenatis tellus sollicitudin ut. Morbi id imperdiet nulla, sed tempus mauris. Vivamus vestibulum aliquam lobortis. Maecenas id imperdiet lectus. Suspendisse cursus varius erat, quis tristique nibh posuere ultricies. In hac habitasse platea dictumst. Maecenas accumsan interdum tellus, sit amet aliquam nunc eleifend non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur non nisl non justo fringilla aliquam. Phasellus dignissim iaculis malesuada. Suspendisse condimentum nisi vel ligula sollicitudin euismod. Praesent eleifend elementum tincidunt."
    },
    {
        name: "Canyon Floor",
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "Nam viverra tempus felis, non malesuada lacus consectetur in. Nulla luctus ornare ex, a venenatis tellus sollicitudin ut. Morbi id imperdiet nulla, sed tempus mauris. Vivamus vestibulum aliquam lobortis. Maecenas id imperdiet lectus. Suspendisse cursus varius erat, quis tristique nibh posuere ultricies. In hac habitasse platea dictumst. Maecenas accumsan interdum tellus, sit amet aliquam nunc eleifend non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur non nisl non justo fringilla aliquam. Phasellus dignissim iaculis malesuada. Suspendisse condimentum nisi vel ligula sollicitudin euismod. Praesent eleifend elementum tincidunt."
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