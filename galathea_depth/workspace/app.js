var express = require("express"),
    app     = express();
    // mongoose= require("mongoose");



//routes
var indexRoutes = require("./routes/index.js");

//setup
// mongoose.connect("mongodb://localhost/galathean_depth");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//use routes
app.use("/", indexRoutes);
// app.get("/", function(req,res){
//   res.render("landing"); 
// });


//server starts here
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Galathean Depth server has started"); 
});