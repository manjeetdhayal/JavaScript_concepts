// functions can also be used as parameters for another function since they are also behave like 
// any other datatype in javascript

// A HIGHER-ORDER-FUNCTION is a function that can return a function, accept a function as a parameter or can do both!

// Callback => calling a function by its name not including paranthesis
// Invoking => calling a function by its name along with paranthesis it returns a value 

// When we pass a function as argument to another function we dont invoke it. 

//lets see how 

//function to get time required to call a function 

const timeToCallAFunction = (functionParameter) => {
    let timeStart = Date.now(); 
    functionParameter(); 
    let timeEnd = Date.now(); 
    return timeEnd-timeStart; 

}

const multiply = (x,y)=> x*y; 

console.log(timeToCallAFunction(multiply));  //0 as time is very very small 

