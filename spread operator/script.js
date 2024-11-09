//combined array

const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9]

const joinedArray = [...num1, ...num2]

const user={
    name:"ashamin",
    age:22,
    role:"web dev"
}
const newUser={...user, city:"kolkata",}



function array() {
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum
}