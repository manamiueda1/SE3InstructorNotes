// Part 1

// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]


// Problem # 1
// Using the array above, create a function that loops through the array and return a new array with only the odd numbers 

// function onlyOdds (array){
//     let odds = []
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 1){
//             odds.push(array[i])
//         }
//     }
//     return odds
// }
// console.log(onlyOdds(numArray)) // [9, 3, 101, 15, 3]


// Problem # 2
// Using the array above, loop through the array and COUNT the amount of even numbers that are in the array 

// [X] loop through the array numArray
// [X] Create count as a placeholder that holda the count of the even nums
// [X] if element is an even number, add 1 to count every time i hit an even number 

// [12, 0, 8, 50, 8, 4, 2]

// function onlyEvens (array){
//     let count = 0
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             count+=1
//         }
//     }
//     return count
// }
// console.log(onlyEvens(numArray)); // 7

// Problem # 3
// Using the array above, create a function that loops through the array and adds every number that is inside the array. Return the total. 

// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]


// function everyNum (num){
//     let total = 0;
//     for (let i = 0; i< num.length; i++){
//             total += num[i]
//     }
//     return total
// }
// console.log(everyNum(numArray)) // 215


// Part 2

// Problem # 4
// Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array. 
// Otherwise, it will return false. (do not use the built in .includes() method. This function should loop through the array!)

// Examples for problem #4 what the function invocation could look like:

// doesItInclude([40, 7, 8, 23, 43], 23) -> true
// doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false


// function acceptArray(array, value){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i])
//         if (array[i] === value){
//             return true
//         } 
//     }
//         return false
// }

// console.log(acceptArray([40, 7, 8, 23, 43], 23)) // true
// console.log(acceptArray(['kale', 'spinach', 'arugula'], 'iceberg')) //false 


// Part 3

// Problem # 5
// Create a function that accepts an array.
// This function will return a new array with the elements in reverse order


// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

// function backwards (back){
//     let newArray = [] //placeholder
//     for (let i = back.length-1; i >=0 ; i--){
//         newArray.push(back[i])
//     }
//     return newArray
// }

// console.log(backwards(numArray)) // [ 2, 3, 15, 4, 8, 101, 50, 8, 0, 3, 12, 9 ]

// Part 4

// Problem # 6
// Create a function that takes in a array of numbers. 
// This function will return a new array with numbers that are NOT divisible by 3

// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

// function arrayNotByThree (param){
//     let total = [];
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 > 0){
//             total.push(param[i])
//         }
//     }
//     return total
// }
// console.log(arrayNotByThree(numArray)) //[ 8, 50, 101, 8, 4, 2 ]

// function jasmineSolution (param){
//     let total = [];
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 !== 0){
//             total.push(param[i])
//         }
//     }
//     return total
// }
// console.log(jasmineSolution(numArray))// [ 8, 50, 101, 8, 4, 2 ]


// Problem # 7
// Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total 

// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

// function arrayNotByThree (param){
//     let total = 0
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 > 0){
//             total += param[i]
//         }
//     }
//     return total
// }
// console.log(arrayNotByThree(numArray)) //173

// function jasmineSolution (param){
//     let total = 0;
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 === 0){
//             continue
//         }
//         total += param[i]
//     }
//     return total
// }
// console.log(jasmineSolution([1, 4, 6, 8, 9])) //13
// console.log(jasmineSolution([9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2])) //173