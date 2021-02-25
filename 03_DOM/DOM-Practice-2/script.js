// Grab the body element (<body></body>) on our page
const body = document.querySelector('body');

// Grab the img element (<img/>) on our page
const picture = document.querySelector('img');

// Grab the numbers div
const numbersDiv = document.querySelector('#numbers');

// Grab all the buttons from our numbers div
const numberButtons = numbersDiv.querySelectorAll('button');

// Grab the screen from our document
const screen = document.querySelector('#screen');

// const row = document.querySelector('.row');

// Grab all the operator buttons from our page (notice how I am using THE POWER of CSS Selectors)
const allOperators = document.querySelectorAll('#operators > button');

console.log(allOperators, "all operators")

// Setting a style to our img element using the setAttribute method
picture.setAttribute('style', 'border: 5px solid blue');

// Setting a style to our body element using the setAttribute method
body.setAttribute('style', 'background-color: pink');

// Setting more attributes to our img element...
picture.setAttribute('src', '/full-moon.jpg');
picture.setAttribute('style', 'height: 200px');
picture.setAttribute('alt', 'landscape');

// Creating HTML elements (not yet inserted into the dom)
const newText = document.createElement('h1');
const newPara = document.createElement('p');

// Adding text to our new elements (not yet inserted into the dom)
newText.innerText = "HELLO WORLD!";
newPara.innerText = "This is a new P element!";

// Now we are inserting these elements into the DOM
body.appendChild(newPara);
body.appendChild(newText);

// Createing a method to use as a callback function for our event listener...
function inputChange(event){
    // The user event object comes into our function - we are accessing the 'target' property
    // This 'target' property is equal to the HTML Element we clicked on
    const targetEl = event.target;
    // Here we are grabbing the 'innerText' from that element and storing it in the variable 'buttonText'
    const buttonText = targetEl.innerText;
    // Here we are setting the 'innerText' of our 'screen' element to plus/equal our 'buttonText'
    screen.innerText += buttonText;
}

// Chelsea's pseudocode 
// If button is clicked... (value of button is displayed on screen)
// run a function that -> grabs the text of the clicked button, and displays that to the screen
// END

// YOU COULD DO THE FOLLOWING:
// allButtons[0].addEventListener('click', inputChange);
// allButtons[1].addEventListener('click', inputChange);
// ...

// OR YOU CAN WRITE A LOOP...
function addAllEventListeners(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', inputChange);
    }
}

// ADDING LISTENERS TO ALL OF OUR "numberButtons" (which is in list form (but not neccesarily a classic JavaScript array...))
addAllEventListeners(numberButtons);

// POTENTIAL FUNCTIONS WE CAN BUILD
//////////////////////////////////
// function operatorInput(event){

// }

// function addOperatorEventListeners(){

// }