const button = document.querySelector("#btn")
const button1 = document.querySelector("#btn1")
const promise = new Promise((resolve, reject)=>{
    // resolve({name : "ashamin"})
    // reject("promise is rejected")
    button.addEventListener("click",()=>{
        resolve("promise is resolved")
    })

    button1.addEventListener("click",()=>{
        reject("promise is rejected")
    })
})

//when promise is resolved then called the then method
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
//finally called when promises is settled


//