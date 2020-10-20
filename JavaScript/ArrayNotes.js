// ARRAY NOTES

// Definition: Arrays are comma seperated lists of indexed information, they are surrounded by square brackets, can contain any data type, and are secretly actually objects. 

// Elements: values inside an array

/* -------------------------------------------------------------------------- */


// Array.isArray()
// console.log(Array.isArray([1, 2, 3])) //true
// console.log(Array.isArray(7)) //false 

let randomArray = [0, false, true, 8, 'hi', '', 700, 'hello']
// console.log(randomArray)

/* -------------------------------------------------------------------------- */

// Indexing using bracket notation: array[i]
// Definition: get specific elements from within an array by using bracket notation

let testScores = [100, 80, 56, 75, 68, 99, 90]

// console.log(testScores[2]) // 56
// console.log(testScores[0]) // 100
// console.log(testScores[testScores.length - 1]) // 90
// console.log(testScores[6])

/* -------------------------------------------------------------------------- */

// .length
// console.log(testScores.length) // 7

/* -------------------------------------------------------------------------- */

// .indexOf()
// console.log(testScores.indexOf(80)) // 1
// console.log(testScores.indexOf(90)) // 6

/* -------------------------------------------------------------------------- */

// .pop() definition: removed the last element inside the array
let scores = [100, 80, 56, 75, 68, 99, 90]
let cars = ['toyota', 'bmw', 'honda', 'fiat', 'kia', 'range rover']
// console.log(scores.pop()) // 90
// console.log(scores) // [ 100, 80, 56, 75, 68, 99 ]
// console.log(scores)
// console.log(scores.pop()) // 99
// console.log(scores)
// console.log(scores.pop()) // 68
// console.log(scores)

/* -------------------------------------------------------------------------- */

// .push() definition: method adds one or more elements to the end of an array and returns the new length of the array.
console.log(scores)
scores.push(99, 90, 80)
console.log(scores)
console.log(cars)
cars.push('tesla')
console.log(cars)




























// ARRAY METHODS

// .shift()
// .unshift()
// .join()
// .splice()
// .splice()


