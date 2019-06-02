var express     = require("express");
var router      = express.Router();
var passport    = require("passport");
var User        = require("../models/user");


//Root Route
router.get("/", function(req, res){
    res.render("landing"); 
});


//show register form
router.get("/register", function(req, res){
   res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handle login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect:"/campgrounds",
        failureRedirect: "/login"
        
    }), function(req, res){ //empty callback after middleware
});

//logout route
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success", "Logged You Out!");
    res.redirect("/campgrounds");
});


//JSON Route
router.get("/JSON", function(req,res){

    var obj = {
        name : "Lehr",
        number: 777,
        wisdom: "max"
    };
    var jsonStr = JSON.stringify(obj);
    res.send(jsonStr);
});

//JSON tele Route
router.get("/JSON/telemetry/recent", function (req, res){
    
   var obj = {
        //_id   : {ObjectId(5a8ed9a57eb95cd5d2855904)},
        p_sub : "3",       
        t_sub : "75",      
        v_fan : "20000",      
        t_eva : "00:01:02",
        p_o2  : "850",
        rate_o2 : "0.75",    
        cap_battery : "15",
        p_h2o_g : "15",    
        p_h2o_l : "15",     
        p_sop   : "850",    
        rate_sop: "0.75"
   };
   var jsonStr = JSON.stringify(obj);
   res.send(jsonStr);
   
});

module.exports = router;