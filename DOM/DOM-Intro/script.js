console.log(document)

document.getElementById('test').innerHTML = 'Hello World'

let allH1s = document.querySelectorAll('h1')

console.log(allH1s)

function addAllListeners (param){
    for (let i = 0; i < param.length; i++){
        if (param[i].innerHTML === 'World'){
            param[i].addEventListener('click', confirm)
        } else {
            param[i].addEventListener('click', change)
        }
    }
}
addAllListeners(allH1s)

function confirm (event){
    // console.log(event)
    // console.log(event.target)
    console.log(event.target.innerHTML)
}

function change (){
    console.log('change in console')
}

/* -------------------------------------------------------------------------- */

// Exercise

// Create a button in index.html
// style it a little bit: add width, height and color
// add an event listener on click - on click, console.log('hit')