// fetch('https://dummyjson.com/products', {method:"GET"}).then((response)=>{
//     return response.json()
// }).then((data)=>console.log(data))






fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      category: "lol",
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log);