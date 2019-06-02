function average(allNums){
    //loop through and add all the stored numbers together
    var sum=0;
    allNums.forEach(function(num){
        sum+=num;
    });
    //divide by the amount of numbers
    var avg = sum/allNums.length;
    //round average
    return Math.round(avg);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));