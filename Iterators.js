// Iterators help us to loop over a array 
// these are bulit-in JavsScritp methods and easy to use 

// example of Iterators are: 

// .array.forEach(element => {
    
// });

// .map()

// .filter() 

// 1. .forEach() ; 

const arrayForEach = ['Manjeet' , 'Ajay' ,  'Rahul'];

//using arrow functoin    //supplying callback function as a argument to the iterator
arrayForEach.forEach(element => {           
    console.log(`${element} is a good boy` );
}); 
// Output:
// Manjeet is a good boy
// Ajay is a good boy
// Rahul is a good boy


//lets use it by defining a function beforehand

function iterateForEach(element) {
    console.log(element); 
}

arrayForEach.forEach(iterateForEach); //supplying callback function as a argument to the iterator
//Output 
//Manjeet
//Ajay
//Rahul

// .map() function It takes an argument of a callback function and returns a new array!

const numbers= [1,2,3,4,5] ; 
 
// it returns an array so we need to store somewhere
let newArray= numbers.map(number => {
    return number * 10; 
})


// the major Difference between map() and forEach() is that map() returns an array


//.filter() // returns an array of elements by filtering them based on a certain conditions 

const charArray = ['a', 'manjeet' , 'b', 'ajay']; 

const filterArray = charArray.filter(element => {
    return element.length==1; 
})

console.log(filterArray);  // ['a', 'b']
