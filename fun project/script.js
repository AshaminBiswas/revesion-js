const inputText = document.querySelector(".text")
const addButton = document.querySelector(".Add")
const list = document.querySelector("ul")

addButton.addEventListener("click", () =>{
    console.log("clicked")
   const item =  list.appendChild(document.createElement("li")).innerHTML = inputText.value
    
})