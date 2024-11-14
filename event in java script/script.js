const h1 = document.querySelector("h1");

const container = document.querySelector(".container");
const box = document.querySelector(".box");

// h1.onclick = hii()

// box.addEventListener("click",()=>{
//     for(let i = 0; i<=100; i++){
//         const newBox = box.cloneNode()
//         newBox.innerText = i
//         container.append(newBox)
//     }

// })

let i = 0;
box.addEventListener("click", () => {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerText = i++;
  container.append(newBox);
});
