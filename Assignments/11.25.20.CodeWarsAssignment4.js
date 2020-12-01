// Problem #1
// Maximum product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// function adjacentElementsProduct(array) {
//     let numbersInArray = [];
//     for (let i = 0; i < array.length -1; i++){
//       let integers = array[i] * array[i+1]
//       numbersInArray.push(integers)
//     }
//     console.log(numbersInArray)
//     return Math.max(...numbersInArray)
//   }
  
//   // i     array[i]    i+1    array[i+1]    
//   // 0        1         1          2              1*2 = 2
//   // 1        2         2          3              2*3 = 6 
//   // 2        3         3       undefined          NaN
  
//   // [1, 2, 3]      array.length = 3 -1 = 2


/* -------------------------------------------------------------------------- */


// Problem #2
// Maximum gap
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

// function maxGap (numbers){
//     let max = 0
//     numbers.sort((a, b) => a-b)
    
//     console.log(numbers)
    
//     for (let i = 0; i < numbers.length-1; i++){
//       if ((numbers[i+1] - numbers[i]) > max){
//         max = numbers[i+1] - numbers[i]
//       }
//     }
//     return max
//   }


/* -------------------------------------------------------------------------- */


// Problem #3
// Nth smallest element
// https://www.codewars.com/kata/5a512f6a80eba857280000fc

// function nthSmallest(arr, pos){
//     let answer = arr.sort((a, b) => a-b)
//     return answer[pos-1]
//  }


/* -------------------------------------------------------------------------- */


// Problem #4
// repeatStr
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }


/* -------------------------------------------------------------------------- */


// Problem #5 
// fakeBin
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// function fakeBin(str){
//     let newStr = ''
//     for (let i = 0; i < str.length; i++){
//       if (Number(str[i]) >= 5){
//         newStr+='1'
//       }
//       else {
//         newStr+='0'
//       }
//     }
//     return newStr
//   }


// function fakeBin(x){
//     return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
//   }
