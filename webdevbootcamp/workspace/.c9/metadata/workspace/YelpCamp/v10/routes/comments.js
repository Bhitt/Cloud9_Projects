{"filter":false,"title":"comments.js","tooltip":"/YelpCamp/v10/routes/comments.js","undoManager":{"mark":33,"position":33,"stack":[[{"start":{"row":85,"column":0},"end":{"row":104,"column":1},"action":"remove","lines":["","function checkCommentOwnership(req, res, next){","     if(req.isAuthenticated()){","        Comment.findById(req.params.comment_id, function(err, foundComment){","            if(err){","                res.redirect(\"back\");","            } else {","                //does the user own the campground?","                if(foundComment.author.id.equals(req.user._id)){","                    next();","                } else {","                    res.redirect(\"back\");","                }","            }","        });","    } else {","        //if not, redirect","        res.redirect(\"back\");","    }","}"],"id":2}],[{"start":{"row":78,"column":0},"end":{"row":84,"column":1},"action":"remove","lines":["//Middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}"],"id":3}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":3,"column":47},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["var middleware = require(\"../middleware\");",""],"id":6}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["m"],"id":7}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["i"],"id":8}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["d"],"id":9}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":22},"action":"remove","lines":["mid"],"id":10},{"start":{"row":8,"column":19},"end":{"row":8,"column":29},"action":"insert","lines":["middleware"]}],[{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["."],"id":11}],[{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["m"],"id":12}],[{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["i"],"id":13}],[{"start":{"row":21,"column":17},"end":{"row":21,"column":19},"action":"remove","lines":["mi"],"id":14},{"start":{"row":21,"column":17},"end":{"row":21,"column":27},"action":"insert","lines":["middleware"]}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["/"],"id":15}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":["/"],"id":16}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["."],"id":17}],[{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":["m"],"id":18}],[{"start":{"row":47,"column":33},"end":{"row":47,"column":34},"action":"insert","lines":["i"],"id":19}],[{"start":{"row":47,"column":34},"end":{"row":47,"column":35},"action":"insert","lines":["d"],"id":20}],[{"start":{"row":47,"column":32},"end":{"row":47,"column":35},"action":"remove","lines":["mid"],"id":21},{"start":{"row":47,"column":32},"end":{"row":47,"column":42},"action":"insert","lines":["middleware"]}],[{"start":{"row":47,"column":42},"end":{"row":47,"column":43},"action":"insert","lines":["."],"id":22}],[{"start":{"row":58,"column":27},"end":{"row":58,"column":28},"action":"insert","lines":["m"],"id":23}],[{"start":{"row":58,"column":28},"end":{"row":58,"column":29},"action":"insert","lines":["i"],"id":24}],[{"start":{"row":58,"column":29},"end":{"row":58,"column":30},"action":"insert","lines":["d"],"id":25}],[{"start":{"row":58,"column":30},"end":{"row":58,"column":31},"action":"insert","lines":["d"],"id":26}],[{"start":{"row":58,"column":27},"end":{"row":58,"column":31},"action":"remove","lines":["midd"],"id":27},{"start":{"row":58,"column":27},"end":{"row":58,"column":37},"action":"insert","lines":["middleware"]}],[{"start":{"row":58,"column":37},"end":{"row":58,"column":38},"action":"insert","lines":["."],"id":28}],[{"start":{"row":69,"column":30},"end":{"row":69,"column":31},"action":"insert","lines":["m"],"id":29}],[{"start":{"row":69,"column":31},"end":{"row":69,"column":32},"action":"insert","lines":["i"],"id":30}],[{"start":{"row":69,"column":32},"end":{"row":69,"column":33},"action":"insert","lines":["d"],"id":31}],[{"start":{"row":69,"column":33},"end":{"row":69,"column":34},"action":"insert","lines":["d"],"id":32}],[{"start":{"row":69,"column":34},"end":{"row":69,"column":35},"action":"insert","lines":["l"],"id":33}],[{"start":{"row":69,"column":30},"end":{"row":69,"column":35},"action":"remove","lines":["middl"],"id":34},{"start":{"row":69,"column":30},"end":{"row":69,"column":40},"action":"insert","lines":["middleware"]}],[{"start":{"row":69,"column":40},"end":{"row":69,"column":41},"action":"insert","lines":["."],"id":35}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":77,"column":6},"end":{"row":77,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1504069039594,"hash":"ba43bdcc72cc3a18b409b26a900c6fd169742202"}