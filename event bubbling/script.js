const green = document.querySelector(".green")
const pink = document.querySelector(".pink")
const yellow = document.querySelector(".yellow")



// green.addEventListener("click",(e)=>{
//     console.log("green");
//             // e.stopPropagation()
            
// },true)

// pink.addEventListener("click",(e)=>{
//     console.log("pink");
    
// },true)

yellow.addEventListener("click",(e)=>{
      console.log("yellow");
    
}, {capture:true, once:true})

