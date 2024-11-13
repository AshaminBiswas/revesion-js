const container = document.querySelector(".container");
const image = document.querySelector("img");

// for(let i = 2; i <= 100; i++){
//     const newImage = image.cloneNode(false)
//     console.log(newImage);
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
//     container.append(newImage)

// }

// const p = document.createElement("p")
// p.innerText = "Pokemon Picture"
// p.classList.add("my-para")
// p.id = "para"
// container.append(p)

// const img = document.createElement("img");
// img.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/1.png";

for (let i = 1; i <= 900; i++) {
    const div = document.createElement("div")
    div.classList.add("div")
    container.append(div)


    const img = document.createElement("img");
    img.src =
    `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
    img.alt =` pokemon image ${i}`
    div.append(img)

    
    const para = document.createElement("p")
    para.innerText = `image ${i}`
    para.classList.add("para")
    div.append(para)
    

}
