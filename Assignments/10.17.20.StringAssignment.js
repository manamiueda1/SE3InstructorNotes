// You will need to console.log for each problem 
// 	1. Create a variable and assign the string: "we are software engineers at nebula academy"
// 		Using the string…
// 			 Log the index of 'software'
            let homeworkString = "we are software engineers at nebula academy"
            console.log(homeworkString.indexOf('software')); // 7  
// 			 Log the index of 's'
            console.log(homeworkString.indexOf('s')); // 7
// 			 Log the index of 'web'
            console.log(homeworkString.indexOf('web')); // -1
// 			 Does the string include 'z'? (log true or false)
            console.log(homeworkString.includes('z')); // false 
// 			 Does the string include 'engineer'? (log true or false)
            console.log(homeworkString.includes('engineer')); // true
// 			 Split the words in the string into an array
            console.log(homeworkString.split(' '));
// 			 Extract the word 'software' and log it
            console.log(homeworkString.slice(7,15));
// 			 Extract the word 'academy' and log it
            console.log(homeworkString.slice(-7));
            console.log(homeworkString.indexOf('academy'));
            console.log(homeworkString.slice(36, 46));
// 	2. Create a variable and assign the string: "We Are Learning New String Methods"
// 		Using the string…
// 			 Log the length of the string
            let words = "we are learning new string methods"
            console.log(words.length);
// 			 Log the last character of the string
            console.log(words[words.length - 1]);
// 			 Log the character at index 5
            console.log(words[5]);
// 			 Replace all a's  with a '-'
            console.log(words.replace(/a/g, '-'));
// 			 Uppercase everything in the string
            console.log(words.toUpperCase());
// 			 Lowercase everything in the string
            console.log(words.toLowerCase())
// 	3. Create a new variable with your favorite ice cream flavor 
// Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'

            let iceCream = "strawberry"

            console.log(iceCream)
            console.log(`My favorite ice cream flavor is ${iceCream}`)
            console.log('My favorite ice cream flavor is ' + iceCream)
