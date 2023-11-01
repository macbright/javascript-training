const target = { a: 1, b: 2 };
const newObj = target
const myObj = newObj
const source = { d: 4, c: 5 };
const obj = { a: 1, b: 2, d: 4, e: 5 }

// const returnedTarget = Object.assign(target, source, obj);

// console.log("target: ",target);
// console.log("source: ", source);
// console.log("returnedTaret: ",target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//console.log(target === newObj);
// // Expected output: true


// OBJECT.CREATE

const person = {
    isHuman: false,
    age: 20,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}, he is ${this.age} old`);
    },
  };
  
  const me = Object.create(person);
//   me.name = 'Matthew';
//   me.age = 50


console.log(Object.hasOwn(me, "age"))
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
  // Expected output: "My name is 


  // OBJECT.DEFINEPROPERTIES

// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: false,
//   },
//   property2: {},
// });

// object1.property1 = 50
// console.log(object1);
// Expected output: 42

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };

const obj2 =  Object.keys(object1)

obj2.forEach(item => console.log(object1[item]))