// Strings: a set of characters that is used to represent text and is surrouded by quotes , '', "", ``
// String is a primitive data type - they're immutable

// single quote: ''
// double quote: ""
// back ticks: ``

// let singleQuote = 'singleQuote';
// let doubleQuote = "doubleQuote";
// let backTicks = `backticks`;

// console.log(singleQuote, doubleQuote, backTicks);

let originalString = "Hello";
let newVariable = originalString;
let newString = originalString.replace("e", "-");
// console.log(newString);
// console.log(hello);

console.log(
  "this new string is " +
    newString +
    " it is h-llo!! " +
    "this is helllllllllllllllllllllllo now " +
    originalString
);

// template literal
console.log(
  `this new string is ${newString} it is h-llo!! this is hello now ${newVariable}`
);

// dynamic example
let array = [
  "anitria",
  "chelsea",
  "eddy",
  "maurice",
  "tauseef",
  "daja",
  "jasmine",
];

for (let i = 0; i < array.length; i++) {
  let student = array[i];
  console.log(`${student} is a nebula student`);
}

// non dynamic example
let notDynamic = "anitria";

console.log(notDynamic + " is a nebula student");
