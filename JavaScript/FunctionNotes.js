// FUNCTION NOTES
// Definition: A JavaScript function is a reusable block of code designed to perform a particular task.
// Note: 'invoking' or 'calling' a function makes it execute its code, this is done by having parenthesis after the function name ( example() )
// Note: A function can be called many times, each time with an output based on arguments that are passed in

// Why even use a function?
    // Reduces amount of code that is required
        // This is helpful for a few reasons:
            // Reduces potential for error
            // Simplifies our programs 
            // Gives potential for upgrades & changes 

// Note: functions dont inherently write to the CLI, we still need to console.log the invocation of the function

/* -------------------------------------------------------------------------- */

// Syntax

// Single line syntax (unusual):
     // function name(parameters){return x}
// Multi line syntax:
     // function name(parameters){
         // do something 
         // return something
    // }
// Syntax for invocation with an argument
    // name(arguments)

/* -------------------------------------------------------------------------- */

// PARAMETERS VS ARGUMENTS

// Parameters:
    // A function can require parameters
    // A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
    // The parameters are the values that are between the parenthesis when declaring the function
    // They dont have their own value, they receieve their value from the arguments when the function was called

// Arguments:
    // If a function has parameters, it needs to take in arguments
    // These arguments are passed in teh when the function is called/invoked

/* -------------------------------------------------------------------------- */

// TYPES OF FUNCTIONS

// Basic function
// function functionName (parameters){
//     //tell the function what to do
// }
// functionName(args)

// Anonymous function
// let anonymousFunction = function(params){
//     //tell the fucntion what to do
// }
// anonymousFunction(args)

// Arrow function (ES6)
// let arrowFunction = (params) => {
//     // block of code -> what the function does
// }
// arrowFunction(args)

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLES

// Function Goal: return the sum of two numbers 
// adding -> name of the function
// num1 -> first parameter
// num2 -> second parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// adding(5, 10) -> invoking/calling the function
// the numbers 5 and 10 -> are the arguments 

// function adding (num1, num2){
//     return num1 + num2
// }

// console.log(adding(5, 10)) // 15
// console.log(adding(100, 99)) //199
// console.log(adding(16, 1)) // 17
// console.log(adding(7, 2)) // 9


//  Function Goal: return the string: 'hi Tefe'
// welcome -> function name
// name -> parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// welcome('Tefe') -> calling/invoking the welcome() function with the string 'Tefe'
// 'Tefe' -> argument 
// function welcome (name){
//     // console.log(name)
//     return `hi ${name}`
// }
// console.log(welcome('Tefe')) // hi Tefe
// console.log(welcome('Jasmine')) // hi Jasmine
// console.log(welcome('Eddy')) // hi Eddy


let cities = ['New York City', 'Amsterdam', 'Miami', 'Chicago', 'Madrid', 'London']

// favCities -> name of the function
// individualCity -> parameter
// ${individualCity} -> individualCity is pointing to the individual cities inside the cities array
// cities[0], cities[1], cities[2]... -> represent the individual cities in the cities array
// favCities() -> the invovcation/calling of the favCities() function 

function favCities (individualCity){
 return `My favorite city is ${individualCity}`
}
console.log(favCities(cities[0])) // My favorite city is New York City
console.log(favCities(cities[1])) // My favorite city is Amsterdam
console.log(favCities(cities[2])) // My favorite city is Miami
console.log(favCities(cities[3])) // My favorite city is Chicago
console.log(favCities(cities[4])) // My favorite city is Madrid
console.log(favCities(cities[5])) // My favorite city is London


// fourthCity -> name of the function
// cityArray -> parameter of the fourthcity function
// cityArray[3] -> points to the element 'Chicago' in the cities array
// fourthCity(cities) -> invocation/calling of the fourthCity function
// cities -> argument that you are calling the fourthCity function with


// Declaring the function
function fourthCity(cityArray){
    //  logging the array onto the terminal
    console.log(cityArray)
    //  returning the string 'the fourth city is Chicago'
    return 'the fourth city is ' + cityArray[3];
} 
// invoking the function
console.log(fourthCity(cities)) // the fourth city is Chicago


let computers = ['Mac', 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP']
let weather = ['sunny', 'rainy', 'cloudy', 'snowy']
// Function Goal: Remove the first element in and array
// removeFirstElement -> function name 
// cheese -> parameter
// cheese.shift() -> block of code inside the function that is removing the first element of the cities array
// removeFirstElement(cities) -> invoking/calling the function with the cities array
// cities -> argument we are calling the removeFirstElement function with

// declaring the funciton removeFirstElement the takes in a parameter cheese
function removeFirstElement (cheese){
    // block of code inside the removeFirstElement function that is removing the first element in the array
    cheese.shift()
    // returning the new array 
    return cheese
}
// calling the removeFirstElement funciton with the argument cities
console.log(removeFirstElement(cities)) // [ 'Amsterdam', 'Miami', 'Chicago', 'Madrid', 'London' ]
console.log(removeFirstElement(computers)) // [ 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP' ]
console.log(removeFirstElement(weather)) // [ 'rainy', 'cloudy', 'snowy' ]


// Declare a funciton called myInitials. it takes in two parameters: your firstName and your lastName 
// return your initias 

// Declare a function called removeTheLastElement that takes in a parameter: array
// remove the last element and return the new array 






// Immediately Invoked Function Expression (IIFE)
// Default arguments



// scope 
// global vs local 

