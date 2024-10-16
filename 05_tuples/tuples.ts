// Tuples

// const user: (string | number)[] = [1, "vk"]
let user: [string, number, boolean]
user = ["vk" , 777, true]


let rbg: [number, number, number] = [147, 258, 369]


type User = [ number , string]
const newUser:  User = [159, "example@gmail.com"]
newUser[1] = "vk.com" // it can change
newUser.push("kushal") // we can access a method of Tuples


export {}