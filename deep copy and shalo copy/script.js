//SHALLOW COPY

const username1 = "ashamin"
const username2 = username1
username2 = username2 + " biswas"

const user={
    firstName:"ashamin",
    lastName:"biswas"
}

const newUser ={}
Object.assign(newUser, user)
newUser.lastName = "HB"

//spread operator
const user2 ={...user}


const array = ["ashamin", "soumen", "hasan"]

//using spread operator
const array2 = [...array]

// using assign operator
Object.assign(array2, array)

// using concat
const friend = [].concat(array)

//using  slice
const sliceUse = array.slice()

array2.push("bala")



// Deep Copy

const userd1 = {
    name:"soumen",
    pata:{
        city:"deuli",
        pin:742220
    }
}

const userd2 ={ }