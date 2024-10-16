// Generic (<Type>)

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}
//  in this both the return type can't identify

function identityThree<Type>(val: Type): Type {
    return val
}
//  in this :- 1) if the accept type is integer the return and other type will assign automaticaly integer
// 2) if the accept type is String the return and other type will assign automaticaly String 
// and any other datatype also

identityThree("3") // hover on that (lock the datatype)

// same as <Type>
function identityFour<A>(val: A): A {
    return val
}

// you can use also like that
interface bootle {
    brand: string,
    type: number
}

// identityFour<bootle>({})


// Generics in Array
function getSearchProduct<T>(product: T[]): T {
    // do some database opration
    const myIndex = 3
    return product[myIndex]
}


// generics arrow function
const getMoreSeachProducts = <T>(product: T[]): T => {
    // do some database opration
    const myIndex = 4
    return product[myIndex]
}

// <T,> -> it mean it is not any tag it is a generics 
// mostly it use in the '.jsx' & '.tsx' file


// generic classes

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, 4) // you can compalsary a second paramitar is number if extend number.
anotherFunction(3, {
    connection: "yes",
    username: "kushal",
    password: "1234567"
}) // in this there is object


interface Quiz {
    name: string,
    type: string
}
interface Cource {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}