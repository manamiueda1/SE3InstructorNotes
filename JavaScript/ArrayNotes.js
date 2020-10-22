// ARRAY NOTES

// Definition: Arrays are comma seperated lists of indexed information, they are surrounded by square brackets, can contain any data type, and are secretly actually objects. 

// Elements: values inside an array

/* -------------------------------------------------------------------------- */


// Array.isArray()
// console.log(Array.isArray([1, 2, 3])) //true
// console.log(Array.isArray(7)) //false 

let randomArray = [0, false, true, 8, 'hi', '', 700, 'hello']
// console.log(randomArray)

/* -------------------------------------------------------------------------- */

// Indexing using bracket notation: array[i]
// Definition: get specific elements from within an array by using bracket notation

let testScores = [100, 80, 56, 75, 68, 99, 90]

// console.log(testScores[2]) // 56
// console.log(testScores[0]) // 100
// console.log(testScores[testScores.length - 1]) // 90
// console.log(testScores[6])

/* -------------------------------------------------------------------------- */

// .length
// console.log(testScores.length) // 7

/* -------------------------------------------------------------------------- */

// .indexOf()
// console.log(testScores.indexOf(80)) // 1
// console.log(testScores.indexOf(90)) // 6

/* -------------------------------------------------------------------------- */

// .pop() definition: removed the last element inside the array
// let scores = [100, 80, 56, 75, 68, 99, 90]
// let cars = ['toyota', 'bmw', 'honda', 'fiat', 'kia', 'range rover']
// console.log(scores.pop()) // 90
// console.log(scores) // [ 100, 80, 56, 75, 68, 99 ]
// console.log(scores)
// console.log(scores.pop()) // 99
// console.log(scores)
// console.log(scores.pop()) // 68
// console.log(scores)

/* -------------------------------------------------------------------------- */

// .push() definition: method adds one or more elements to the end of an array and returns the new length of the array.
// console.log(scores)
// scores.push(99, 90, 80)
// console.log(scores)
// console.log(cars)
// cars.push('tesla')
// console.log(cars)

/* -------------------------------------------------------------------------- */

// .shift() definition: method removes the first element from an array and returns that removed element. This method changes the length of the array.
let vitamins = ['vitamin B', 'vitamin C', 'multivitamin', 'fish oil', 'zinc', 'folic acid', 'vitamin gummies']

// console.log(vitamins.shift()) // vitamin B
// console.log(vitamins) //[ 'vitamin C', 'multivitamin','fish oil','zinc','folic acid','vitamin gummies' ]

// console.log(vitamins.shift(), vitamins.shift(), vitamins.pop()) //vitamin C multivitamin vitamin gummies

/* -------------------------------------------------------------------------- */

// .unshift() Add new items to the beginning of an array
// let shoes = ['nike', 'balenciaga', 'adidas', 'givenchy', 'reebok', 'crocs']

// shoes.unshift('toms')
// console.log(shoes) // ['toms', 'nike', 'balenciaga', 'adidas', 'givenchy', 'reebok', 'crocs']

// shoes.unshift('steve madden', 'ferragamo', 'nine west', 'jordans')
// console.log(shoes) // ['steve madden', 'ferragamo', 'nine west', 'jordans', 'toms', 'nike', 'balenciaga', 'adidas', 'givenchy', 'reebok', 'crocs']

/* -------------------------------------------------------------------------- */
//  .join() definition: Convert the elements of an array into a string

// let vegetables = ['broccoli', 'brussle sprouts', 'asparagus', 'carrots', 'spinatch', 'tomato', 'squash']

// console.log(vegetables.join(' ')) // broccoli brussle sprouts asparagus carrots spinatch tomato squash
// console.log(vegetables.join(', ')) // broccoli, brussle sprouts, asparagus, carrots, spinatch, tomato, squash

/* -------------------------------------------------------------------------- */

// .concat() definition: merge two or more arrays
// let foods = ['pizza', 'pasta', 'tacos', 'rice', 'burgers']
// let snacks = ['cheetos', 'gold fish', 'doritos', 'popcorn']

// console.log(foods.concat(snacks)) //['pizza', 'pasta', 'tacos', 'rice', 'burgers', 'cheetos', 'gold fish', 'doritos', 'popcorn']

/* -------------------------------------------------------------------------- */

// .slice(startingIndex, endingIndex) definition: method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified

// let scents = ['peppermint', 'lavendar', 'ylang ylang', 'vanilla', 'citrus']

// console.log(scents.slice(0,2)) // [ 'peppermint', 'lavendar' ]
// // scents = scents.slice(0,2)
// console.log(scents) // [ 'peppermint', 'lavendar', 'ylang ylang', 'vanilla', 'citrus' ]
// console.log(scents.slice(-2)) //[ 'vanilla', 'citrus' ]

/* -------------------------------------------------------------------------- */

// .splice(starting Index, delete count) definition: method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

let socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'myspace']

socialMedia.splice(1, 1, 'snapchat') // [ 'twitter' ]
console.log(socialMedia) // [ 'facebook', 'snapchat', 'instagram', 'linkedin', 'myspace' ]
socialMedia.splice(1, 0, 'tik tok') // [ 'facebook', 'tik tok', 'snapchat', 'instagram', 'linkedin', 'myspace' ]
socialMedia.splice(-2, 0, 'tik tok') // [ 'facebook', 'tik tok', 'snapchat', 'instagram', 'tik tok', 'linkedin', 'myspace' ]
console.log(socialMedia)





















// ARRAY METHODS


// .splice()


