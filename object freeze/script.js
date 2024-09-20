const userData = {
    firstName: "ashamin",
    lastName: "biswas",
    address: {
        village:"Ahammadpur",
        po: "Sanmatinager",
        ps:"Raghunathganj",
        dist:"Murshidabad",
        pin:742213,
        moreDetails:{
            street:"Saidapur",
            locality:"Jangipur",
            nationality:"Indian"
        },
    },
    age:22,
    isGraduate: false
}

userData.mobileNumber = 6297676908
// console.log(userData);

// for delete any item from an object
delete userData.firstName
// console.log(userData);


// if we don't want do perform any operation on an object then we used (Object.seal( pass an object))
// but we can change Existing property
Object.seal(userData)


//if we don't want do any changes in a objects we used (Object.freeze(pass an object)) property immutable
Object.freeze(userData)

// in keyword in object ( its use to check any existing key in a object, its check only key ont value   )
console.log(" mobileNumber" in userData);

