//  COMBINING LOOPS AND CONDITIONALS 
// Practice Problems 

// let numArray = [12, 3, 5, 12, 5, 23, 8, 4] 

// // if the number is greater than 20 log it to the terminal 

// function onlyGreaterThanTwenty (arr){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 20){
//             console.log(arr[i])
//         } else {
//             console.log('number does not satisfy')
//         }
//     }
//     return 'is it working'
// }
// console.log(onlyGreaterThanTwenty(numArray))

/* -------------------------------------------------------------------------- */

// PRACTICE PROBLEMS 



// // add all of the numbers in the array

// function addNums (numArr){
//     let total = 0;

//     for (let i = 0; i < numArr.length; i++){
//         total += numArr[i]
//     }
//     return total 
// }
// console.log(addNums(array)) //45


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // add only the odd numbers in the array

function onlyAddOdds (oddArr){
    let total = 0
    for (let i = 0; i < oddArr.length; i++){
        if (oddArr[i] % 2 === 1){
            total += oddArr[i]
        }
    }
    return total
}
console.log(onlyAddOdds(array)) // 25


// // // count how many numbers are even in the array

// function onlyEvens (evenArr){
//     let count = 0

//     for (let i = 0; i < evenArr.length; i++){
//         if (evenArr[i] % 2 === 0){
//             count += 1
//         }
//     }
//     return count
// }
// console.log(onlyEvens(array)) // 4


// // // add the numbers that are NOT divisible by 3

// function divThree (divArr){
//     let total = 0
//     for (let i = 0; i < divArr.length; i++){
//         if (divArr[i] % 3 === 0){
//             continue
//         }
//         total += divArr[i]
//     }
//     return total 
// }
// console.log(divThree(array)) // 27

