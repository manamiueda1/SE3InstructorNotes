// Loops
    // Definition: loops repeat lines of code until a parameter is met.
    // We can use a for loop to iterate over Strings or Arrays
    // We can use a for-in loop to iterate over an Object

// for loop syntax
    // declare a vaiable (i), and set it equal to our starting number
    // create a condition that stipulates when we stop the loop
    // indicate how the variable (i) will change each interation 
    // for (let i = 0; i < 10; i++){
    //     // do something
    // }

/* -------------------------------------------------------------------------- */


// DIFFERENT TYPES OF LOOPS
    //     // Note: we will usually just use for or for-in loops
    // // while
    //     while(condition /* is true*/){
    //         // do something
    //     }
    // // do-while
    //     do{
    //         // do something 
    //     } while (condition /* is true*/)
    // // for
    //     for(var i = 0; i < arr.length; i++){
    //         // do something
    //     }
    // for-in
        // for(var key in object){
        //     // do something
        // }

/* -------------------------------------------------------------------------- */

// BREAK VS CONTINUE

// BREAK STATEMENT definition: The break statement terminates the current loop


// function breakAfterFive(num){
//     for (let i = 0; i <= num; i++){
//         console.log(i)
//         if (i === 5){
//             break
//         }
//     }
//     return 'This function breaks out of the loop at 5'
// }
// console.log(breakAfterFive(20))

/* -------------------------------------------------------------------------- */
//  CONTINUE STATEMENT definition: The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// log after the continue statement

// function continueAtFive(num){
//     for (let i = 0; i <= num; i++){
//         if (i === 5){
//             continue;
//         }
//         console.log(i)
//     }
//     return 'This function will continue to loop without 5'
// }
// console.log(continueAtFive(10))

/* -------------------------------------------------------------------------- */

// LOOPING THROUGH A STRING

    // let iterateString = 'nebula'        
    //                 //   012345   
    // console.log(iterateString.length) // 6

    // for() -> declaring a for loop 
    // 1st condition: let i = 0 -> specifying where the iteration starts: in this for loop, we want to stat at the index 0
    // 2nd condition: i < iterateString.length -> specifying where to stop the iteration
    // 3rd condition: i++ ->  increasing the index 

    // for (let i = 0; i < iterateString.length; i++ ){
    //     // console.log(iterateString[i])
    // }

    // for (let i = iterateString.length -1; i >= 0; i-- ){
    //     console.log(iterateString[i])
    // }

    // function looping (str){
    //     for (let i = iterateString.length - 1; i >= 0; i-- ){
    //         console.log(str[i])
    //     }
    //    return 'done!'
    // }
    // console.log(looping(iterateString))
    // console.log(looping('Nubula academy saturday class'))


// function iterateChars (string){
//     for (let i = 0; i <= string.length - 1; i++){
//         // first iteration -> i = 0; 0 <= 6: true; i++ 
//         // second iteration -> i = 1; 1 <= 6: true; i++
//         // third iteration -> i = 2; 2 <= 6: true; i++
//         // fourth iteration -> i = 3; 3 <= 6: true; i++
//         // fifth iteration -> i = 4; 4 <= 6: true; i++
//         // sixth iteration -> i = 5; 5 <= 6: true; i++
//         // seventh iteration -> i = 6; 6 <= 6: true; i++ 
//         // eigth interation -> i =7; 7 <= 6: false 
//         console.log(string[i]) // string[0] -> C string[1] -> h string[2] -> e string[3] -> l string[4] -> s string[5] -> e string[6] -> a
//     }
//     return 'we are done!!!'
// }

// console.log(iterateChars('Chelsea'))
// // C 
// // h
// // e
// // l
// // s
// // e
// // a
// // we are done!!!
// console.log(iterateChars('Eddy'))
// // E
// // d
// // d
// // y
// // we are done!!!
/* -------------------------------------------------------------------------- */

// STACK OVER FLOW: FOR LOOP

    // DO NOT RUN THIS 
    // STACK OVER FLOW
    // ctl -c to get out of it 
    // for (let i = 0; i >= 0; i++){
    //     console.log(i)s
    // }

/* -------------------------------------------------------------------------- */

// LOOPING NUMBERS 

    // function zeroToFive (){
    //     // i is representing the index numbers 
    //     for (let i = 0; i <= 5; i++){
    //         // first iteration -> i = 0; true; i++ 
    //         // second iteration -> i = 1; true; i++
    //         // third iteration -> i = 2; true; i++
    //         // fourth iteration -> i = 3; true; i++
    //         // fifth iteration -> i = 4; true; i++
    //         // sixth iteration -> i = 5; true; i++
    //         // seventh iteration -> i = 6; false; 
    //         console.log(i) // 0 1 2 3 4 5 
    //     }
    //     return 'done!'
    // }
    // console.log(zeroToFive())

/* -------------------------------------------------------------------------- */

// LOOPING THROUGH AN ARRAY

// let stringArray = ['Jasmine', 'Tauseef', 'Anitria', 'Daja', 'Maurice']

// function iterateArrays (array){
//     for (let i = 0; i < array.length; i++){
//         // first iteration -> i = 0; 0 < 5: true; i++ 
//         // second iteration -> i = 1; 1 < 5: true; i++
//         // third iteration -> i = 2; 2 < 5: true; i++
//         // fourth iteration -> i = 3; 3 < 5: true; i++
//         // fifth iteration -> i = 4; 4 < 5: true; i++
//         // sixth iteration -> i = 5; 5 < 5: false

//         console.log(array[i]) // array[0] -> Jasmine array[1] -> Tauseef array[2] -> Anitria array[3] -> Daja array[5] -> Maurice
//     }
//     return 'We done!!'
// }

// console.log(iterateArrays(stringArray))

/* -------------------------------------------------------------------------- */

// WHILE LOOPS

 // while
// while(condition /* is true*/){
//     // do something
// }

// function whileTrue (num){
//     let counter = 0
//     while(counter <= num){
        
//         console.log(counter)
//         counter ++
//     } 
//     return 'it works!'
// }
// console.log(whileTrue(5))
// // // console.log(whileTrue(100))

/* -------------------------------------------------------------------------- */

// DO-WHILE LOOP

// do{
//     // do something 
// } while (condition /* is true*/)

// function doWhile (num){
//     let counter = 0
//     do {
//         console.log(counter)
//         counter ++
//     }
//     while (counter <= num)
//     return 'loop works'
// }
// console.log(doWhile(5))

/* -------------------------------------------------------------------------- */

// NESTED LOOPS 

