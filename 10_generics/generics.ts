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
interface bootle{
    brand: string,
    type: number
}

// identityFour<bootle>({})