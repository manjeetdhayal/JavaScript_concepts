// In this project we will build the Magic Eight Ball using control flow in JavaScript.

// The user will be able to input a question, then our program will output a random fortune.

//declaring a var to get userName 
let userName = 'Manjeet'; 
//ternary operator to greet user
userName?console.log(`Hello, ${userName}`) : console.log('Hello'); 

let userQuestion = 'question user want to ask'; 

console.log(`${userName} has asked the following question`);

// to generate a rendom Integer between 0,7; 
const randomNumber= Math.floor(Math.random()*8);

let eigthBall='' ; 

switch(randomNumber) {
    case 0: 
        eightBall = 'Signs points to yes';
        break;
    case 1:
        eightBall = 'It is certain';   
        break;
    case 2:
        eightBall = 'It is decidedly so';   
        break;
    case 3:
        eightBall = 'Reply Hhazy try again';   
        break;
    case 4: 
        eightBall = 'Cannot predict now';
        break;
    case 5: 
        eightBall = 'Do not count on it'; 
        break; 
    case 6: 
        eightBall = 'My sources say no'; 
        break; 
    case 7: 
        eightBall = 'Outlook not so good'; 
        break; 
    
}

// to console the value of the eight ball

console.log(eigthBall); 
