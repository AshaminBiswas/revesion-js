//higher order function

function a(b){
    console.log(typeof b);  
}

// a({user:"ashamin", age:22 })
// a([1, 2, 3])

function callBack (){
    console.log("hiiiiiiiii");
    
}


// callBack function : when we call a function inside a function as a argument then its called callback function.

a(callBack)
a(function (){
    console.log("hiiiiiiiii");
    
})

//example
