console.log("******some*****");
const evenNumbers = [0,2,4,6,8, 1]
// is one statement is false in this method then ist give false and one condition is true then its return true

// evenNumbers.some((num, i)=>{
//     if (num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })



console.log("******every******");
//if every element match the condition the its return true and if anyone element ont match the condition then its return false

const result = evenNumbers.every((num)=>{
        return num % 2 === 1
})