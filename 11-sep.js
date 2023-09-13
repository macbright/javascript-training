// ||, &&, !, ?? 

// || this is known as OR
// && this is known as AND

// when using the && all the conditions must be true 
// when using the || either of the conditions must be true
// 


// if(6 != 6 || 4 != 5 ){
//     console.log(" the expressions are truthful")
//     if(3 === 5){
//         console.log(" the expressions are truthful")
//         if(22 > 20) {
//             console.log(" the expressions are truthful")
//         }
//     }
// } else if (33 > 44 ) {

// } else {
    
// }


 let username = prompt("please enter your username ?", '');

 if(username === "admin") {

    let password = prompt("please enter your password");
    if(password === "123456789") {
        alert("Welcome! " + username)
    } else if(password === "") {
        alert("the password field can not be empty!")
    } else {
        alert("wrong password! please enter your correct password")
    }
 } else if (username !== "admin" && username != "") {
    alert("sorry you're not an admin")
 } else if (username === "") {
    alert("hey! the username field can not be empty")
 }
