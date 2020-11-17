
// Part 1


// For each problem, use the nested array above and….

// Problem #1

// Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays. 
// Return the string, 'Done!' at the end 

//  function nestLoop (array){
//      for (let i = 0; i < array.length; i++){
//          let num = array[i]
//          if (Array.isArray(num)){
//              for (let k = 0; k < num.length; k++){
//                  let numElement = num[k]
//                  console.log(numElement)
//              }
//          } else {
//              console.log(num)
//          }
//      }
//      return 'Done!'
//  }

//  console.log(nestLoop(nested)) 
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10
//  11
//  12
//  13
//  14
//  15
//  17
//  18
//  19
//  20
//  Done!


// Problem #2
// Create a function that adds only the ODD numbers inside the NESTED arrays. 
// Return the total

// function yellow (purple){
//     let total = 0;
//     for (let i = 0; i < purple.length; i++){
//         let prince = purple[i];
//         for (let j = 0; j < prince.length; j++){
//             let raspberry = prince[j]
//             if (raspberry % 2 === 1){
//                 total += raspberry
//             }
//         }
//     }
//     return total 
// }
// console.log(yellow(nested)) // 36

// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]


// Problem #3
// Create a function that logs only the EVEN numbers in the array and in the nested arrays.
// After logging every even number, return, 'Done!'

// function logEven (even) {
//     for (let i = 0; i < even.length; i++){
//         let element = even[i]
//         if (Array.isArray(element)){
//             for (let j = 0; j < element.length; j++){
//                 let adding = element[j]
//                 if (adding%2 === 0){
//                     console.log(adding)
//                 }
//             } 
//         } else if (element % 2 === 0){
//             console.log(element)
//         }
//     }
//     return 'Done!'
// }
// console.log(logEven(nested))
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 18
// 20
// Done!

// Part 2


// For each problem, use the nested array above and….

// Problem #4

// Create a function that logs every word in the array and the nested arrays.
// Return 'Done!' at the end

// function loopArray (array){
//     for (let i = 0; i < array.length; i++){
//         let full = array[i]
//         if (Array.isArray(full)){
//             for (let j = 0; j < full.length; j++){
//                 let nest = full[j]
//                 console.log(nest)
//             }
//         } else {
//             console.log(full)
//         }
//     }
//     return 'Done!'
// }

// console.log(loopArray(nestedArr))

// Problem #5


// Create a function that adds that word 'nested' to the end of every nested array. 
// Return the new array

// function addWord (nested){
//     for (let i = 0; i < nested.length; i++){
//         let newArr = nested[i]
//         if (Array.isArray(newArr)){
//             newArr.push('nested')
//         }
//     }
//     return nested
// }
// console.log(addWord(nestedArr)); // [ 'full', 'stack', [ 'node', 'react', 'nested' ], [ 'nested' ], [ 'redux', 'nested' ], [ 'html', 'css', 'nested' ], 'sql' ]

// Problem #6


// Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays.
// Return 'Done!' at the end 

// input: nested array -> nestedArr
// output: stack, react -> logging every word with the letter 'a' in the word

// loop through the array once 
// if the element is an array, create a condition to check if it is an array by using Array.isArray()
// loop through the array again to look at the elements inside the nested arrays
// in the nested array, create a condition 
    // if the element has the letter 'a' in it, we will log that word
    // use the .includes() method in the consition  
// if it is not an array, we create another condition to see if the element has the letter 'a' inside it, then we log it
// Return the string, 'Done!'


// function doesAExist (array){
//     // looping through the nestedArr array
//     for (let i = 0; i < array.length; i++){
//         let element = array[i]
//         // checking to see if the element in nestedArr is an array or not
//         if (Array.isArray(element)){
//             // if the element is an array, we loop through that array/element 
//             for (let j = 0; j < element.length; j++){
//                 let nestedElement = element[j]
//                 // checking to see if the elements inside the nested arrays have the letter 'a' in the word
//                 if (nestedElement.includes('a')){
//                     // log the element/word with the letter 'a' in it
//                     console.log(nestedElement)
//                 }    
//             }
//             // if the element inside nestedArrr is not an array, check to see if the element/word has the letter 'a' in it
//         } else if (element.includes('a')){
//             // if it does have the letter 'a' in the word, log the element/word
//             console.log(element)
//         }
//     }
//     return 'Done!'
// }
// console.log(doesAExist(nestedArr))
// stack
// react
// Done!

// Problem #7


// Create a function that logs every word that has a length of 4 in the array and in the nested arrays.
// Return 'Done!' at the end 

// input: nestedArr
// output: full, node, html -> logging the elements with the length of 4 in the array and in the nested array

// create a function 
// loop through the array nestedArr
// check to see if the the element in nestedArr is an array or not 
    // loop through the nested array
    // check to see if the length of the element is 4
    // if the element has a length of the element is 4, log the element 
// if the element in the nestedArr is not an array, 
    // else if check to see if the element inside the nestedArr array has a length of 4 
    // if so, log that element

let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']


// function lengthOfFour (array){
//     for (let i = 0; i < array.length; i++){
//         let element = array[i]
//         if (Array.isArray(element)){
//             for (let j = 0; j < element.length; j++){
//                 let nestedElement = element[j]
//                 if (nestedElement.length === 4){
//                     console.log(nestedElement)
//                 }
//             }
//         } else if (element.length === 4){
//             console.log(element)
//         }
//     }
//     return 'Done!'
// }
// console.log(lengthOfFour(nestedArr))


// using the nested array above (nestedArr), remove the first element in the nested arrays
// using the nested array above (nestedArr), add 's' to every word in the elements inside the array and and in the nested arrays