//*.************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST UfSING console.log()!!! ******************
//
//GLOBAL VARIABLES
/*  global $*/

$("#shoot").click(function(){
     var tie
     var computerChoice 
     var userChoice = $("#input").val();
     $("#userChoice").text(userChoice);
     var randomNumber = Math.random();
     if(randomNumber<0.333){
         computerChoice="rock";
     } else if(randomNumber>0.333 && randomNumber<0.666){
          computerChoice="scissors"; 
     } else{
          computerChoice="paper";
     }
     $("#computerChoice").text(computerChoice);
     
     if(userChoice==="rock" && computerChoice==="paper"){
          var winner="computer wins";
     }else if (userChoice==="paper" && computerChoice==="rock"){
          winner="user wins";
     } else if (userChoice==="paper" && computerChoice==="paper"){
          var tie ="computer and user lose";
     }else if (userChoice==="rock" && computerChoice==="rock"){
           tie ="computer and user lose";
          
     $("#result").text(winner)();
     }
       $("#result").text(tie)();
});


// DOCUMENT READY FUNCTION BELOW

