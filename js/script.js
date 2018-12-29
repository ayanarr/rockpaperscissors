//*.************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST UfSING console.log()!!! ******************
//
//GLOBAL VARIABLES
/*  global $*/

$("#shoot").click(function(){
     var winner;
     var computerChoice;
     var userChoice = $("#input").val();
     $("#userChoice").text(userChoice);
     var randomNumber = Math.random();
     if(randomNumber<0.333){
         computerChoice="rock";
     } else if(randomNumber>0.333 && randomNumber<0.666){
          computerChoice="scissors"; 
     } else
        {computerChoice="paper";
     }
     $("#computerChoice").text(computerChoice);
     
     if(userChoice==="rock" && computerChoice==="paper"){
           winner="computer wins";
     }else if (userChoice==="paper" && computerChoice==="rock"){
          winner="user wins";
     }else if (userChoice==="scissors" && computerChoice==="paper"){
          winner="user wins";
     }else if (userChoice==="paper" && computerChoice==="scissors"){
          winner="computer wins";
     } else if (userChoice==="paper" && computerChoice==="paper"){
          winner="computer and user lose";
     }else if (userChoice==="rock" && computerChoice==="rock"){
           winner ="computer and user lose";
     }else if (userChoice==="rock" && computerChoice==="scissors"){
          winner="user wins";
     }else if (userChoice==="scissors" && computerChoice==="rock"){
          winner="computer wins";
     }else if (userChoice==="scissors" && computerChoice==="scissors"){
          winner="computer and user lose";
}
 $("#result").text(winner);
});


// DOCUMENT READY FUNCTION BELOW

