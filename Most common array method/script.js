const arr = [1,2,3,4,5]
//remove a element on first index in a array
console.log(arr.shift());

const evenNum = [0,2,4,6,8]
// add a element on first index in a array (its return the array length)
evenNum.unshift(10)
console.log(evenNum);


const fruit = ["mango", "apple", "banana"]
const anotherFruit = ["orange", "pineapple"]
//Its return a new array after concat
const newAddedArray = fruit.concat(anotherFruit)
console.log(newAddedArray);


const Letter = ["a", "b", "c", "d"]
//its return the index number
console.log(Letter.indexOf("c"));

// its return the boolean  value (its for checking the element in a array its have or not)
console.log(Letter.includes("d"));

const myName = ["a", "s", "h", "a", "m","i", "n"]
// its reverse the array (its change the original array)
console.log(myName.reverse());

// sorting the bases of UTF 16 code  (its change the original array)
console.log(myName.sort());


const friend = ["soumen", "hasan", "bala", "asik", "bishal"]
// its take star value or end value and make a new copy an array  (its return new array and include the start value)
console.log(friend.slice(2, 3));

//its change the original array and its delete the element from an array (its take the start value and 
// number of value which we want to splice ) also create a new array
console.log(friend.splice(2, 1, "hayat"))
console.log(friend);






