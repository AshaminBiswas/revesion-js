const num1 = [1,2,3,4,5]
// function add(...num) {
//     let sum = 0;
//     for(let i = 0; i < num.length; i++){
//         sum += num[i]
//     }
//     return sum
// }

function add(...num) {
  return  num.reduce((acc, curr)=> acc + curr )
}
const result = add(...num1)