//  COMBINING LOOPS AND CONDITIONALS 

let numArray = [12, 3, 5, 12, 5, 23, 8, 4] 

// if the number is greater than 20 log it to the terminal 

function onlyGreaterThanTwenty (arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 20){
            console.log(arr[i])
        } else {
            console.log('number does not satisfy')
        }
    }
    return 'is it working'
}
console.log(onlyGreaterThanTwenty(numArray))

