{"filter":false,"title":"campgrounds.js","tooltip":"/YelpCamp/v10/routes/campgrounds.js","undoManager":{"mark":83,"position":83,"stack":[[{"start":{"row":103,"column":0},"end":{"row":121,"column":1},"action":"remove","lines":["function checkCampgroundOwnership(req, res, next){","    if(req.isAuthenticated()){","        Campground.findById(req.params.id, function(err, foundCampground){","            if(err){","                res.redirect(\"back\");","            } else {","                //does the user own the campground?","                if(foundCampground.author.id.equals(req.user._id)){","                    next();","                } else {","                    res.redirect(\"back\");","                }","            }","        });","    } else {","        //if not, redirect","        res.redirect(\"back\");","    }","}"],"id":1}],[{"start":{"row":95,"column":0},"end":{"row":101,"column":1},"action":"remove","lines":["//Middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}"],"id":2}],[{"start":{"row":94,"column":0},"end":{"row":95,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":93,"column":3},"end":{"row":94,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":2,"column":49},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"],"id":6}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"],"id":7}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"],"id":8}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["m"],"id":10}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["i"],"id":11}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["d"],"id":12}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["d"],"id":13}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["l"],"id":14}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"],"id":15}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["w"],"id":16}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["a"],"id":17}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["r"],"id":18}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["e"],"id":19}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[" "],"id":20}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["="],"id":21}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":[" "],"id":22}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["r"],"id":23}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"],"id":24}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["q"],"id":25}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":20},"action":"remove","lines":["req"],"id":26},{"start":{"row":3,"column":17},"end":{"row":3,"column":28},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["."],"id":27}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["."],"id":28}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["/"],"id":29}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["m"],"id":30}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["i"],"id":31}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["d"],"id":32}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["d"],"id":33}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["l"],"id":34}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["e"],"id":35}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["w"],"id":36}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["a"],"id":37}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["r"],"id":38}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":["e"],"id":39}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":["/"],"id":40}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"insert","lines":["i"],"id":41}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"insert","lines":["n"],"id":42}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"insert","lines":["d"],"id":43}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"insert","lines":["e"],"id":44}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"insert","lines":["x"],"id":45}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["x"],"id":46}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["e"],"id":47}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"remove","lines":["d"],"id":48}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"remove","lines":["n"],"id":49}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"remove","lines":["i"],"id":50}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"remove","lines":["/"],"id":51}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"insert","lines":[";"],"id":52}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":53}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":54}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["m"],"id":55}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["i"],"id":56}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["d"],"id":57}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["d"],"id":58}],[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["l"],"id":59}],[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["e"],"id":60}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["w"],"id":61}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["a"],"id":62}],[{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["r"],"id":63}],[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["e"],"id":64}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["."],"id":65}],[{"start":{"row":46,"column":19},"end":{"row":46,"column":20},"action":"insert","lines":["m"],"id":66}],[{"start":{"row":46,"column":20},"end":{"row":46,"column":21},"action":"insert","lines":["i"],"id":67}],[{"start":{"row":46,"column":21},"end":{"row":46,"column":22},"action":"insert","lines":["d"],"id":68}],[{"start":{"row":46,"column":22},"end":{"row":46,"column":23},"action":"insert","lines":["d"],"id":69}],[{"start":{"row":46,"column":23},"end":{"row":46,"column":24},"action":"insert","lines":["l"],"id":70}],[{"start":{"row":46,"column":24},"end":{"row":46,"column":25},"action":"insert","lines":["e"],"id":71}],[{"start":{"row":46,"column":25},"end":{"row":46,"column":26},"action":"insert","lines":["w"],"id":72}],[{"start":{"row":46,"column":26},"end":{"row":46,"column":27},"action":"insert","lines":["a"],"id":73}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":28},"action":"insert","lines":["r"],"id":74}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["e"],"id":75}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["."],"id":76}],[{"start":{"row":69,"column":24},"end":{"row":69,"column":25},"action":"insert","lines":["m"],"id":77}],[{"start":{"row":69,"column":25},"end":{"row":69,"column":26},"action":"insert","lines":["i"],"id":78}],[{"start":{"row":69,"column":26},"end":{"row":69,"column":27},"action":"insert","lines":["d"],"id":79}],[{"start":{"row":69,"column":27},"end":{"row":69,"column":28},"action":"insert","lines":["d"],"id":80}],[{"start":{"row":69,"column":28},"end":{"row":69,"column":29},"action":"insert","lines":["l"],"id":81}],[{"start":{"row":69,"column":29},"end":{"row":69,"column":30},"action":"insert","lines":["e"],"id":82}],[{"start":{"row":69,"column":24},"end":{"row":69,"column":30},"action":"remove","lines":["middle"],"id":83},{"start":{"row":69,"column":24},"end":{"row":69,"column":34},"action":"insert","lines":["middleware"]}],[{"start":{"row":69,"column":34},"end":{"row":69,"column":35},"action":"insert","lines":["."],"id":84}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1504069001664,"hash":"a538f54cd1ac7970702d20e4c52bab25d5e0e2b4"}