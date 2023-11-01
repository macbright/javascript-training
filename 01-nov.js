let a = {}
let b = a

// CONSTRUCTORS


function createUser() {

}

// let newUser = () => {

// }

createUser()

function CreateUser(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.isAdmin = false;

    const getUserFullName = () => {
        return `${firstName} ${lastName}`
    }
    this.fullName = getUserFullName();

    if(firstName === "bright"){
        return {
            firstName : firstName,
            lastName : lastName,
            age : age,
            isAdmin: true,
            fullName: getUserFullName()
        }
    }  
}

let user1 = new CreateUser("bright", "okike", 25)
let user2 = new CreateUser("Shedrack", "iroanya", 20)

console.log(user1, user2)