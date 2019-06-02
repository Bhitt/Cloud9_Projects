/* global $ */


//set of tributes to the creatures
var tributes = [
    "Oh creature in the deep, let me hear your call.",
    "Wondrous terror of the abyss, lend me your whispers.",
    // "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
    "In his house at R'lyeh dead Cthulhu waits dreaming.",
]

var helloResponses = [
    "Hello? This is how you choose to greet the dark and ominous infinite that is I?",
    "Again you mock me, you can do better than a simple Hello",
    "You did not have me at Hello",
    "I'm bored of this one..."
]

var generalResponses = [
    "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
    "I'm bored of this one",
    "You are not worthy",
    "I crave the voice of another",
    "Ask me something more interesting",
    "What do you think is the answer to that",
    "You did not tribute me correctly",
    "You should pay tribute with your life",
    "The dark calls to you",
    "You are not the chosen one",
    "I have seen your fate... it is dark and solemn",
    "You overstep",
    "Every life... ends with us",
    "Never one... without the other",
    "Panic not when life ebbs",
    "Hush now. Rest",
    "They laugh and scream and dance and flee",
    "And everywhere Lamb went... Wolf was sure to follow",
    "Call me king, call me demon - water forgets the names of the drowned",
    "Water water everywhere, nor any drop to drink",
    "I am enthralled by your class and refinement",
    "Your diction is as exemplary as your intellect",
    "I can provide all manner of refuge",
    "The rhythm of your life slows.",
    "I choose not to answer that",
]

var missingTribute = [
    "...",
    "This one mocks me.",
    "I expect better tribute.",
    "...",
    "...",
    "You are not genuine in your appeal",
    "...",
    "A simple gesture of humility, blatantly avoided."
]

var obscenityResponses = [
    "That's not very nice.",
    "Watch yo profanity.",
    "Such cruel harsh words.",
    "...",
    "I know you are but what am I."
]

var whoResponses = [
    "Who do you think I am?",
    "I am the abyss.",
    "I am the infinite.",
    "We are many.",
    "Why should I tell you that?",
    "I am the inhabitant of your dreams.",
    "I am the chills running up your spine.",
    "We are the guardians of the blue.",
    "You could not comprehend my name.",
    "Jörmungandr"
]

//function for random numbers
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//index for tribute set
var tributeIndex = getRandomIntInclusive(0,tributes.length-1);

//onload function to set the tribute quote in placeholder and label
$(function() {
    $("#TributeInput").attr("placeholder",tributes[tributeIndex]);
    $("#TributeText").text("Tribute: " + tributes[tributeIndex]);
});


var sentence ="";
var index = 1;
var isHidden = false;
var isPastBeg = false;
var response = "";
var lollapalooza = false;
var helloC = 0;

//while typing
// $('#TributeInput').bind("input propertychanged", function(){

$('#TributeInput').on('keydown',function(e){
    //check for escape
    if(e.keyCode == 8){
        // e.preventDefault();
        // $('#log').text("Delete/Backspace happened");
        if(sentence.length > 0 && isHidden){
            sentence = sentence.substr(0, sentence.length-1);
            // $("#log").text(sentence.length);
            //$('#sekrets').text(sentence);
            index--;
        }
    }
});

$('#TributeInput').on('keypress', function(e){
    //check for hidden toggle key
    if(e.keyCode == 96){
        // if($('#TributeInput').val().length!=0) isPastBeg = true;
        // else isPastBeg = true;
        //check to see if you are at the beginning of the tribute
        if(isPastBeg){
            //already past the first character so dont swap hidden toggle
            if(isHidden){
                //if the hidden switch has already been toggled, turn it off
                isHidden = !isHidden;
            }else{
                //act natural
            }
        }else{
            //set hidden
            isHidden = !isHidden;
            hidden(e);
            lollapalooza = true;
            return false;
        }
    } else if(isHidden){ //check if current text is hidden
        //check to see if tribute message is over
        if($('#TributeInput').val().length >= tributes[tributeIndex].length){
            //act natural
            isHidden = false;
        }else{ //otherwise keep hiding text
            hidden(e);
            return false;
        }
    } else {
        //act natural
    }
    isPastBeg = true;
});

