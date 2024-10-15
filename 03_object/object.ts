// const User = {
//     name: "kushal",
//     email: "kushal@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "kushal", isPaid: false, email: "vk@gmail.com"}

// createUser(newUser) // allow email in this case
// // createUser({name: "kushal", isPaid: false, email: "vk@gmail.com"}) // you can not pass an email due to function syntax

// function createCource():{name: string, price: Number}{
//     return {name: "typcript", price: 700}
// }


// // Aliase
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(User: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


// READONLY & optional(?)
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number // "?" it's use to an optional paramitar
}

let myUser: User = {
    _id: "1234",
    name: "vk",
    email: "vk@vk.com",
    isActive: false
}

myUser.email = "kushal@gmail.com"
// myUser._id = "vk123" // you can't use _id like this b/s it's readonly


type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDater: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}