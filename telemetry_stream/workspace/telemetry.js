//---------------------------------------//
//               Includes                //
//---------------------------------------//
var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();
    
var teleId = "5af9fd1f85565706d9e3293d";
var switId = "5acd0a399743820a63d5d21e";
    
var requestCounter = 0;
    
//var ObjectID = require('mongodb').ObjectID;

//---------------------------------------//
//                APP CONFIG             //
//---------------------------------------//
mongoose.connect("mongodb://" + process.env.IP + ":" + process.env.PORT + "/telemetry_stream",{ useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});

//----------------------------------------//
//      Schema setup and seeding          //
//----------------------------------------//
var teleSchema = new mongoose.Schema({
    create_date: String,
    heart_bpm: String,
    p_suit: String,
    p_sub: String,
    t_sub: String,
    v_fan: String,
    //t_eva: String,
    p_o2: String,
    rate_o2: String,
    cap_battery: String,
    p_h2o_g: String,
    p_h2o_l: String,
    p_sop: String,
    rate_sop: String,
    t_battery: String,
    t_oxygen: String,
    t_water: String
});

var switchSchema = new mongoose.Schema({
    create_date: String,
    //batterAmpHigh: Boolean,
    //batteryVdcLow: Boolean,
    //suitPressLow: Boolean,
    sop_on : Boolean,
    sspe : Boolean,
    //suitPressHigh: Boolean,
    //o2HighUse: Boolean,
    //sopPressLow: Boolean,
    fan_error : Boolean,
    vent_error : Boolean,
    //co2High: Boolean,
    vehicle_power : Boolean,
    h2o_off : Boolean,
    o2_off : Boolean
});

var Tele = mongoose.model("Tele", teleSchema);
var Swit = mongoose.model("Swit", switchSchema);


// //add new telemetry data to the DB (seed)
        // Tele.create({
        //     create_date: "2018-04-04T20:12:13.965Z",
        //     heart_bpm: "90",
        //     p_suit: "4",
        //     p_sub:  "7.93",
        //     t_sub: "4",
        //     v_fan: "40000",
        //     // t_eva: "00:00:00",
        //     p_o2: "950",
        //     rate_o2: "1.0",
        //     cap_battery: "30",
        //     p_h2o_g: "16",
        //     p_h2o_l: "16",
        //     p_sop: "950",
        //     rate_sop: "1.0",
        //     t_battery: "10:00:00",
        //     t_oxygen: "10:00:00",
        //     t_water: "10:00:00"
        // }, function(err, tele){
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log(tele);
        //     }
        // });
// //add new switch data to the DB (seed)
        // Swit.create({
        //  create_date: "2018-04-04T20:12:13.965Z",
        //  //batterAmpHigh: false,
        //  //batteryVdcLow: false,
        //  //suitPressLow: false,
        //  sop_on : false,
        //  sspe : false,
        //  //suitPressHigh : false,
        //  //o2HighUse : false,
        //  //sopPressLow : false,
        //  fan_error : false,
        //  vent_error : false,
        //  vehicle_power : false,
        //  //co2High : false,
        //  h2o_off : false,
        //  o2_off : false
        // }, function(err, swit){
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log(swit);
        //     }
        // });

//retrieve all Tele data (multiple objects) from the DB
        // Tele.find({}, function(err, teles){
        //     if(err){
        //         console.log("Error: ");
        //         console.log(err);
        //     } else {
        //         console.log("All the tele data....");
        //         console.log(teles);
        //     }
        // });
        
//-------------------------------------------//
//                  ROUTES                   //
//-------------------------------------------//
//INDEX ROUTE
app.get("/", function(req, res){
    Tele.find({}, function(err, teles){
        if(err){
            console.log(err);
        } else {
           Swit.find({}, function(err, swits){
               if(err){
                    console.log(err);
               } else {
                //   console.log("reached");
                    //check if out of range
                    var ranges = tOutR(teles);
                    var ranges2 = sOutR(swits);
                    //send obj
                    var obj = {teles, swits, ranges, ranges2};
                    res.render("index", {obj:obj});
               }
           });
        }
    });
});

