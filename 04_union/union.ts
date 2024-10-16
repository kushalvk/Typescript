let score: number | string = 33 // it's allow both the data type
score = 44
score = "44"


type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}
let kushal: User | Admin = {name: "kushal", id: 777} // it can be User & Admin
kushal = {username: "vk", id:777}


// function getDbId(id: number | string) {
//     // make siome API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    // id.toLowerCase() it's give an error b/s it's a number also
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// array

const data: number[] = [1, 2, 3]
const data1: string[] = ["1", "2", "3"]
// const data2: string[] | number[] = ["1", "2", 3] // it's give an error
const data2: (string | number | boolean)[] = ["1", "2", 3, true]


let pi:3.14 = 3.14 // defaind a strict variable tha valu can not be change
// pi = 3.145 // error to change value


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" // there is an error b/s it has only three type to set value
seatAllotment = "middle"
seatAllotment = "window"