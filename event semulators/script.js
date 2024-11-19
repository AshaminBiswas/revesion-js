const main = document.querySelector(".main")
const button = document.querySelector(".button")
// console.log(button);

let count = 1

// button.addEventListener("click", ()=>{
//     for(let i=1; i<=20; i++){
//       // console.log("click");
//     const div =  document.createElement("div")
//      //    console.log(div);
//     div.classList.add("box")
//     div.innerText = i
//     main.append(div)
//     }
    
 
// })

// const intervalId =  setInterval(()=>{
//     if(count > 1000){
//         clearInterval(intervalId)
//     }
//    button.click()
// },1000)


// const input = document.querySelector(".input")
// setTimeout(()=>{
//     input.focus()
// },1000)

// setTimeout(()=>{
//     input.blur()
// },3000)

const form = document.querySelector(".form")

// setTimeout(()=>{
//     form.submit()
//     console.log("form Submitted");
    
// },3000)


setTimeout(()=>{
    form.reset()
    console.log("form reset");
    
},5000)