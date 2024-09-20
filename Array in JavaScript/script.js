const fruit = ["mango", "apple", "orange", "banana", "dates", 
    {name:"ashamin", roll:33200322003, trade:{department:"ECE"}}, [1, 2, 3, 4]]

// find any value
console.log(fruit[3])

//update any value in a array
fruit[3] = "grapes"
console.log(fruit);

// add new value in a array
fruit[5] = "water melon"
console.log(fruit)

const rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
console.log(rainbowColors);


//Add an elements in a array in last index and its return array length
rainbowColors[rainbowColors.length] = 'pink'
rainbowColors.push("black")
console.log(rainbowColors);

//remove an element from an array in last element
rainbowColors.pop()
console.log(rainbowColors);


const newArray = []
newArray.firstName = "ashamin"
console.log(newArray);
//its return array length 0


