//declaring a function 

//fucntion function_name(parameter) {functoin body}

//passing default values to a function

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

//output: 
// Remember to buy milk
// Remember to buy bread
// Remember to buy eggs

//  function must returns a value otherwise it prints undefined; 

function rectangleArea(width, height) {
    let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined


function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);


//Helper functions

// We can also use the return value of a function inside 
// another function.These functions being called within 
// another function are often referred to as helper 
// functions

//function that converts the temperature form celsius to gahrenheit

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59

  //another example let for above monitor function calculate the cost monitorCount*price

  function costOfMonitors(rows, columns) {
    return (monitorCount(rows, columns)*200)
  }
  
  const totalCost = costOfMonitors(5,4); 
  console.log(totalCost); //returns 4000

  //function expressions => mostly function name is omitted and called anonymous function (without a name)
  // function expression is usually stored in a variable to refer it. 

  const calculateArea = function (width, height) {
      const area= width* height ; 
      return area; 
  }

  //to invoke a anonymous function 
//variableName(parameters) 
 console.log(calculateArea(3,2)) ; //outputs 6

 //example 2 

 const plantNeedsWater = function(day) {
    if(day==='Wednesday') {
      return true; 
    }
    else return false; 
  }
  console.log(plantNeedsWater('Tuesday')); // false

  //Arrow functions => fat arrow notation 

  const rectangleAreaUsingAnonymousFunction = (width, height) => {
    let area = width * height;
    return area;
  };

  // varible_declaration Name = (parameters) => {statements; }
  //other notations 
  //in case of single parameter

  const greet= nameUser => {console.log(`Hello, ${nameUser}`); }
  greet('Manjeet'); //Hello, Manjeet

  //in case of signle return value 

  const sum=(a,b)=> a+b; 
  console.log(sum(1,2)); //3
  
  