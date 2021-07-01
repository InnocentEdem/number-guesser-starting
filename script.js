let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10)
}

const compareGuesses = (user,computer,secret)=>{
  if(secret-user<secret-computer||secret-user===secret-computer){
      updateScore('human')
      return true
   }else {
       updateScore('computer')
       return false}
  }

const updateScore=(winner)=>{
    if(winner==="human"){
    humanScore+=1;}
    else{
    computerScore +=1;}

}
function advanceRound(){
    currentRoundNumber+=1
}