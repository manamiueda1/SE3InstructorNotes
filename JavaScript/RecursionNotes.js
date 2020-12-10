//  RECURSION definition: A funciton that calls itself/A process that calls itself

// The call stack: when a function is invoked, it is placed on the top of a call stack
// When JavaScript sees the 'return' keyword, or when the function ends, the compiler will remove the top item from the stack

// With recursion, we keep pushing new functions onto the callstack 

// HOW DOES IT WORK!?
// You invoke the same function with a different input until you reach your base case

// Two essential parts of a recursive funciton

// 1. BASE CASE
// The condition when the recursion ends/ when the recursion stops

// 2. RECURSIVE CASE/CALL
// calling the same function over and over again, but each time, calling it with a different piece of data

/* -------------------------------------------------------------------------- */

// ITERATIVE VERSION
// function countDown(num){
//     for(let i = num; i > 0; i--){
//         console.log(i);
//     }
//     return "All done!"
// }

// console.log(countDown(5))
// 5
// 4
// 3
// 2
// 1
// All done!

// RECURSIVE VERSION
// function countDown1(num){
//     // base case: checking to see if num is less than or equal to 0
//     if(num <= 0) {
//         // console.log('all return')
//         return
//     } else {
//         // if num is greatert than 0, console.log num
//         console.log(num);
//         // substracting 1 from num every iteration
//         num--;
//         // recursive call 
//         countDown1(num);
//     }
//     return 'Done!'
// }
// console.log(countDown1(5))
// 5
// 4
// 3
// 2
// 1
// Done!

// First Iteration 
// num = 5 
// log: 5
// num = 4
// log: 4
// num = 3
// log: 3
// num--
// num = 2
// log: 2
// num--
// num = 1
// log: 1

/* -------------------------------------------------------------------------- */

// num of 10: 10+9+8+7+6+5+4+3+2+1=55


// ITERATIVE VERSION
// function sumOf (num){
//     let total = 0;
//     for (let i = num; i > 0; i--){
//         total += i
//     }
//     return total
// }

// console.log(sumOf(10)) // 55

// // RECURSIVE VERSION
// function sumRange(num){
//     // Base case: when num hits 1, simply return 1
//     if(num === 1) {
//         return 1; 
//     } else {
//     // Recursive Case 
//         return num + sumRange(num-1);
//     }
//  }

// console.log(sumRange(5)) //15

// The stack queue is being unraveled 

// Call Stack
// 5: return 1 -> 1
// 4: 2 + sumRange(1) 2 + 1 -> 3
// 3: 3 + sumRange(2) 3 + 3 -> 6
// 2: 4 + sumRange(3) 4 + 6 -> 10
// 1: 5 + sumRange(4) 5 + 10 -> 15

/* -------------------------------------------------------------------------- */

let array = [1, 2, 5, [], 5, 6, [7, 5, 6], 9]


// // ITERATIVE VERSION
function flattenArray(arr){
    let result = []

    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        if (Array.isArray(element)){
            for (let j = 0; j < element.length; j++){
                result.push(element[j])
            }
        }
        else {
            result.push(element)
        }
    }
    return result
}
console.log(flattenArray(array)) // [ 1, 2, 5, 5, 6, 7, 5, 6, 9 ]


let recursionArr = [1, 5, 6, [3, [5]]]
// // // RECURSIVE VERSION
function flatten(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        if(Array.isArray(element)){
            result = result.concat(flatten(element))
        } else {
            result.push(element)
        }
    }
     return result 
}

console.log(flatten(recursionArr)) // [ 1, 5, 6, 3, 5 ]

// Call Stack 
// 3: [5] -> [5] -> result: [5]
// 2: [3, [5]] -> [3].concat(flatten([5]))-> [3].concat([5]) -> result: [3, 5]
// 1: [1, 5, 6, [3, [5]]] -> [1, 5, 6].concat(flatten([3, [5]])) -> [1, 5, 6].concat([3, 5]) -> [1, 5, 6, 3, 5]

/* -------------------------------------------------------------------------- */

// PRACTICE PROBLEMS

// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a

// Sum of a nested list
// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018
