const main = document.querySelector(".main")
const button = document.querySelector(".button")
// console.log(button);

let count = 1

button.addEventListener("click", ()=>{
     // console.log("click");
    const div =  document.createElement("div")
     //    console.log(div);
    div.classList.add("box")
    div.innerText = count++


    // div.addEventListener("click",()=>{
    //     div.remove()
    // })
     main.append(div)
}) 

main.addEventListener("click",(e)=>{
    if(e.target !== main ){
        e.target.remove()
    }    
})