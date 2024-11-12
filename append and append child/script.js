const box = document.querySelector(".box")
const card = document.querySelector(".card")
const h1 = document.querySelector("h1")



// h1.cloneNode(true)
// box.appendChild(card.cloneNode(true))
// box.appendChild(h1.cloneNode(true))



for(let i = 2; i <= 100; i++ ){
    const newCard = card.cloneNode()
    newCard.innerText = i
    box.appendChild(newCard)
}