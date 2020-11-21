// OBJECT NOTES
    // Definition:  An unordered collection of related data with key-value pairs. 
    // Objects have key-value pairs: collection of related data unlike arrays, the key-value pairs inside of an object are not asoociated with indicies 
    // Syntax:
    // let obj1 = {} // an empty object
    // let obj2 = {key: 'value'} // an object on one line

    // // Most common syntax:
    // let obj3 = {
    //     key1: 'value', 
    //     key2: 'value'
    // }
    // console.log(obj1) // {}
    // console.log(obj2) // { key: 'value' }
    // console.log(obj3) // { key1: 'value', key2: 'value' }

/* -------------------------------------------------------------------------- */

// Notations:
    // Dot notation 
        // Great for quickly accessing keys and getting their values
    // Bracket notation
        // Great in all scenarios, just a little more complex 
        // CAN take in variables or strings 
        // MUST be used in a for in loop
            // Example
    let obj4 = {
        name: 'Sharmania Greene',
        age: 30,
        height: `5'10"`,
        birthdate: new Date(1995, 11, 17)
    }

// ACCESSING VALUES

// Dot Notation
console.log(obj4.name) // Sharmania Greene
console.log(obj4.age) // 30
console.log(obj4.height) //5'10"
// Bracket Notation
console.log(obj4['name']) // Sharmania Greene
console.log(obj4['age']) // 30
console.log(obj4['height']) //5'10"

/* -------------------------------------------------------------------------- */

// ADDING KEY-VALUE PAIRS
obj4['email'] = 'sharmaniagreene@gmail.com'

console.log(obj4)
// { name: 'Sharmania Greene',
//   age: '30',
//   height: '5\'10"',
//   email: 'sharmaniagreene@gmail.com' }

/* -------------------------------------------------------------------------- */

// DELETING KEY-VALUE PAIRS 

delete obj4.height
// delete obj4['height']

console.log(obj4)
// { name: 'Sharmania Greene',
//   age: '30',
//   email: 'sharmaniagreene@gmail.com' }

// If key-value pair does not exist, it'll return undefined
console.log(obj4.height) // undefined

/* -------------------------------------------------------------------------- */

// OBJECT.KEYS() definition: method returns an array of a given object's own enumerable property names

let car = {
    make: 'Honda',
    model: 'Accord',
    year: '2020',
    vin: '1HGCV943472987',
    color: 'black',
    engine: 'V8'
}

console.log(Object.keys(car))
// [ 'make', 'model', 'year', 'vin', 'color', 'engine' ]

/* -------------------------------------------------------------------------- */

// OBJECT.VALUES()

console.log(Object.values(car))
// [ 'Honda', 'Accord', '2020', '1HGCV943472987', 'black', 'V8' ]

/* -------------------------------------------------------------------------- */

let car2 = {
    name: 'mercedes benz',
    model: 'E350W',
    year: 2021,
} 

// FOR IN LOOP

function loopObjKeys (object){
    for (let key in object){
        console.log(key)
    }
}
loopObjKeys(car2)

// name
// model
// year

function loopObjValues (object){
    for (let key in object){
        console.log(object[key])
    }
}
loopObjValues(car2)
// mercedes benz
// E350W
// 2021

/* -------------------------------------------------------------------------- */
// PRACTICE PROBLEMS

// create your own object with these key-value pairs: name, age, city
// create a funciton that adds 1 to your age 
// create a function that returns the keys in an array
// create a funciton that returns the values in an array format

