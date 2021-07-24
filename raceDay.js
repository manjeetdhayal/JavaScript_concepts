let raceNumber = Math.floor(Math.random() * 1000); //assigning a race number


let registerEarly = false; 

let runnerAge = 18; // can be changed later
let runTime; 
if(registerEarly && runnerAge >18) {
    raceNumber +=1000; 
}

if(registerEarly && runnerAge >18) {
       console.log('Early adults run at 9:30 AM'); 
}  else if( runnerAge>18) {
    console.log('Late adult run at 11:00 AM');
}

else if(runnerAge<18){
    console.log('Youth registrants run at 12:30 PM');
}

else {
    console.log('see the registration desk'); 
}