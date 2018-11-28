//*.************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST UfSING console.log()!!! ******************
//
//GLOBAL VARIABLES
/*  global $*/

$("#shoot").click(function(){
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
     }
     
     
     
     
     
     $("#result").text(winner);
 });



// DOCUMENT READY FUNCTION BELOW

