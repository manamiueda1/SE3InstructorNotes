// ARRAY NOTES

// Definition: Arrays are comma seperated lists of indexed information, they are surrounded by square brackets [], can contain any data type, and are secretly actually objects. 
// Elements: values inside an array

// ARRAY EXAMPLE

// let emptyArray = [] // Empty array
// console.log(emptyArray)

// let randomArray = [0, false, true, 8, 'hi', '', 700, 'hello']
// console.log(randomArray)

/* -------------------------------------------------------------------------- */
// NESTED ARRAYS

// let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]

/* -------------------------------------------------------------------------- */

// Array.isArray(parameter) definition: checks to see if whatever passed in the Array.isArray() method is an array or not - results: true/false
// console.log(Array.isArray([1, 2, 3])) //true
// console.log(Array.isArray(7)) //false 

/* -------------------------------------------------------------------------- */

// Indexing using bracket notation: array[i]
// Definition: get specific elements from within an array by using bracket notation

// let testScores = [100, 80, 56, 75, 68, 99, 90]

// console.log(testScores[2]) // 56
// console.log(testScores[0]) // 100

/* -------------------------------------------------------------------------- */

// .length difinition: Returns the length of a array

// let genre = ['mystery', 'romance', 'drama', 'thrillers', 'biography', 'horror', 'fiction']

// console.log(genre.length) //7

/* -------------------------------------------------------------------------- */

// ACCESSING THE LAST ELEMENT IN THE ARRAY

// console.log(genre.length) // 7
// console.log(genre[6]) // fiction
// console.log(genre.length - 1) // 6
// console.log(genre[genre.length - 1]) //fiction

/* -------------------------------------------------------------------------- */

// .indexOf() definition: returns the index of the element you pass into the method

// let months = ['January', 'July', 'August', 'September', 'April']
// console.log(months.indexOf('July')) // 1
// console.log(months.indexOf('April')) // 4

/* -------------------------------------------------------------------------- */

// .pop() definition: removes the last element inside the array
// let scores = [100, 80, 56, 75, 68, 99, 90]
// console.log(scores.pop()) // 90
// console.log(scores) // [ 100, 80, 56, 75, 68, 99 ]
// console.log(scores.pop()) // 99
// console.log(scores) // [ 100, 80, 56, 75, 68 ]
// console.log(scores.pop()) // 68
// console.log(scores) //[ 100, 80, 56, 75 ]

/* -------------------------------------------------------------------------- */

// .push() definition: method adds one or more elements to the end of an array and returns the new length of the array.

// let cars = ['toyota', 'bmw', 'honda', 'fiat', 'kia', 'range rover']

// console.log(cars) //['toyota', 'bmw', 'honda', 'fiat', 'kia', 'range rover']
// cars.push('tesla') 
// console.log(cars) // [ 'toyota', 'bmw', 'honda', 'fiat', 'kia', 'range rover', 'tesla' ]

/* -------------------------------------------------------------------------- */

// .shift() definition: method removes the first element from an array and returns that removed element. This method changes the length of the array.
// let vitamins = ['vitamin B', 'vitamin C', 'multivitamin', 'fish oil', 'zinc', 'folic acid', 'vitamin gummies']

// console.log(vitamins.shift()) // vitamin B
// console.log(vitamins) //[ 'vitamin C', 'multivitamin','fish oil','zinc','folic acid','vitamin gummies' ]
// console.log(vitamins.shift(), vitamins.shift(), vitamins.pop()) //vitamin C multivitamin vitamin gummies
// console.log(vitamins) //[ 'fish oil', 'zinc', 'folic acid' ]

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
// console.log(vegetables.join(' + ')) // broccoli + brussle sprouts + asparagus + carrots + spinatch + tomato + squash

/* -------------------------------------------------------------------------- */

// // .concat() definition: merge two or more arrays
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

// let socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'myspace']

// socialMedia.splice(1, 1, 'snapchat') // [ 'twitter' ]
// console.log(socialMedia) // [ 'facebook', 'snapchat', 'instagram', 'linkedin', 'myspace' ]
// socialMedia.splice(1, 0, 'tik tok') // [ 'facebook', 'tik tok', 'snapchat', 'instagram', 'linkedin', 'myspace' ]
// socialMedia.splice(-2, 0, 'tik tok') // [ 'facebook', 'tik tok', 'snapchat', 'instagram', 'tik tok', 'linkedin', 'myspace' ]
// console.log(socialMedia)
// socialMedia.splice(-2, 2, 'pinterest') // [ 'facebook', 'tik tok', 'snapchat', 'instagram', 'tik tok', 'pinterest']
// console.log(socialMedia)

/* -------------------------------------------------------------------------- */

// .sort() definition: The sort() method sorts the elements of an array in place and returns the sorted array.

// // Ascending
// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// // Descending
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

/* -------------------------------------------------------------------------- */

// ... Spread syntax definition: spreading/expanding the elements in an array and objects 

// let spreadArr = [1, 2, 3, 4, 5]
// console.log(...spreadArr) // 1 2 3 4 5


















