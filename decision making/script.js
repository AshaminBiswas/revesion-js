const userName = prompt("Please Enter Your name ");
const userAge = parseInt(prompt("Please Enter Your Age"));
// const userGender = prompt("Please Enter Your Gender"); 

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if (userAge < 5) {
    console.log("user is a kid")
}
else if (userAge >= 5 && userAge <= 17) {
    console.log("User is a School Student");
    
}
else if (userAge >= 18 && userAge <= 24) {
    console.log(`${userName} is a College student `)
    // console.log(`${userGender} is learning Web development`);
    
}
else if(userAge>=25 && userAge<=45){

    console.log("User is a Working Professional");
}
else{
    console.log("User is Retired");
    
}

// if(userName == null && userAge == NaN){
//     userName == "Ashamin"
//     console.log(userName)
//     userAge == 24
//     console.log(userAge)
// }