function hidden(newLet){
    if(newLet.key != "`"){
        sentence += newLet.key;
    }
    $('#TributeInput').val(tributes[tributeIndex].substring(0,index));
    index++;
}

var subButt = $('.subButton');
function subClicked(){
    subButt.attr('onclick','resetP()');
    //check for specific question number 1
    if(!lollapalooza && $('#TributeInput').val() !== tributes[tributeIndex]){
        response = missingTribute[getRandomIntInclusive(0,missingTribute.length-1)];
    } else if(!lollapalooza && helloCheck()){
        response = helloResponses[helloC];
        if(helloC<helloResponses.length-1)helloC++;
    } else if(!lollapalooza && obscenity()){
        response = obscenityResponses[getRandomIntInclusive(0,obscenityResponses.length-1)];
    } else if($('#QuestionInput').val() == 'who are you?' && !lollapalooza){
        response = whoResponses[getRandomIntInclusive(0,whoResponses.length-1)];
    } else if(lollapalooza){
        response = sentence;
    } else {
        //default response
        response = generalResponses[getRandomIntInclusive(0,generalResponses.length-1)];
    }
    //alert(response);
    $('#response').text(response);
    setupResponse(response);
    subButt.text("Reset");
    subButt.removeClass('btn-primary');
    subButt.addClass('btn-info');
}

function helloCheck(){
    var  q = $('#QuestionInput');
    if(q.val() == "hello" || q.val() == "Hello" || q.val() == "Hi" || q.val() == "hi" || q.val() == "Hi, how are you?" || q.val() == 'Hello, how are you?'){
        return true;
    }
    return false;
}
function obscenity(){
    var  q = $('#QuestionInput');
    if(q.val() == "fuck you" || q.val() == "Fuck you" || q.val() == "Fuck You" || q.val() == "Fuck you!" || q.val() == "You suck." || q.val() == "Fuck me"){
        return true;    
    }
    return false;
}

var addState = true;
var inputB = $("#inputStuff");
var outputB = $("#outputStuff");
function toggleHidden(){
    if(!addState) {
        //hide 1
        inputB.animate({height:'toggle', opacity: 'toggle'},350);
        addState = true;
        //show 2
        outputB.animate({height:'toggle', opacity: 'toggle'},350);
    }
    else if(addState) {
        //show 1
        inputB.animate({height:'toggle', opacity: 'toggle'},350);
        addState = false;
        //hide 2
        outputB.animate({height:'toggle', opacity: 'toggle'},350);
    }
    
};

//----------------------------//
//     reset page             //
//----------------------------//
function hideInput(){
    
}

function resetP(){
    tributeIndex = getRandomIntInclusive(0,tributes.length-1);
    $("#TributeInput").val('');
    $('#QuestionInput').val("");
    $("#TributeInput").attr("placeholder",tributes[tributeIndex]);
    $("#TributeText").text("Tribute: " + tributes[tributeIndex]);
    sentence ="";
    index = 1;
    isHidden = false;
    isPastBeg = false;
    response = "";
    lollapalooza = false;
    subButt.attr('onclick','subClicked()');
    subButt.removeClass('btn-info');
    subButt.addClass('btn-primary');
    subButt.text("Inquire");
}

// ------------------------------ //
//     display response           //
// ------------------------------ //
var ul = $('#mysteryText');
function setupResponse(response){
    ul.html("");
    console.log(response);
    for(var i=0;i<response.length;i++){
        if(response.charAt(i)== " "){
            ul.append('<li class="smokeyText" style="animation-delay:'+(i*0.2+1)+'s">&nbsp</li>');
        } else {
            ul.append('<li class="smokeyText" style="animation-delay:'+(i*0.2+1)+'s">'+response.charAt(i)+'</li>');
        }
    }
}


