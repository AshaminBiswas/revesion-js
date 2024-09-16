let count = 0

function updateCounter(){
    const value = document.querySelector(".value").innerText = count
}

const addBtn = document.querySelector(".addbutton")
const subtractButton = document.querySelector(".subtract")

addBtn.addEventListener("click",() =>{
    count ++
    updateCounter()
})
subtractButton.addEventListener("click", () =>{
    if(count > 0)(
        count--
    )
    updateCounter()
})






// const array = [1,2,3,4,5]
// let sum  = 0
// for (let index = 0; index < array.length; index++) {

//     sum += array[index]

// }
// console.log(sum)





const user1 ={
    name:"john",
    age:25,
    address:{
        city:"mumbai",
        state:"maharastra",
    }
}

const user2 = user1

user2.name ="ashamin"
user2.address.city = "pune",

console.log(user1)
console.log(user2);




// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
