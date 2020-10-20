// Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'
console.log(15%2); // 1

let number = 15/2 // 7.5
console.log(number, 'number')
let num = 15%2 // 1

console.log("the remainder of 15/2 is " + num);

// Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)'

let num2 = Math.floor(30/2)
let remainder2 = 30%2

console.log('30/2 is ' + num2 + ' with a remainder of ' + remainder2)

// Write the reasonings for each solution below

// Log the boolean of 5 == '5'
console.log(5 == '5') // true
// Log the boolean of  5 === '5'
console.log(5 === '5') //false 
// Log the boolean of 5 != '5'
console.log(5 != '5') // false 
// Log the boolean of  5 !== '5'
console.log(5 !== '5') // true 
// Log the boolean of 5 == 5 && 5 == 6
console.log(5 == 5 && 5 == 6) //false
// Log the boolean of 5 == 5 || 5 == 6
console.log(5 == 5 || 5 == 6) //true

// Using Math.random(), console.log 3 random decimal numbers from 0 to 1000
console.log(Math.random() * (Math.floor(1000)))
console.log(Math.random() * (Math.floor(1000)))
console.log(Math.floor(100) * Math.random())

// Using Math.random(), console.log 3 random whole numbers from 0 to 1000
console.log(Math.random()) // random decimals between 0-1
console.log(Math.random() * 1000) // random decimals between 0-1000
console.log(Math.floor(Math.random() * 1000)) // random whole numbers between 0-1000