//NUMERICAL ROUTE
app.get("/numerical", function (req, res){
    Tele.findOne({'_id':teleId}).exec(function(err, foundTele){     //problems getting findById to work
                if(err){
                    console.log(err);
                } else {
                    var jsonStr = JSON.stringify(foundTele);
                    var simpleStr = "[{\"create_date\":\"2018-04-16T14:56:11.107Z\",\"heart_bpm\":\"86\",\"p_suit\":\"3.99\",\"p_sub\":\"7.98\",\"t_sub\":\"5\",\"v_fan\":\"39960\",\"p_o2\":\"16\",\"rate_o2\":\"0.9\",\"cap_battery\":\"29\",\"p_h2o_g\":\"16\",\"p_h2o_l\":\"15\",\"p_sop\":\"864\",\"rate_sop\":\"1.0\",\"t_battery\":\"9:59:19\",\"t_oxygen\":\"9:59:55\",\"t_water\":\"9:59:55\"}]";
                    res.send(jsonStr);
                    //res.send(simpleStr);
                    //console.log(teles);
                    //console.log(jsonStr);
                    requestCounter++;
                    console.log("Number of Requests: " + requestCounter);
                }
     });
});

//SWITCH ROUTE
app.get("/switch", function(req, res){
    Swit.findOne({'_id':switId}).exec(function(err, foundSwit){     //problems getting findById to work
                if(err){
                    console.log(err);
                } else {
                    var jsonStr = JSON.stringify(foundSwit);
                    res.send(jsonStr);
                    //console.log(teles);
                    //console.log(jsonStr);
                }
     });
})


//DEFAULT GATEWAY
app.get("*", function(req, res){
    res.redirect("/");
});


//------------------------------------//
//           SERVER FUNCTIONS         //
//------------------------------------//

//server start
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
    //run function with delay
    for(var i=1;i<300;i++){
            setTimeout(teleUpdate, 10*i*1000*6);
    }
});

//server update of telemetry
function teleUpdate(){
    console.log("Data Values Updated");
    //using Jorin's telemetry creation
    //create data
    var data = makeTelemetry();
    //update database
    Tele.findByIdAndUpdate(teleId, { $set:
        {
        "p_suit":data.i_suit_p ,
        // "create_date":data.create_date,
        "heart_bpm":data.heart_bpm,
        "p_sub":data.p_sub,
        "t_sub":data.t_sub,
        "v_fan": data.v_fan,
        // "t_eva":sec2Hr(data.t_eva),
        "p_o2":data.p_o2,
        "rate_o2":data.rate_o2,
        "cap_battery":data.cap_battery,
        "p_h2o_g":data.p_h2o_g,
        "p_h2o_l":data.p_h2o_l,
        "p_sop":data.p_sop,
        "rate_sop":data.rate_sop,
        "t_battery":sec2Hr(data.t_battery),
        "t_oxygen":sec2Hr(data.t_oxygen),
        "t_water":sec2Hr(data.t_water)
        } 
        
    }, function(){
            
    });
}

var fanFail = function(i){
        var array = [18000,16000,14000,12000,8000,3500,0000];
            Tele.findByIdAndUpdate(teleId, { $set: { "v_fan": array[i]} }, function(){
                
            });
            console.log("data changed");
}

function DataPoint(name, passMin, passMax, failRate) {
    this.name = name;
    this.passMin = passMin;
    this.passMax = passMax;
    this.status = this._setStatus(failRate); 
    this.value = this._setValue(this.status);
}

