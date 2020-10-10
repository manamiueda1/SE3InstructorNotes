// STRINGS

// Strings: a set of characters that is used to represent text and is surrouded by quotes , '', "", ``
// String is a primitive data type - they're immutable

// single quote: ''
// double quote: ""
// back ticks: ``

// let singleQuote = 'singleQuote';
// let doubleQuote = "doubleQuote";
// let backTicks = `backticks`;

// console.log(singleQuote, doubleQuote, backTicks);

// ADDING STRINGS TOGETHER EXAMPLES

// let originalString = "Hello";
// let newVariable = originalString;
// let newString = originalString.replace("e", "-");
// console.log(newString);
// console.log(hello);

// adding strings using "+"

// console.log(
//   "this new string is " +
//     newString +
//     " it is h-llo!! " +
//     "this is helllllllllllllllllllllllo now " +
//     originalString
// );

// adding strings using template literal
// We can have JS inside the string by using this syntax `${JAVASCRIPT HERE}`

// console.log(
//   `this new string is ${newString} it is h-llo!! this is hello now ${newVariable}`
// );

// dynamic example
// let array = [
//   "anitria",
//   "chelsea",
//   "eddy",
//   "maurice",
//   "tauseef",
//   "daja",
//   "jasmine",
// ];

// for (let i = 0; i < array.length; i++) {
//   let student = array[i];
//   console.log(`${student} is a nebula student`);
// }

// non dynamic example
// let notDynamic = "anitria";

// console.log(notDynamic + " is a nebula student");

// let obj = { pair1: 1, pair2: 2 };
// console.log(obj);
// delete obj.pair1;
// console.log(obj);

// special characters

// let quote = 'We are the so-called "Vikings" from the north.';
// let backslash = "\\";
// let newLine = "\n";

// let fruit = "apple";
// console.log(fruit);

// console.log(quote);
// console.log(backslash);
// console.log("\n");

// console.log("new line");

// let jasmine = "jasmine Dyson";
// console.log(jasmine);
// let anotherQuote = '"hi"';
// console.log(anotherQuote);
// console.log(quote, backslash, newLine);

// let example1 = "nebula";
// console.log(example1);
// console.log(example1[0]);
// console.log(example1[1]);
// console.log(example1[2]);
// console.log(example1[3]);
// console.log(example1[4]);
// console.log(example1[5]);

// let myName = "Manami Ueda";
// console.log(myName[0]);
// console.log(myName[7]);
// console.log(`${myName[0]}${myName[7]}`);

// let firstLetter = myName[0];
// let secondLetter = myName[7];
// console.log(firstLetter + secondLetter);

// console.log(myName[10]);

// let name = "manami";
// console.log(name.length); //6
// console.log(name[0]); //m
// console.log(name[1]); //a
// console.log(name[2]); //n
// console.log(name[3]); //a
// console.log(name[4]); //m
// console.log(name[5]); //i

// let nebula = "nebula academy";
// console.log(nebula.length);

// let jasmine = "J D";

// console.log(jasmine.length);
// console.log(jasmine[0]);
// console.log(jasmine[1]);
// console.log(jasmine[2]);

// let sentence = "hello";

// console.log(sentence.length); //5

// console.log(sentence[4]);

// console.log(sentence[sentence.length - 1]);

let welcome = "Hi Friend welcome to nebula ACADEMY";
// console.log(welcome[welcome.length - 1]);

// .charAt(i)

// console.log(welcome.charAt(10)); //w
// console.log(welcome.charAt(100)); // empty
// console.log(welcome.charAt(6));

// console.log(welcome);
// console.log(welcome.toUpperCase());
// console.log(welcome.toLowerCase());

// .replace

console.log(welcome.replace("Hi", "hello"));

let name = "manami";
console.log(name.replace(/a/g, "-"));

// .split
// .slice
