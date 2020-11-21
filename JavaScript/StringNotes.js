// STRING NOTES

// String Definition: a set of characters that is used to represent text and is surrouded by quotes or backticks, '', "", ``
// String is a primitive data type - they're immutable/cannot be changed 

// single quote: ''
// double quote: ""
// back ticks: ``

// let singleQuote = 'singleQuote';
// let doubleQuote = "doubleQuote";
// let backTicks = `backticks`;

// console.log(singleQuote, doubleQuote, backTicks);

/* -------------------------------------------------------------------------- */

// ADDING STRINGS TOGETHER EXAMPLES

let originalString = "Hello";
let newVariable = originalString;
let newString = originalString.replace("e", "-");
console.log(newString); //H-llo
console.log(newVariable); // "Hello"

// // ADING STRINGS USING "+"

console.log(
  "this new string is " +
    newString +
    " the original string is " +
    originalString
); // this new string is H-llo the original string is Hello

// // ADDING STRINGS USING TEMPLATE LITERAL
// // We can have JS variable inside the string by using this syntax `${JAVASCRIPT HERE}`

console.log(
  `this new string is ${newString} it is h-llo!! this is hello now ${newVariable}`
); // this new string is H-llo it is h-llo!! this is hello now Hello

/* -------------------------------------------------------------------------- */

// DYNAMIC SOLUTION VS NON-DYNAMIC SOLUTION

// DYNAMIC SOLUTION
// This solution works with every name in the array
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
//   // let student = array[i];
//   console.log(`${array[i]} is a nebula student`);
// }
// anitria is a nebula student
// chelsea is a nebula student
// eddy is a nebula student
// maurice is a nebula student
// tauseef is a nebula student
// daja is a nebula student
// jasmine is a nebula student

// NON-DYNAMIC
// This solution only works with one variable 
// let notDynamic = "anitria";

// console.log(notDynamic + " is a nebula student"); //anitria is a nebula student

/* -------------------------------------------------------------------------- */

// SPECIAL CHARACTERS

// let quote = 'We are the so-called "Vikings" from the north.';
// let backslash = "\\";
// let newLine = "\n";

// console.log(quote);
// console.log(backslash);
// console.log("\n");

// console.log("new line");

// let jasmine = "jasmine Dyson";
// console.log(jasmine);
// let anotherQuote = '"hi"';
// console.log(anotherQuote);
// console.log(quote, backslash, newLine);

/* -------------------------------------------------------------------------- */

// ACCESSING INDICES USING BRACKET NOTATION: str[i]
// Will return a character based on the given index. 
// Note: if the index is larger than the last character index then we return an empty string: ''

// let school = "nebula";
// console.log(school); //nebula

// // school at index 0 evaluates to 'n'
// console.log(school[0]);
// // school at index 1 evaluates to 'e'
// console.log(school[1]);
// // school at index 2 evaluates to 'b'
// console.log(school[2]);
// // school at index 3 evaluates to 'u'
// console.log(school[3]);
// // school at index 4 evaluates to 'l'
// console.log(school[4]);
// // school at index 5 evaluates to 'a'
// console.log(school[5]);


// EX: log your initials using template literal and '+'

// let myName = "Manami Ueda";
// console.log(myName[0]); //M
// console.log(myName[7]); //U
// console.log(`${myName[0]}${myName[7]}`); // MU

// let firstLetter = myName[0]; 
// let secondLetter = myName[7];
// console.log(firstLetter + secondLetter); //MU

// console.log(myName[10]); // 'a'

/* -------------------------------------------------------------------------- */

// .length METHOD definition: Returns the length of a string

// let name = "manami";
// console.log(name.length); //6
// console.log(name[0]); //m
// console.log(name[1]); //a
// console.log(name[2]); //n
// console.log(name[3]); //a
// console.log(name[4]); //m
// console.log(name[5]); //i

// let nebula = "nebula academy";
// console.log(nebula.length); //14


// //Spaces are indexes as well 

// let jasmine = "J D";

// console.log(jasmine.length); //3
// console.log(jasmine[0]); //J
// console.log(jasmine[1]); // ' '
// console.log(jasmine[2]); // D

/* -------------------------------------------------------------------------- */

// ACCESSING THE LAST CHARACTER OF A STRING USING .LENGTH AND INDEXING

// let sentence = "hello";

// console.log(sentence.length); //5
// console.log(sentence[4]); // o
// console.log(sentence[sentence.length - 1]); //o

// let welcome = "Hi Friend welcome to nebula ACADEMY";
// console.log(welcome.length) //35
// console.log(welcome.length -1) //34
// console.log(welcome[34]) // Y
// console.log(welcome[welcome.length - 1]); // Y

/* -------------------------------------------------------------------------- */

