var express = require("express"),
    router  = express.Router();
    
//ROOT ROUTE
router.get("/", function(req, res){
   res.render("landing");
});

//Test Route
router.get("/test", function(req, res){
   res.render("test"); 
});


//DEFAULT ROUTE
router.get("/*", function(req, res){
   res.render("landing"); 
});



//KEEP THIS LAST
module.exports = router;