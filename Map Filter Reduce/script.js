const months = ["jan", "feb", "mar", "apr", "may", "june"]
console.log("*******Map********");
//its return an new array (its a non distructivr method)

const capitalMonths = months.map((month, i, arr)=>{
    console.log(i);
    // console.log(arr);
    return month.toUpperCase()
})
console.log(capitalMonths);



console.log("******Filter*******");

const filteredMonth = months.filter((month, i, arr)=>{
    console.log(month)
    return month.toUpperCase().includes("m") 
})


console.log("*******Reduce*****");

const numbers = [1,1,1,1,1,1]

numbers.reduce((accumulator, num, i)=>{
    // console.log(i, num);
    console.log(accumulator);
    return accumulator + num 
},10)



