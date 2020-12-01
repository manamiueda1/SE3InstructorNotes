// Recursive Replication
// https://www.codewars.com/kata/57547f9182655569ab0008c4

// function replicate(times, number) {
//     let result = [];
  
//   if (times <= 0){
//     return [];
//   }
//   if (times > 0){
//     result.push(number)
//     times--
//     console.log(times)
//     result = result.concat(replicate(times, number))
//   } 
//   return result
// }


/* -------------------------------------------------------------------------- */


// Factorial Factory
// https://www.codewars.com/kata/528e95af53dcdb40b5000171

// function factorial (n) {
//     if (n < 0){
//       return null
//     }
//     if (n === 0){
//       return 1
//     } else {
//       return n *  factorial(n-1)
//     }
//   }


/* -------------------------------------------------------------------------- */


// Reverser
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

// function reverse(n){
//     let result = 0;
//      while(n){
//          result *= 10;
//          result += n % 10;
//          n = Math.floor(n/10);
//      }
//      return result;
//  }

// EXPLANATION
//      n           result                 new result                      new n
//     1234      0 * 10 = 0           0 + (1234 % 10) = 4          Math.floor(1234/10) -> 123
//      123      4 * 10 = 40          40 + (123 % 10) = 43         Math.floor(123/10) -> 12
//       12      43 * 10 = 430        430 + (12 % 10) = 432        Math.floor(12/10) -> 1
//        1      432 * 10 = 4320      4320 + (1 % 10) = 4321       Math.floor(1/10) -> 0

// we break out of the while loop becase 0 is a falsey value and the while loop will not run
// Then we just return the result which is 4321


/* -------------------------------------------------------------------------- */


// Sum ALL the arrays
// https://www.codewars.com/kata/5594463eaf1701909c0000d4

// function arraySum(arr) {
//   let result = 0
    
//   for(let i = 0; i < arr.length; i++){
//       let element = arr[i]
//       if(Array.isArray(element)){
//           result += arraySum(element)
//       } 
//       else if(typeof element === 'number'){
//         result += element
//       }
//   }
//    return result   
// }