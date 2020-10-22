
// Log the type of a number
console.log(typeof 4) // 'number' 
// Log the type of a string 
console.log(typeof 'hello') // 'string'
// Log the type of NaN
console.log(typeof NaN) //'number'
// console.log(typeof 0/-0)

// Using this array: // 
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']

// Check to see if the array fruits is actually an array
console.log(Array.isArray(fruits)) //true
// Log the 4th element in the array
console.log(fruits[4]) //plum
// Log the last element in the array
console.log(fruits.indexOf('watermelon')) // 6 -> the index at where the element 'watermelon' is at 
console.log(fruits.length) // 7 -> how many elements are inside the array? 
console.log(fruits[fruits.length - 1]); // watermelon
// Log the index of 'peach'
console.log(fruits.indexOf('peach')) // 2
// Take out the last element of the array. Log the new array and the last element
console.log(fruits.pop()) // watermelon -> .pop() method evaluates to the last element you pop off the array 
console.log(fruits) // [ 'apple', 'orange', 'peach', 'lemon', 'plum', 'grape' ]
// Add 'banana' to the end of the array. Log the new array and log the element
console.log(fruits.push('banana')); // 7 -> length of the new array 
console.log(fruits) // [ 'apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'banana' ]
console.log(fruits[fruits.length -1 ]) // banana
