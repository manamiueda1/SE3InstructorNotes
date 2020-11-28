
// let studentObject1 = {
//     name: 'Tim',
//     id: 1,
//     age: 22
// }

// let studentObject2 = {
//     name: 'Lisa',
//     id: 2,
//     age: 19
// } 

// problem #1
// Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old' 

// function student (object){
//     let name = object.name 
//     let age = object.age
//     return `${name} is ${age} years old`
// }
// console.log(student(studentObject1)) //Tim is 22 years old
// console.log(student(studentObject2)) //Lisa is 19 years old

// Problem #2
// Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not. 
// if they are 21+, return the string, 'welcome, (name)!'
// if not, return the string, 'try again in a couple years' 

// function twoObjects (aboveA){
//     let person = aboveA.name
//     let age = aboveA.age

//     if (age >= 21){
//         return `Welcome, ${person}!`
//     } else {
//         return 'try again in a couple years' 
//     }
// }

// console.log(twoObjects(studentObject1)) // Welcome, Tim!
// console.log(twoObjects(studentObject2)) // try again in a couple years


// Problem #3
// create a function that returns the keys in an array

// function objKeys (object){
//    return Object.keys(object)
// }
// console.log(objKeys(studentObject1)) // [ 'name', 'id', 'age' ]
// console.log(objKeys(studentObject2)) // [ 'name', 'id', 'age' ]


// // create a funciton that return the values in an array

// function objValues (object){
//     return Object.values(object)
// }
//  console.log(objValues(studentObject1)) //[ 'Tim', 1, 22 ]
//  console.log(objValues(studentObject2)) // [ 'Lisa', 2, 19 ]



// Problem #4
// Create a function that deletes the 'id' key value pairs

// function del (keyValue){
//     delete keyValue.id;
//     return keyValue
// }
// console.log(del(studentObject1)); // { name: 'Tim', age: 22 }
// console.log(del(studentObject2)); // { name: 'Lisa', age: 19 }

// Problem #5
// create a function that takes in the student objects above and their birthdates 
// (come up with their birthdates) as parameters.
// This function will add a new birthdate key value pair to the object 

// function adds (object, birthdate){
//     object['DOB'] = birthdate
//     return object
// }
// console.log(adds(studentObject1, '10/4/1990')) // { name: 'Tim', id: 1, age: 22, DOB: '10/4/1990' }
// console.log(adds(studentObject2, '11/09/1998')) // { name: 'Lisa', id: 2, age: 19, DOB: '11/09/1998' }

/* -------------------------------------------------------------------------- */
// PAIR PROGRAMMING PROBLEMS 

// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

// let hello = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }
  
//   function greet(language) {
//     for (let key in hello){
//       if (language == key){
//         return hello[key]
//       } 
//     }   
//     return 'Welcome'
//   }

// Job Matching #1
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript


// function match(candidate, job) {
//     // is this job a valid match for the candidate?
    
//     let need = candidate.minSalary 
//     let offer = job.maxSalary 
    
//     if (offer >= need){
//       return true
//     } else {
//       return false
//     }
//   }