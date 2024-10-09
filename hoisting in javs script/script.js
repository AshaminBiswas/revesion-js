//if  we access any variable before initialize then that is called hoisting.  
//if we use let or const javascript engine trough the variable in temporal dead zone

console.log(userName);
var userName = "ASHAMIN"

//OUTPUT : Undefined

hi()
function hi(){
    console.log("hello world");
}