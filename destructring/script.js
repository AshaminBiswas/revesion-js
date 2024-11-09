const colors = ["red", "yellow", "green", "pink", "purple", "black"]
// const [a,b,c,d] = colors
// const [,,c3] = colors
const {3:color4} = colors

const user={
    name:"ashamin",
    age:22,
    address:{
        city:"jangipur",
        dist:"murshidabad",
        pin:742213
    }
}

// const {name:username, age} = user
const {address:{city:userCity}} = user



function intro({name, age}){
    console.log(name, age);
    
}
intro(user)

function printColors({3:a, 5:b}){
console.log(a, b);

}
printColors(colors)