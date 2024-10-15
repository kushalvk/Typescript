// Declaring a variable
// Syntax
// let {variable-name}: {type} = {value} 
// assign a type is not naccesary Typescript is auto detact it.

// String
let greetings: string = "Hello Kushal"
// greetings = 6 // it's give an error
greetings.toLowerCase()
console.log(greetings);

// number
let mynum = 6
// mynum.toUpperCase() // error
mynum.toFixed()

// boolean
let isLogedin: boolean = true

// any data-type
let hero;

function getHero() {
    return "thor"
}

hero = getHero()

export {}