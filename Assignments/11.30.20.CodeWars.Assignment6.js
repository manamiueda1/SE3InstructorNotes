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

// Reverser
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

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