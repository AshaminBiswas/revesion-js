const h1 = document.querySelector("h1");

const container = document.querySelector(".container");
const box = document.querySelector(".box");

let i = 0;

// box.addEventListener("mousedown", (e) => {
//     console.log(e);

//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
//   });




// box.addEventListener("mouseup", (e) => {
//   console.log(e);

//   const newBox = document.createElement("div");
//   newBox.classList.add("box");
//   newBox.innerText = i++;
//   container.append(newBox);
// });


// box.addEventListener("mouseenter", (e) => {
//     console.log(e);
    
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
// });


// box.addEventListener("mouseleave", (e) => {
//     console.log(e);
    
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
// });



// box.addEventListener("mousemove", (e) => {
//     console.log(e);
    
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
// });



// box.addEventListener("mouseover", (e) => {
//     console.log(e);
    
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
// });


// box.addEventListener("wheel", (e) => {
//     console.log(e);
    
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     newBox.innerText = i++;
//     container.append(newBox);
//   });




box.addEventListener("scroll", (e) => {
    console.log(e);
    
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.innerText = i++;
    container.append(newBox);
  });
