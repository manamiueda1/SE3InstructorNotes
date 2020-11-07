// BOOLEAN NOTES

// Boolean Definition: The Boolean object represents two values, either "true" or "false"

// console.log(Boolean(-0)) //false
// console.log(Boolean(0)) //false
// console.log(Boolean('')) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(undefined)) //false 
// console.log(Boolean(NaN)) //false
// console.log(Boolean(false)) //false

// console.log(Boolean(7)) //true
// console.log(Boolean(-7)) //true
// console.log(Boolean('saturday')) //true
// console.log(Boolean([])) //true
// console.log(Boolean({})) //true
// console.log(Boolean(true)) //true

// console.log(Boolean(10/'10'))
// console.log(10/'10') //1
// console.log(10+'10') // '1010'
// console.log(Boolean(10+'10')) //true
// console.log(10/'n') // NaN
// console.log(Boolean(10/'n')) //false

/* -------------------------------------------------------------------------- */

// COMPARARISON OPERATORS
// ==  vs ===

// == loosely equal to

// console.log(10 == '10') //true

// // === strictly equal to 
// // note: also check for data type

// console.log(10 === '10') //false 
// console.log('10' === '10') //true
// console.log(10 === 10) //true

// let num = 9 
// console.log(num === 9) //true
// console.log(num == 9) //true
// console.log(num == '9') //true

/* -------------------------------------------------------------------------- */

// Bang operator (opposite/not)
// != vs !==

// console.log(10 != '10') //false

// console.log(10 !== '10') //true
// console.log(10 !== 10) //false

// let nine = 9
// console.log(nine !== 9) //false 
// console.log(nine != 9) //false 

// let candy = false
// console.log(candy !== false) //false
// console.log(candy !== true) //true

/* -------------------------------------------------------------------------- */

// Logical Operators

// &&: 'and' 

// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // true
// console.log(Boolean(''))  //false
// console.log(Boolean('hi')) // true

// console.log(Boolean(1) && Boolean('hi')) // true
// console.log(Boolean(0) && Boolean('')) // false
// console.log(Boolean(1) && Boolean(0)) // false 
// console.log(Boolean('') && Boolean('hi')) // false 

console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false



// // ||: 'or'
// console.log(Boolean(1) || Boolean('hi')) //true
// console.log(Boolean(0) || Boolean('')) // false
// console.log(Boolean(1) || Boolean(0)) //true
// console.log(Boolean('') || Boolean('hi')) // true

// console.log(true || true) //true
// console.log(true || false) //true
// console.log(false || true) //true
// console.log(false || false) //false
