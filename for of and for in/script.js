//for of loop (we can use in array, string, map, nodelist etc. we can't use on object)

const fruits = ["a", "b", "c", "d", "e"]
const username = "ashamin"
for (const latter of username) {
    console.log(latter);
    
}

console.log("*****************");

for (const fruit of fruits) {
    console.log(fruit);
    
}
console.log("***** for in loop *****");


//for in loop (object loop)

const myData={
    firsName:"ashamin",
    lastName:"biswas",
    age:22,
    gender:"male",
    isMarried:false
}

for (const key in myData) {
    //that is bracket notation
    console.log(key, ":", myData[key]);
    
}

console.log("*******object.keys*******");

const personKeys = Object.keys(myData)
for(const key of personKeys){
    console.log(key);
    
}


console.log("******Object.values*******");
const myDataValues = Object.values(myData)
for (const key of myDataValues) {
    console.log(key);
    
}

console.log("******Object.entries********");
//its returns the each key value payers
const myDataEntries = Object.entries(myData)
for(const key of myDataEntries){
    console.log(key);
    
}
