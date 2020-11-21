// Problem #1
// Keep Hydrated! 
// https://www.codewars.com/kata/582cb0224e56e068d800003c

// function litres(time) {
//     return Math.floor(time/2); 
//   }

// Problem #2
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks){
//     //TODO : calculate the downwar rounded average of the marks array
    
//     let total = 0; 
//     for (let i = 0; i <= marks.length-1; i++){
//       total += marks[i];
//     }
//     let average = total /marks.length
//     return Math.floor(average)
//   }

// Problem #3
// Gravity Flip
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

// const flip = (dir, arr)=>{
//     if (dir === 'R'){
//        return arr.sort((a, b) => a - b);
//     } 
//     return arr.sort((a, b) => b - a);
//   }

// Problem #4
// Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// function reverseWords(str){
//     let result = ''
    
//     let splitStr = str.split(' ')
//     console.log(splitStr)
    
//     for (let i = splitStr.length-1; i >= 0; i--){
//       result += ' ' + splitStr[i]
//     }
//     return result.slice(1)
//   }

// Problem #5
// Are you playing banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832

// function areYouPlayingBanjo(name) {  
//     if(name[0] == 'R' || name[0] == 'r'){
//       return name + " plays banjo";
//     } else {
//       return name + " does not play banjo";
//     }
//   }

// Problem #6
// Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// var summation = function (num) {
//     let total = 0
//     for (let i = 0; i <= num; i++){
//       total += i;
//     }
//     return total; 
//   }

// Problem #7
// Invert Values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// function invert(array) {
//     let inverse = []
//     for (let i =0; i < array.length; i++){
//       let newNum = array[i] * -1
//       inverse.push(newNum)
//     }
//     return inverse
//   }