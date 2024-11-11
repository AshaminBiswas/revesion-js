const h1 = document.querySelector("h1")
h1.style.color = "yellow"
h1.style.backgroundColor = "green"

const anchor = document.querySelectorAll("a")
console.log(anchor);

for(let i = 0; i<anchor.length; i++){
    anchor[i].style.color  ="green"

}

for(let link of anchor){
    // link.style.textDecoration = "none"
    // link.style.fontWeight = "900"
    // link.style.fontFamily = "cursive"




    // link.style.cssText = `color:red;
    // font-size:18px;
    // text-decoration:none;
    // font-weight:700;
    // font-family:cursive;
    // `


    // link.className = "style"
    // link.classList.add("style")
    link.classList.add()

}
