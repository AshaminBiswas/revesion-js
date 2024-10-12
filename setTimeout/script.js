//setTimeout
// WE CAN DELAY THE CODE USING setTimeout. its return the id of the last setTimeout in console.
setTimeout("console.log('true')",2000)

const timer1 = setTimeout(`console.log('ashamin')`, 3000)
console.log(timer1);//its return the timer id



setTimeout(a, 4000, "uhuhu", "tfygjh", 222)
function a (){
    console.log(arguments)// its gives the argument like an array
    console.log("hello world");
    
}


setTimeout(function(){
    console.log("anonyms function");
    
})
console.log("time out");



//setInterval
//setInterval run infinite times after define.

const interval1 = setInterval(`console.log("hh")`,1000)
//for stop the interval
clearInterval(interval1)