
// A parameter is a special kind of variable used in a function to 
// refer to one of the pieces of data provided as input to the function. 
// These pieces of data are the values of the arguments with which the 
// function is going to be called/invoked.

/// for you to call your function, writing the name of the function then bracket
// open and close. the actual value of the parameter should be passed inside 
// the bracket.

// function printString(str, anotherStr) {
//     console.log(str + anotherStr)
// }

// let myStr = "hello world";

// printString(str3, str2);


// const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 59];

console.log(array1.every((item) => item < 40));
let myBoolean = true;
// for(let i = 0; i < array1.length; i++){
//     if(array1[i] > 40) {
//         myBoolean = false
//     }
// }{}
// console.log(myBoolean)

array1.forEach((num) => {
    
    console.log(num)
   
})


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function filterWord(str) {
    return str.length > 6
}

const result = words.filter((item) => item.length > 6);

console.log(result)

