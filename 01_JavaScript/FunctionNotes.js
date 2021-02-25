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

// SYNTAX

// // // Multi line syntax:
//     function functionName(parameters){
//         //  do something 
//         //  return something
//     }
// // Syntax for invocation with an argument
//     console.log(functionName(arguments))


// Single line syntax (unusual):
    // function functionName(parameters){return x}
/* -------------------------------------------------------------------------- */

// PARAMETERS VS ARGUMENTS

// Parameters:
    // A function can require parameters
    // A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
    // The parameters are the values that are between the parenthesis when declaring the function
    // They dont have their own value, they receieve their value from the arguments when the function was called

// Arguments:
    // If a function has parameters, it needs to take in arguments
    // These arguments are passed in the funtion when the function is called/invoked


/* -------------------------------------------------------------------------- */
// Default Parameters

// function defaultArg(param = 1){
//     return param
// }
// console.log(defaultArg())

// function noMiddleName (firstName, middleName, lastName = ' '){
//     return firstName[0] + middleName[0] + lastName[0]
// }

// console.log(noMiddleName('Manami','Ueda')) // MU
// console.log(noMiddleName('Manami', 'Chris', 'Ueda')) // MCU

/* -------------------------------------------------------------------------- */

// TYPES OF FUNCTIONS

// Basic function
// function functionName (parameters){
//     // tell the function what to do
// }
// functionName(args)

// Anonymous function
// let anonymousFunction = function(params){
//     //tell the fucntion what to do
// }
// anonymousFunction(args)

// // Arrow function (ES6)
// let arrowFunction = (params) => {
//     // block of code -> what the function does
// }
// arrowFunction(args)

/* -------------------------------------------------------------------------- */
// Immediately Invoked Function Expression (IIFE)
// var iifeExample = 'This is a string;';

// console.log(function(param){
//     return param.replace(/ /g,'-');
// }(iifeExample)); // This-is-a-string;

// // IIFE for ES6

// console.log(((param) => {
//     return param.replace(/ /g,'-');
// })(iifeExample)); // This-is-a-string;

// // IIFE without parameters, using ES6 and is anonymous

// console.log((() => {
//     return 'IIFE'
// })()); // IIFE

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLE 1

// Function Goal: return the sum of two numbers 
// adding -> name of the function
// num1 -> first parameter
// num2 -> second parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// adding(5, 10) -> invoking/calling the function
// the numbers 5 and 10 -> are the arguments 

// function adding (num1, num2){
//     // console.log(num1) 
//     // console.log(num2) 
//     return num1 + num2 
// }

// console.log(adding(100, 99)) //199
// console.log(adding(5, 10)) // 15
// console.log(adding(16, 1)) // 17
// console.log(adding(7, 2)) // 9

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLE 2

//  Function Goal: return the string: 'hi Tefe'
// welcome -> function name
// name -> parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// welcome('Tefe') -> calling/invoking the welcome() function with the string 'Tefe'
// 'Tefe' -> argument 

// function welcome (name){
//     return `hi ${name}`
// }

// console.log(welcome('Tefe')) // hi Tefe
// console.log(welcome('Jasmine')) // hi Jasmine
// console.log(welcome('Eddy')) // hi Eddy

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLE 3

// let cities = ['New York City', 'Amsterdam', 'Miami', 'Chicago', 'Madrid', 'London']

// favCities -> name of the function
// individualCity -> parameter
// ${individualCity} -> individualCity is pointing to the individual cities inside the cities array
// cities[0], cities[1], cities[2]... -> represent the individual cities in the cities array
// favCities() -> the invovcation/calling of the favCities() function 

// let americanCities = ['Denver', 'LA', 'Las Vagas', 'Albany', 'Chicago', 'Philly', 'Buffalo']

// function favCities (individualCity){
//  return `My favorite city is ${individualCity}`
// }
// console.log(favCities(cities[0])) // My favorite city is New York City
// console.log(favCities(cities[1])) // My favorite city is Amsterdam
// console.log(favCities(cities[2])) // My favorite city is Miami
// console.log(favCities(cities[3])) // My favorite city is Chicago
// console.log(favCities(cities[4])) // My favorite city is Madrid
// console.log(favCities(cities[5])) // My favorite city is London

// console.log(favCities(americanCities[0])) // My favorite city is Denver
// console.log(favCities(americanCities[3])) // My favorite city is Albany

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLE 4

// fourthCity -> name of the function
// cityArray -> parameter of the fourthcity function
// cityArray[3] -> points to the element 'Chicago' in the cities array
// fourthCity(cities) -> invocation/calling of the fourthCity function
// cities -> argument that you are calling the fourthCity function with

// let candies = ['skittles', 'candy corn', 'smarties', 'reeses', 'snickers', 'mounds']

// // Declaring the function
// function fourthCandy(candyArray){
//     //  logging the array onto the terminal
//     console.log(candyArray)
//     //  returning the string 'the fourth candy is Chicago'
//     return 'the fourth candy is ' + candyArray[3];
// } 
// // invoking the function
// console.log(fourthCandy(candies)) // the fourth city is reeses

/* -------------------------------------------------------------------------- */
// FUNCTION EXAMPLE 5

// let computers = ['Mac', 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP']
// let weather = ['sunny', 'rainy', 'cloudy', 'snowy']
// // Function Goal: Remove the first element in and array
// // removeFirstElement -> function name 
// // cheese -> parameter
// // cheese.shift() -> block of code inside the function that is removing the first element of the cities array
// // removeFirstElement(cities) -> invoking/calling the function with the cities array
// // cities -> argument we are calling the removeFirstElement function with

// // declaring the funciton removeFirstElement the takes in a parameter cheese
// function removeFirstElement (cheese){
//     // block of code inside the removeFirstElement function that is removing the first element in the array
//     cheese.shift()
//     // returning the new array 
//     return cheese
// }
// // calling the removeFirstElement funciton with the argument cities
// console.log(removeFirstElement(computers)) // [ 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP' ]
// console.log(removeFirstElement(weather)) // [ 'rainy', 'cloudy', 'snowy' ]