//set a passing or failing status based on specified fail rate
DataPoint.prototype._setStatus = function(failRate) {
    const minRng = 0;
    const maxRng = 1e6;
    const randNum = (Math.random() * (maxRng - minRng)) + minRng;
    let threshold = (failRate/100) * maxRng;
    
    if(randNum > threshold) {
        return true;
    } else {
        return false;
    }
 };

 //set a passing or failing value 
DataPoint.prototype._setValue = function(status) {
    //if data point has a passing status
    if(status) {
        return (Math.random() * (this.passMax - this.passMin) + this.passMin).toFixed(2);
    } else {    //if data point has a failing status
        let max = 0;
        let min = 0;
        let value = 0;
        //if lower bound = 0, choose a value between upper bound  & (upperbound * .50) + upperbound                 
        //case where the lower bound can not be less than 0
        if(this.passMin === 0) {
            max = (this.passMax * .50) + this.passMax;
            min = this.passMax;
            value = (Math.random() * (max - min) + min);
            return value.toFixed(2);
        } else {    //for non-zero lower bounds
            //pick a value less than lower bound
            if(Math.random() * 100 < 50) {
                max = this.passMin;
                min = this.passMin - (this.passMin * .50);
                value = (Math.random() * (max-min) + min);
                return value.toFixed(2);
            } else {    //pick a value greater than upper bound
                max = this.passMax + (this.passMax * .50);
                min = this.passMax;
                value = (Math.random() * (max-min) + min);
                return value.toFixed(2);
            }
        }
    }
};

function makeTelemetry() {
    const failRate = 5; //1% fail rate
    const data = [];
    //data.push(new DataPoint('create_date',))
    data.push(new DataPoint('p_suit', 2, 4, failRate));
    data.push(new DataPoint('heart_bpm',85,90,failRate));
    data.push(new DataPoint('p_sub', 2, 4, failRate));
    data.push(new DataPoint('t_sub', 30, 100, failRate)); //investigate actual value ranges
    data.push(new DataPoint('v_fan', 10000, 40000, failRate));
    //data.push(new DataPoint('t_eva', 0, 32400, failRate));
    data.push(new DataPoint('p_o2', 750, 950, failRate));
    data.push(new DataPoint('rate_o2', 0.5, 1, failRate));
    data.push(new DataPoint('cap_battery', 0, 30, failRate));
    data.push(new DataPoint('p_h2o_g', 14, 16, failRate));
    data.push(new DataPoint('p_h2o_l', 14, 16, failRate));
    data.push(new DataPoint('p_sop', 750, 950, failRate));
    data.push(new DataPoint('rate_sop', 0.5, 1, failRate));
    data.push(new DataPoint('t_battery', 0, 36000, failRate));
    data.push(new DataPoint('t_oxygen', 0, 36000, failRate));
    data.push(new DataPoint('t_water', 0, 36000, failRate));

    //an object literal that will hold numerical data point name and corresponding value
    const numericalTelemetry = {};

    for(const element of data) {
        const name = element.name;
        //will create key-pair value for each data point in array
        numericalTelemetry[name] = element.value;
    }

    return numericalTelemetry;
}

function sec2Hr(d){
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}

