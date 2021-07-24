
// to check whether user entered a valid input or not
const getUserChoice=userInput=>{
    userInput= userInput.toLowerCase(); 
  if(userInput==='rock' || userInput==='scissors' || userInput=== 'paper' || userInput==='bomb') {
    return userInput; 
  }
  else {
    console.log('Enter a valid input form rock, paper, scissor')
  }
  }
  
  //getUserChoice('rock'); 
  
  //to get a random choice btw 0 and 2 for computer
  function getComputerChoice() {
    let num=Math.floor(Math.random()*2); 
  
   switch(num) {
     case 0: return 'rock' ; 
     break; 
     case 1: return 'paper'; 
     break; 
     case 2: return 'scissors'; 
     break ; 
  
   }
  
  }
  //function to check whether user win, lose or draw 
  const determineWinner=(userChoice, computerChoice) => {
    if(userChoice===computerChoice) {
      return 'game is tie'
    }
    else if( (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock')) {
      return 'user wins' 
    }  
    else return 'user lose' 
    
  }
  
  //console.log(determineWinner('rock', 'paper')); 
  
  //now lets create a function play game 
  
  function playGame() {
    let userChoice = getUserChoice('bomb'); 
    let computerChoice = getComputerChoice(); 
    console.log(`computer choice is ${computerChoice}`); 
  
    //adding secret cheat code 'bomb' i,e, is user enters bomb he wins else play like a normal game 
    if(userChoice==='bomb') 
    {console.log("User win! that's a secret cheat code")}
    else 
   { console.log(determineWinner(userChoice, computerChoice)); }
  }
  
  
  playGame(); 
  
  
