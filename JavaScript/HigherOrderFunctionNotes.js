// Higher Order Function 
// Definition: a function that can take another function as an argument, or that returns a function as a result.

// Callback Function: a function that is passed as an argument to another function, to be “called back” at a later time


/* -------------------------------------------------------------------------- */

// .forEach()
// Definition: method executes a provided function once for each array element
// Note: You CANNOT return .forEach() Method

// const items = [1, 2, 3]; 
// const items1 = [10, 11, 12]; 


// // OG Function Syntax
// function func(arr) { 
//     const copy = []; 

//     arr.forEach(function (num){ 
//         console.log(num)
//         copy.push(num + num + num + 2); 
//     });   
//     return copy
// } 
// console.log(func(items)); // [ 5, 8, 11 ]
// console.log(func(items1)); // [ 32, 35, 38 ]

// // ES6 Syntax
// function funcFunc(arr) { 
//     const copy = []; 

//     arr.forEach(num => copy.push(num + num + 2));   
//     return copy
// } 
// console.log(funcFunc(items)); // [ 4, 6, 8 ]
// console.log(funcFunc(items1)); // [ 22, 24, 26 ]

/* -------------------------------------------------------------------------- */

// .map()
// definition: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
// You CAN return the .forEach() method

// let numArray = [1, 3, 2, 5, 9, 10]
// let numArray1 = [98, 90, 56]
// let strings = ['Jasmine', 'Eddy', 'Anitria', 'Tauseef', 'D\'aja', 'Maurice', 'Chelsea']

// function multiplyElements(array){
//     return array.map(num => num * 2)
// }

// console.log(multiplyElements(numArray)); // [ 2, 6, 4, 10, 18, 20 ]
// console.log(multiplyElements(numArray1)); // [ 196, 180, 112 ]

// function multiplyIndexByFive(array){
//     return array.map((num, Jasmine) => num ) 
// }
// console.log(multiplyIndexByFive(numArray)) // [ 0, 3, 4, 15, 36, 50 ]
// console.log(multiplyIndexByFive(strings))

// // Recerence this to understand the syntax inside .map() method

// function multiplyByTwo(num){
//     return num * 2
// }
// console.log(multiplyByTwo(3));

/* -------------------------------------------------------------------------- */

// .filter() 
// definition: The filter() method creates a new array with all elements that pass the condition implemented by the provided function.
// You CAN return the .filer() method


// let num = [60, 4, 3, 65, 34, 21, 5]

// function numGreaterThanTen(array){
//     return array.filter(number => number > 10)
// }

// console.log(numGreaterThanTen(num)) // [ 60, 65, 34, 21 ]

// let string = ['Jasmine', 'Eddy', 'Anitria', 'Tauseef', 'D\'aja', 'Maurice', 'Chelsea']

// console.log(string[4])

// function isLengthGreater(array){
//     return array.filter(str => str.length < 6)
// } 
// console.log(isLengthGreater(string)) // [ 'Eddy', 'Daja' ]

/* -------------------------------------------------------------------------- */

// .every() 
// definition: The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// You CAN return the .every() method

// let languages = ['JavaScript', 'Python', 'C++', 'Go', 'C#', 'Java']
// let chars = ['a', 'b', 'python', 'C']

// function lengthOfLanguages(arr){
//     return arr.every(lang => lang.length >= 2)
// }
// console.log(lengthOfLanguages(languages)) // true
// console.log(lengthOfLanguages(chars)) // false

/* -------------------------------------------------------------------------- */

// PRACTICE PROBLEM

// create array of numbers
// use HOF divide the element/currentValue with the index 

/* -------------------------------------------------------------------------- */

// PAIR PROGRAMMING PROBLEMS

// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Lost Without a Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e










