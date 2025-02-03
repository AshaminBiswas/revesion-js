async function request() {
    const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com'
    const response = fetch(url)
    response.then((response)=>{
        console.log(response);
        
    })
}
request()