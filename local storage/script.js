
const name = document.querySelector(".name")
// name.innerText = localStorage.getItem("myName")

// const userName = document.querySelector(".userName")
// userName.addEventListener("input",(e)=>{
//         localStorage.myName = e.target.value
//         name.innerText = localStorage.myName
// })



const userName = document.querySelector(".userName")
// userName.addEventListener("input",(e)=>{
//         localStorage.setItem("myName", e.target.value) 
//         name.innerText = localStorage.myName
// })


const myAge = document.querySelector(".myAge")
const age = document.querySelector(".age")
// age.addEventListener("input",(e)=>{
//     localStorage.setItem("myAge", e.target.value) 
//     myAge.innerText = localStorage.myAge
// })




//OBJECT storage

const userData = JSON.parse(localStorage.getItem("userData")) || {}
if(userData.name && userData.age){
    myAge.innerText = userData.age
    name.innerText = userData.name
}

userName.addEventListener("input",(e)=>{
    userData.name = e.target.value
        localStorage.setItem("userData",JSON.stringify(userData))
        name.innerText = e.target.value
})

age.addEventListener("input",(e)=>{
    userData.age = e.target.value
        localStorage.setItem("userData",JSON.stringify(userData))
        myAge.innerText = e.target.value
})



//local storage clear
// localStorage.removeItem("user")
// localStorage.clear()


