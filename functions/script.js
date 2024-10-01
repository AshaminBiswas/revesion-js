
//function definition (re useable code)
function intro(nam, role, age) {
    console.log("hi");
    console.log(`i am ${nam} `);
    console.log(`he is ${age} years old`);
    
    console.log(`i am a ${role} `);

}
//function call / execution
intro("ashamin", "frontend developer", 22)
intro("hasan", "civil engineer", 24)
intro("soumen", "C developer", 23)

//default value set in a function

function defaultval (para =" default") {
    console.log(`param1 ${para}`);
    console.log(`param2 ${para || "default"}`);
    
}
defaultval()