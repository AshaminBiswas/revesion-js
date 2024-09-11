const message = "hello"
//for finding a value or latter in a string
console.log(message[0]);
//for finding length
console.log(message.length);
//for upperCase (there is no changes on original String - this give new String )
console.log(message.toUpperCase());

let faultyMessage = "         hi      I am     ASHAMIN "

console.log(faultyMessage);
let clearFaultyMessage = faultyMessage.trim().toLocaleLowerCase()
//this method remove only starter wide spaces
console.log(clearFaultyMessage);


let myName = " I am Ashamin Biswas"
// its gives boolean value true or false
let user = myName.includes("Ashamin Biswas")
console.log(user);

let nam = "ashamin"
//its give the index number ( for not undefined character its gives -1 )
console.log(nam.indexOf("i"));




let msg = "hi i am ashamin"
//its replace the word or value 
console.log(msg.replace("hi", "hello"));
//add new word and value
console.log(msg.concat(" biswas"));


let aadhaar = "9625"
//there are pass two arguments first is what is the final length of string and second is what you add like " *"
console.log(aadhaar.padStart(12,"*"));
//
console.log(aadhaar.charAt(2));
//its give character code 
console.log(nam.charCodeAt("am"));

let theName = "ashamin"
// its gives a array
console.log(theName.split(" "));


console.log( aadhaar.concat(" this is my aadhaar last four digits"))

