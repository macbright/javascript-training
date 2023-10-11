const objArr = [ 
    { 
        name: 'john', 
        age: 12, 
        gender: 'male'
    }, 
    { 
        name: 'Jane', 
        age: 15, 
        gender: 'female'
    }, 
    { 
        name: 'julie', 
        age: 20, 
        gender: 'trans'
    },
    {
        name: "Bright",
        age: 25,
        gender: "male"
    }, 
    {
        name: "Kate",
        age: 22,
        gender: "female"
    },
    {
        name: "Loius",
        age: 38,
        gender: "trans"
    },
    {
        name: "Theo",
        age: 18,
        gender: "male"
    },
    {
        name: "Amake",
        age: 16,
        gender: "female"
    }, 
    {
        name: "Tamara",
        age: 15,
        gender: "female"
    },
    {
        name: "Emeka",
        age: 14,
        gender: "male"
    }
];
// 1.  write a  function that accepts a letter as a parameter and 
    //returns filtered list that the name starts with that letter

// 2. write a  function that returns list of people less than 22 years

// 3. write a function that returns the list of given gender. it accepts 
    // a gender type as a parameter. 

// 4. write a function that adds a person to the list. it should accept 
    // 3 parameters. the name, age and gender. return should return 
    // the whole list together with the newly added person.



function filteredList(str){
    let myList = objArr.filter((person) => {
        if(person.name[0].toLowerCase() === str.toLowerCase()){
            return person
        }
    })
    return myList
}

function filteredList2(str){
     return objArr.filter((item) => 
     item.name[0].toLowerCase() === str.toLowerCase() )
}


function peopleLessThan22(){
    // return objArr.filter((person) => person.age < 22)
    let arr = []
    objArr.forEach((person) => {
        if(person.age < 22 ){
            arr.push(person)
        }
    })
    return arr;
}

function addPerson(a, b, c){
    const person = {
        name: a,
        age: b,
        gender: c
    }

    return [...objArr, person];

}
console.log(addPerson('Peace', 26, 'female'))