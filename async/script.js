// async function request() {
    
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com'
//     const response = fetch(url)
//     response.then((response)=>{
//         console.log(response);
        
//     })
// }
// request()


const thread = document.querySelector(".block")
thread.addEventListener("click",()=>{
    const startTime = Date.now()
    let currentTime = startTime
    while(startTime + 4000 > currentTime){
        currentTime = Date.now()
    }
})

