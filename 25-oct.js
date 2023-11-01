
let obj  = {
    name: "bright",
    hobby: "football",
    gender: "male"
}


// for(let item in obj) {
//     if(item === "hobby") {
//         obj[item] = "football and table tennis"
//     }
// }



// console.log(obj)

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the 
// example above.

// If salaries is empty, then the result must be 0.
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function salariesSum() {
//     let sum = 0
//     for(let salary in salaries){
//         sum += salaries[salary]
//     }
//     return sum;
//   }

//   console.log(salariesSum())

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for(let item in obj) {
//         if(typeof obj[item] === "number" ){
//             obj[item] *= 2
//         }
//     }
//     return obj
//   }

//   console.log(multiplyNumeric(menu))


const myMap = new Map() 
myMap.set("name", "bright")

console.log(myMap.get("name"))