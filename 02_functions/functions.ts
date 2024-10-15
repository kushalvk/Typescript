function addTwo(num: number): number { // the last ":number" is defaind for return data type 
    // also you can not use the methos's of other data type
    return num + 2
    // return "hello"
}
addTwo(5) // you can not pass other datatype hear b/s the datatype is allready defaind 

function getUpper(val: string) {
    return val.toUpperCase()
}
getUpper("kushal")

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}
signUpUser("kushal", "kushal@gmail.com", false)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {} // set false by default
loginUser("vk", "vk@gmail.com", )

// in this case if we set boolean to return type the other will give you an error and if string that also an error
// function getValue(myVal:number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spidermane", "ironman"]
// const heros = [1, 2, 3]
heros.map((hero): string => { // the return type is string
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void { // return02 type is void
    console.log(errmsg);
}
function handleError(errmsg: string): never { // it's same as void return typr
    throw new Error(errmsg);
}

export {} // to fix the error temp