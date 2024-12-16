function makeHttpRequest(method, url, callBack) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const promise = new Promise((resolve, reject)=>{
    xhr.addEventListener("load", () => {
      resolve(xhr.response)
    });
  })

  
  xhr.open(method, url);
  xhr.send();

  return promise
}

makeHttpRequest("GET", "https://dummyjson.com/users").then((userData)=>{
  console.log(userData);
  return makeHttpRequest("GET", `https://dummyjson.com/posts/user/${userData.users[0].id}`)
}).then((postData)=>{
  console.log(postData);
  return makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id }`)
}).then((commentData)=>{
  console.log(commentData);
})










// makeHttpRequest("GET", "https://dummyjson.com/users",(data)=>{
//     console.log(data);
//     makeHttpRequest("GET", `https://dummyjson.com/posts/user/${data.users[0].id}`, (data)=>{
//         console.log(data);
//         makeHttpRequest("GET", `https://dummyjson.com/comments/post/${data.posts[0].id }`,(comment)=>{
//             console.log(comment.comments[0].user.id);
            
//         })
            
//     })
    
// })