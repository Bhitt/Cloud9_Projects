var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});


var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the db
    // var george = new Cat({
    //     name: "Mrs. Norris",
    //     age: 7,
    //     temperament: "Evil"
    // });
    
    // george.save(function(err, cat){
    //     if(err){
    //         console.log("SOMETHING WENT WRONG");
    //     }else{
    //         console.log("WE JUST SAVED A CAT TO THE DB:");
    //         console.log(cat);
    //     }
    // });
    
    // Cat.create({
    //   name:"Draco",
    //   age: 4,
    //   temperament: "Shifty"
    // }, function(err, cat){      //function call-back part did not work but all else did ?!?
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(cat);
    //     }
    // });

//retrieve all cats from the db and console.log each one
Cat.find({},function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    }else{
        console.log("All the cats....");
        console.log(cats);
    }
});
