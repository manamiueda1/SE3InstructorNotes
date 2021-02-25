// VARIABLE NOTES

// What are variables?
// containers for storing data values

// Types of variables
// var: global scope
// let: accessible within the scope
// const: accessible within the scope, cannot be reassigned

/* -------------------------------------------------------------------------- */
// VARIABLE DECLARATION EXAMPLES

// var anitria = "helloWorld";
// console.log("anitria", anitria);

// REASSIGNING VARIABLES

// let x = 8;
// console.log("what is x?", x); // what is x? 8
// x = 1;
// console.log("what is x now?", x); //what is x now? 1

// let y = "hi";
// console.log("y is", y); // y is hi
// y = "hello";
// console.log("y is", y); // y is hello

// YOU CANNOT REASSIGN CONSTANT VARIABLES 
// The console.logs below will not run
// const z = "hi";
// console.log("z", z); // z hi
// z = "hello";
// console.log("what is z?", z);  // THIS WILL NOT RUN 

/* -------------------------------------------------------------------------- */

// console.log()
// is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

/* -------------------------------------------------------------------------- */

// DATA TYPE NOTES

// What are Data Types?
// The type of data that the variables are assigned to

// what is primitive data type
// All primitives are immutable - they cannot be altered.

// Primitive Data Types:
// string: is used to represent and manipulate a sequence of characters
// number: Hold numeric values, can be integers, decimals, negatives, positives, and so on
// boolean: have two values: true or false
// Null: is "nothing". It is supposed to be something that doesn't exist. The lack of any value
// undefined:a variable without a value, has the value undefined

// what is non-primitive data type
// mutable - can change!

// Non-Primitive/Composite Data Types
// Object {}: Object properties are written as name:value pairs, separated by commas.
// arrays []: high-level, list-like objects
// functions: A JavaScript function is a reusable block of code designed to perform a particular task.

/* -------------------------------------------------------------------------- */

// Undefined vs null vs not defined/undeclared

// UNDEFINED EXAMPLE
// Did not assign the varibale string to anything
// let string;
// console.log(string);

// NULL EXAMPLE
// nothing: the variable nothing is assigned to nothing! 
// You can use null as a placeholder 
// let nothing = null;
// console.log(nothing);

// NOT DEFINED/UNDECLARED EXAMPLE
// throws an error: something is not defined
// console.log(something);

/* -------------------------------------------------------------------------- */

// typeof operator definition: returns a string indicating the type of the data 

// console.log(typeof 6) // 'number'
// console.log(typeof 'hi') // 'string' 
// console.log(typeof {string: 'hi'}) // 'object'
// console.log(typeof [1, 2, 3]) // 'object'