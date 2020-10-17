// STRING NOTES

// String Definition: a set of characters that is used to represent text and is surrouded by quotes , '', "", ``
// String is a primitive data type - they're immutable

// single quote: ''
// double quote: ""
// back ticks: ``

// let singleQuote = 'singleQuote';
// let doubleQuote = "doubleQuote";
// let backTicks = `backticks`;

// console.log(singleQuote, doubleQuote, backTicks);

/* -------------------------------------------------------------------------- */

// ADDING STRINGS TOGETHER EXAMPLES

// let originalString = "Hello";
// let newVariable = originalString;
// let newString = originalString.replace("e", "-");
// console.log(newString);
// console.log(hello);

// ADING STRINGS USING "+"

// console.log(
//   "this new string is " +
//     newString +
//     " it is h-llo!! " +
//     "this is helllllllllllllllllllllllo now " +
//     originalString
// );

// ADDING STRINGS USING TEMPLATE LITERAL
// We can have JS variable inside the string by using this syntax `${JAVASCRIPT HERE}`

// console.log(
//   `this new string is ${newString} it is h-llo!! this is hello now ${newVariable}`
// );

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
//   let student = array[i];
//   console.log(`${student} is a nebula student`);
// }

// NON-DYNAMIC
// This solution only works with one variable 
// let notDynamic = "anitria";

// console.log(notDynamic + " is a nebula student");

/* -------------------------------------------------------------------------- */

// SPECIAL CHARACTERS

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

/* -------------------------------------------------------------------------- */

// ACCESSING INDICES USING BRACKET NOTATION: str[i]
// Will return a character based on the given index. 
// Note: if the index is larger than the last character index then we return an empty string: ''

// let school = "nebula";
// console.log(school);

// school at index 0 evaluates to 'n'
// console.log(school[0]);
// school at index 1 evaluates to 'e'
// console.log(school[1]);
// school at index 2 evaluates to 'b'
// console.log(school[2]);
// school at index 3 evaluates to 'u'
// console.log(school[3]);
// school at index 4 evaluates to 'l'
// console.log(school[4]);
// school at index 5 evaluates to 'a'
// console.log(school[5]);


// EX: log your initials using template literal and '+'

// let myName = "Manami Ueda";
// console.log(myName[0]);
// console.log(myName[7]);
// console.log(`${myName[0]}${myName[7]}`);

// let firstLetter = myName[0];
// let secondLetter = myName[7];
// console.log(firstLetter + secondLetter);

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

// let welcome = "Hi Friend welcome to nebula ACADEMY";
// console.log(welcome[welcome.length - 1]);

/* -------------------------------------------------------------------------- */

// Parameters: variables listed as a part of the function definition
// Arguments: values passed to the function when it is invoked.

/* -------------------------------------------------------------------------- */

// .charAt(i) Definition: Will return a character based on it's index

// console.log(welcome.charAt(10)); //w
// console.log(welcome.charAt(100)); // empty
// console.log(welcome.charAt(6));

/* -------------------------------------------------------------------------- */

// .toUpperCase() Will convert any string to all uppercase
// .toLowerCase() Will convert any string to all lowercase

// console.log(welcome);
// console.log(welcome.toUpperCase());
// console.log(welcome.toLowerCase());

/* -------------------------------------------------------------------------- */

// .replace(regex substring, new substring) Definition: replaces the first instance of a character (regex)

// let replaceChar = 'we are replacing some characters'
// console.log(replaceChar.replace("are", "r"));
// console.log(replaceChar.replace("some", "sum"));
// console.log(replaceChar.replace('a', '-'))

// let name = "manami";
// console.log(name.replace(/a/g, "-"));

/* -------------------------------------------------------------------------- */

// .indexOf(searchValue) definition: returns the index of the value you pass into the method

// let school = 'welcome to nebula academy'
// console.log(school.indexOf('l')) //2
// console.log(school.indexOf('z')) // -1
// console.log(school.indexOf('j')) // -1
// console.log(school.indexOf('nebula')) //11

/* -------------------------------------------------------------------------- */

// .includes(searchString) definition: determines whether one string may be found within another string, returning true or false as appropriate.

// let socialMedia = 'Hello, welcome to facebook'
// console.log(socialMedia.includes('l')) // true
// console.log(socialMedia.includes('z')) // false

/* -------------------------------------------------------------------------- */

// .split(separator) definition: divides a String into an ordered list of substrings

// let cars = 'nissan, volvo, bmw, porsche, toyota, mercedes'

// console.log(cars.split(', '))

// let fruits = 'apple banana orange grapefruit grape'
// console.log(fruits.split(' '))

// let name = 'manami ueda'
// let fullName = name.split(' ')
// console.log(fullName) // [ 'manami', 'ueda' ]
// let firstName = fullName[0] // manami
// let lastName = fullName[1] // ueda
// console.log(firstName[0])
// console.log(lastName[0])
// console.log(firstName)
// console.log(lastName)

/* -------------------------------------------------------------------------- */

// .slice(startingIndex, endingIndex) definition:extracts a section of a string and returns it as a new string, without modifying the original string.

// let loveJavaScript = 'javascript makes me happy.'
// let js = loveJavaScript.slice(0, 10)
// console.log(js) // javascript
// console.log(`${js} makes me smart`) //javascript makes me smart
// console.log(loveJavaScript.slice(0, -1))
// console.log(loveJavaScript.slice(11,16))
// console.log(loveJavaScript) //javascript makes me happy  

/* -------------------------------------------------------------------------- */

// .substr(startingIndex, characterCount) definition:returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

// let school = 'nebula academy wednesday class'
// console.log(school.substr(0, 6))
// console.log(school.substr(7, 7))
// console.log(school.substr(15, 9))
// console.log(school.substr(25, 5))

/* -------------------------------------------------------------------------- */

// Number(string number) definition: trurns string of number in number 
// console.log(Number('10')) //10





