// Interface

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string, // it's return string compalsory
    getCoupon(couponname: string, value: number): number
}

// reopening of Interface
interface User {
    githubToken: string
}

// User
const kushal: User = {
    dbId: 22,
    email: "example@gmail.com",
    userId: 1452,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "kushal10", off: 17) => { // (name, off) => couponname, value {it can automaticaly identify by index}
        return 17
    },
    githubToken: "kushalGithub"
}
kushal.email = 'v@vk.com' // change
// kushal.dbId = 33 // it can't be change


// Inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

// Admin
const kushal1: Admin = {
    dbId: 22,
    email: "example@gmail.com",
    userId: 1452,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "kushal10", off: 17) => { // (name, off) => couponname, value {it can automaticaly identify by index}
        return 17
    },
    githubToken: "kushalGithub",
    role: "admin"
}