// Parameters: variables listed as a part of the function definition
// Arguments: values passed to the function when it is invoked.

/* -------------------------------------------------------------------------- */

// .charAt(i) Definition: Will return a character based on it's index

// let saturday = 'we are champions'

// console.log(saturday.charAt(10)); // m
// console.log(saturday.charAt(100)); // empty
// console.log(saturday.charAt(6)); // ' '

/* -------------------------------------------------------------------------- */

// .toUpperCase() Will convert any string to all uppercase
// .toLowerCase() Will convert any string to all lowercase

// let iphone = 'Jasmine got the new iPhone'

// console.log(iphone); // Jasmine got the new iPhone
// console.log(iphone.toUpperCase()); // JASMINE GOT THE NEW IPHONE
// console.log(iphone.toLowerCase()); // jasmine got the new iphone

/* -------------------------------------------------------------------------- */

// .replace(regex substring, new substring) Definition: replaces the first instance of a character (regex)

// let replaceChar = 'We are replacing some characters. Also the capitol A.'
// console.log(replaceChar.replace("are", "r")); // We r replacing some characters. Also the capitol A.
// console.log(replaceChar.replace("some", "sum")); // We are replacing sum characters. Also the capitol A.
// console.log(replaceChar.replace('a', '-')) // We -re replacing some characters. Also the capitol A.

// // replacing ALL a's 

// // g stands for global - to replace all a's in the string
// console.log(replaceChar.replace(/a/g, "-")); // We -re repl-cing some ch-r-cters. Also the c-pitol A.
// // i stands for case insensitive - to replace the first a, whether it's lowercase a or uppercase A. 
// console.log(replaceChar.replace(/a/i, "-")) //We -re replacing some characters. Also the capitol A.
// // adding g and i makes it glbal and case insensitive 
// console.log(replaceChar.replace(/a/gi, "-")); // We -re repl-cing some ch-r-cters. -lso the c-pitol -.

/* -------------------------------------------------------------------------- */

// .indexOf(searchValue) definition: returns the index of the value you pass into the method

let school = 'welcome to nebula academy'
console.log(school.indexOf('l')) //2
console.log(school.indexOf('z')) // -1
console.log(school.indexOf('j')) // -1
console.log(school.indexOf('nebula')) //11

/* -------------------------------------------------------------------------- */

// .includes(searchString) definition: determines whether one string may be found within another string, returning true or false as appropriate.

let socialMedia = 'Hello, welcome to facebook'
console.log(socialMedia.includes('l')) // true
console.log(socialMedia.includes('z')) // false

/* -------------------------------------------------------------------------- */

// .split(separator) definition: divides a String into an ordered list of substrings

// let cars = 'nissan, volvo, bmw, porsche, toyota, mercedes'

// console.log(cars.split(', ')) //[ 'nissan', 'volvo', 'bmw', 'porsche', 'toyota', 'mercedes' ]

// let fruits = 'apple banana orange grapefruit grape'
// console.log(fruits.split(' ')) // [ 'apple', 'banana', 'orange', 'grapefruit', 'grape' ]


// //  How to split and log the initials of your name
// let name = 'manami ueda'
// let fullName = name.split(' ')
// console.log(fullName) // [ 'manami', 'ueda' ]
// let firstName = fullName[0] // manami
// let lastName = fullName[1] // ueda
// console.log(firstName[0]) //m
// console.log(lastName[0]) //u
// console.log(firstName) // manami
// console.log(lastName) // ueda

/* -------------------------------------------------------------------------- */

// .slice(startingIndex, endingIndex) definition:extracts a section of a string and returns it as a new string, without modifying the original string.

// parameters: specify the starting index, specifiy the ending index

// let loveJavaScript = 'javascript makes me happy.'
// let js = loveJavaScript.slice(0, 10)
// console.log(js) // javascript
// console.log(`${js} makes me smart`) //javascript makes me smart
// console.log(loveJavaScript.slice(0, -6)) // javascript makes me 
// console.log(loveJavaScript.slice(11,16)) // makes

// // Creates a shallow copy of the array
// console.log(loveJavaScript) //javascript makes me happy.  

/* -------------------------------------------------------------------------- */

// .substr(startingIndex, characterCount) definition:returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

// parameters: specify the starting index, specify the character count from the starting index 

// let school = 'nebula academy wednesday class'
// console.log(school.substr(0, 6)) // nebula
// console.log(school.substr(7, 7)) // academy
// console.log(school.substr(15, 9)) // wednesday
// console.log(typeof school.substr(25, 5), 'typeof class') // class

/* -------------------------------------------------------------------------- */

// Number(string number) definition: trurns string of number in number 

// console.log(Number('10')) //10
// console.log(typeof '10') //string
// console.log(typeof Number('10')) //number






