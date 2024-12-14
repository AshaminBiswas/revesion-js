function makeHttpRequest(method, url, callBack) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callBack(xhr.response)
  });
  xhr.open(method, url);
  xhr.send();
}
makeHttpRequest("GET", "https://dummyjson.com/users",(data)=>{
    console.log(data);
    makeHttpRequest("GET", `https://dummyjson.com/posts/user/${data.users[0].id}`, (data)=>{
        console.log(data);
        makeHttpRequest("GET", `https://dummyjson.com/comments/post/${data.posts[0].id }`,(comment)=>{
            console.log(comment.comments[0].user.id);
            
        })
            
    })
    
})