// Difference in Age
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

// function differenceInAges (ages) {

//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//         diff = max - min
        
//     return [min, max, diff]
// }

// Initials
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// function abbrevName(name){
//     let newName = name.split(' ')
//     return newName[0].charAt(0).toUpperCase() + '.' + newName[1].charAt(0).toUpperCase()
//   }

// Needle in the hay stack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// function findNeedle(haystack) {
//     return 'found the needle at position ' + haystack.findIndex(string => string === 'needle'); 
//   }

// function findNeedle(haystack) {
//       return 'found the needle at position ' + haystack.indexOf('needle'); 
//     }

// Count of positives sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// function countPositivesSumNegatives(input) {
//     let sum = 0
//     let count = 0 
    
//     if (input === null){
//       return []
//     }
//     if (!input.length){
//       return []
//     }
    
    
//     for (let i = 0; i <= input.length-1; i++){
//       if (input[i] < 0){
//         sum += input[i]
//       } 
//       if (input[i] >= 1) {
//         count++
//       }
//     }
  
    
//     return [count, sum]
//   }

// Remove duplicate
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

// function distinct(a) {
//   return [...new Set(a)]
// }

// function distinct(a) {
//     return a.filter((item, index) => a.indexOf(item) === index)
//   }

// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// function between(a, b) {
//     //   for (var array = []; a <= b; a++) array.push(a)
//     //   return array 
      
//       let arr = []
//       for (let i = a; i <= b; i++){
//         arr.push(i)
//       }
//       return arr
//     }

// Tip Calculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087

// function calculateTip(amount, rating) {
//     let x = rating.toLowerCase()
    
//     if (x === 'terrible'){
//       return 0
//     }
//     if (x === 'poor'){
//       return Math.ceil(amount * .05)
//     } 
//     if (x === 'good'){
//       return Math.ceil(amount * .1)
//     }
//     if (x === 'great'){
//       return Math.ceil(amount * .15)
//     } 
//     if (x === 'excellent'){
//       return Math.ceil(amount * .2)
//     } else {
//       return "Rating not recognised"
//     }

// function calculateTip(amount, rating) {
//     let x = rating.toLowerCase()
//     switch (x){
//         case 'terrible':
//           return 0
//         case 'poor':
//           return Math.ceil(amount * .05)
//         case 'good':
//           return Math.ceil(amount * .1)
//         case 'great':
//           return Math.ceil(amount * .15)
//         case 'excellent':
//           return Math.ceil(amount * .2)
//         default:
//           return "Rating not recognised"
//     }
//   }

// Draw Stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

// function drawStairs(n) {
//     let result = [];
//     console.log(result)
//     for (let i = 0; i < n; i++){
//       result[i] = `${' '.repeat(i)}I` 
//     }
//     return result.join('\n')
//   }
  
//   // [I, ' I', '  I', '   I'].join('\n')
//   // '
//   // I 
//   //  I 
//   //   I
//   //    I
//   // '

// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// function noSpace(x){
//     return x.split(' ').join('')
// }

// LeetCode Problem:

// TwoSum:
// https://leetcode.com/problems/two-sum

// var twoSum = function(arr, target) {
//     var result = []
//      for (let i = 0; i < arr.length; i++){
//          for (let j = i + 1; j < arr.length; j++){
//              if (arr[i] + arr[j] === target){
//                  result.push(i)
//                  result.push(j)
//              }
//          }
//      }
//     return result
// };


// // arr = [11,15,2,7]
// // target = 9

// // i        arr[i]        j = i+1        arr[j]        arr[i] + arr[j] === target
// // 0           11            1              15            11 + 15 = 26 === 9 -> false
// // 1           15            2               2            15 + 2  = 17 === 9 -> false
// // 2           2             3               7             2 + 7  = 9 === 9 -> true

// // result.push(i) -> [2]
// // result.push(j) -> [2, 3]
