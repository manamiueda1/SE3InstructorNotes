// Conditional
    // Note: 'if' or 'else if' or 'else' statement
    // Definition: 
        // Executes a statement if a specefied condition is met (true/truthy). 
        // If that condition is false, another statement or lack there of is executed.

/* -------------------------------------------------------------------------- */
// SYNTAX

// 'IF' STATEMENT
// let condition1_is_met
// let condition2_is_met
// let condition3_is_met

// if (condition1_is_met){
//     // execute this code if condition1 IS met/true
// }

// // 'IF'/'ELSE' STATEMENT

// if (condition1_is_met){
//     // execute this code if condition1 IS met/true
// } else {
//     // execute this code if condition1 is NOT met/true  
// }

// // 'IF' VS 'ELSE IF' VS 'ELSE' statements

// if (condition1_is_met){
//     // execute this code if condition1 IS met
// } else if (condition2_is_met){
//     // execute this code if condition2 IS met
//     // there can be infinite else if statements 
// } else if (condition3_is_met) {
//     // execute this code if condition3 IS met
// } else {
//     // execute this code if all conditions above are NOT met
// }

// Note: Comparison operators go hand-in-hand with conditionals
    // >
    // <
    // >=
    // <=
    // ==
    // ===
    // !=
    // !==
    // &&
    // ||
    // !

function isNumOdd (num){
    if (num % 2 === 1){
        return `the number ${num} is an odd number`
    } else {
        return `the number ${num} is an even number`
    }
}

console.log(isNumOdd(19)) //the number 19 is an odd number
console.log(isNumOdd(8)) // the number 8 is an even number


function isNumEven (num){
    if (num % 2 === 0){
        return `the number ${num} is an even number`
    } else {
        return `the number ${num} is an odd number`
    }
}
console.log(isNumEven(20))  // the number 20 is an even number
console.log(isNumEven(3))  // the number 3 is an odd number

let test1 = 'water'
let test2 = 'lemon'

function doesTExist (string){
    if (string.indexOf('t') === -1){
        return 't does not exist'
    } else {
        return 't does exist'
    }
}
console.log(doesTExist(test1)) // t does exist
console.log(doesTExist(test2)) // t does not exist

function tExist (string){
    if (string.indexOf('t') >= 0){
        return 't does exist'
    } else {
        return 't does not exist'
    }
}
console.log(tExist('tauseef')) //t does exist
console.log(tExist('tefe')) // t does exist
console.log(tExist('eddy')) // t does not exist