function tOutR(teles){
    //create obj
    var obj = {
        "range1":"#199cc4", //create_date
        "range2":"#199cc4", //heart_bpm    <- variable names off
        "range3":"#199cc4", //p_sub
        "range4":"#199cc4", //t_sub
        "range5":"#199cc4", //v_fan
        "range6":"#199cc4", //p_o2
        "range7":"#199cc4", //rate_o2
        "range8":"#199cc4", //cap_battery
        "range9":"#199cc4", //p_h2o_g
        "range10":"#199cc4", //p_h20_l
        "range11":"#199cc4", //p_sop
        "range12":"#199cc4", //rate_sop
        "range13":"#199cc4",  //t_battery
        "range14":"#199cc4",  //t_oxygen
        "range15":"#199cc4",  //t_water
        "range16":"#199cc4"
    }
    
    // //change bool if out of range
    teles.forEach(function(tele){
        // if(false) obj.range1 = "#d11010";
        if(tele.heart_bpm < 60 || tele.heart_bpm > 120 ) obj.range2 = "#d11010";
        if(tele.p_suit <2 || tele.p_suit >4) obj.range3 = "#d11010";
        if(tele.p_sub <2 || tele.p_sub > 4) obj.range4 = "#d11010";
        if(tele.t_sub <30 || tele.t_sub >100) obj.range5 = "#d11010";
        if(tele.v_fan <10000 || tele.v_fan >40000) obj.range6 = "#d11010";
        if(tele.p_o2 <750 || tele.p_o2 >950) obj.range7 = "#d11010";
        if(tele.rate_o2 <0.5 || tele.rate_o2 >1) obj.range8 = "#d11010";
        if(tele.cap_battery <0 || tele.cap_battery >30) obj.range9 = "#d11010";
        if(tele.p_h2o_g <14 || tele.p_h2o_g >16) obj.range10 = "#d11010";
        if(tele.p_h2o_l <14 || tele.p_h2o_l >16) obj.range11 = "#d11010";
        if(tele.p_sop <750 || tele.t_sub >950) obj.range12 = "#d11010";
        if(tele.rate_sop <0.5 || tele.rate_sop >1) obj.range13 = "#d11010";
        if(parseH(tele.t_battery) <0 || parseH(tele.t_battery) >10 ) obj.range14 = "#d11010";
        if(parseH(tele.t_oxygen) <0 || parseH(tele.t_oxygen) >10 ) obj.range15 = "#d11010";
        if(parseH(tele.t_water) <0 || parseH(tele.t_water) >10 ) obj.range16 = "#d11010";
        
    });
    return obj;
}

function sOutR(swits){
    //create obj
    var obj = {
        // "range1":"#199cc4", //batterAmpHigh
        // "range2":"#199cc4", //batteryVdcLow
        // "range3":"#199cc4", //suitPressLow
        "range1":"#199cc4", //create_date
        "range2":"#199cc4", //sop_on
        "range3":"#199cc4", //sspe
        // "range6":"#199cc4", //suitPressHigh
        // "range7":"#199cc4", //o2HighUse
        // "range8":"#199cc4", //sopPressLow
        "range4":"#199cc4", //fan_error
        "range5":"#199cc4", //vent_error
        // "range11":"#199cc4", //co2High
        "range6":"#199cc4", //vehicle_power
        "range7":"#199cc4", //h2o_off
        "range8":"#199cc4" //o2_off
    }
    //change bool if out of range
    swits.forEach(function(swit){
        // if(swit.batterAmpHigh == 1) obj.range1 = "#d11010";
        // if(swit.batteryVdcLow == 1) obj.range1 = "#d11010";
        // if(swit.suitPressLow == 1) obj.range1 = "#d11010";
        // if(false) obj.range1 = "#d11010";
        if(swit.sop_on == 1) obj.range2 = "#d11010";
        if(swit.sspe == 1) obj.range3 = "#d11010";
        // if(swit.suitPressHigh == 1) obj.range1 = "#d11010";
        // if(swit.o2HighUse == 1) obj.range1 = "#d11010";
        // if(swit.sopPressLow == 1) obj.range1 = "#d11010";
        if(swit.fan_error == 1) obj.range4 = "#d11010";
        if(swit.vent_error == 1) obj.range5 = "#d11010";
        // if(swit.co2High == 1) obj.range1 = "#d11010";
        if(swit.vehicle_power == 1) obj.range6 = "#d11010";
        if(swit.h2o_off == 1) obj.range7 = "#d11010";
        if(swit.o2_off == 1) obj.range8 = "#d11010";
    });
    return obj;
}

function parseH(timeS){
    var vals = timeS.substring(0, 2);
    return Number(vals);
}