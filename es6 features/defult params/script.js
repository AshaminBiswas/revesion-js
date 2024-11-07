//Default params

function mult(a, b = 3){
    console.log(a * b);
    
}
mult(2)

function rollADie(numberOfSide = 6){
    return Math.floor(Math.random() * numberOfSide) + 1
}
