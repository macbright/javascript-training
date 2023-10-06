/// Function

function sumNum(a){
    return a * 2 
}

function sumArr(arr){
  return arr.map(element =>  
      sumNum(element)
   );
}

function resultArr(arr){
    return sumArr(arr)
}

// console.log(resultArr([4, 5, 6]))
// let name = "bright"


// method, array method

let personalInfo = {
    name: "bright okike",
    gender: "male",
    siblings: { numbers: 4, toys: {name: "cars"}}, 
    age: 50,
    favoriteColors: ['red', 'blue', 'green', 'black'],
    sayHello: () => console.log("hello world my is bright")
  
}

console.log(personalInfo.sayHello())