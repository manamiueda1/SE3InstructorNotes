
// Problem #1 Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript

function squareSum(numbers){
    let total = 0;
      for (let i = 0; i < numbers.length; i++){
        total += Math.pow(numbers[i], 2)
      }
    return total
  }

// Problem #2 L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

function setAlarm(employed, vacation){
    if (employed === true && vacation === false){
      return true
    } else {
      return false 
    }
  }

//   Problem #3 Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let total = 0
    
    for (let i = 0; i <= arr3.length - 1; i++){
      total += arr3[i]
    }
    return total 
    
  }

// Problem #4
// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name){
    console.log(name) // Ryan //Singles
    return `Hello, ${name} how are you doing today?`
  }

//   Problem #5 Filling an array (part 1)
//  https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
    let array = []
    
    for (i = 0; i < N; i++){
      array.push(i)
    }
    return array
  }


//   Problem #6 N-th Power
//  https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

// input: array of numbers and n representing the index
// output: number -> square root of the element at where the n is 

// find the element at n in the array by using the bracket notation/indexing 
// return the Nth power by using the Math.pow() method
// if n is outside of array, return -1

function index(array, n){
    if(array[n] === undefined){
      return -1
    }
    return Math.pow(array[n], n)
  }


//   Problem #7 Beginner Series #2 Clock
//  https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
    let sec = s*1000
    let minutes = m*60000
    let hour = h*3600000
    
    return hour + minutes + sec
    
  }