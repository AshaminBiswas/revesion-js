const h1  = document.querySelector("h1")

// h1.addEventListener("keypress", (e)=>{
//     console.log(e.key);
    
// })

// window.addEventListener("keypress", (e)=>{
//     console.log(`code: ${e.code}`);
//     console.log(`value: ${e.key}`);

// })



//when we press up the key then its fire
window.addEventListener("keyup", (e)=>{
    console.log(`code: ${e.code}`);
    console.log(`value: ${e.key}`);

})