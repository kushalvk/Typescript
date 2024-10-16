// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Surat"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// shorcut of class
class User {
    readonly city: string = "Surat"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ) {
    }
}

const kushal = new User("k@vk.com", "kushal")
// kushal.city = "Ahmedabad" // error to cgange this
kushal.city // you can access it (if public)
// kushal.name // you can't access it b/s it's private


// Protected is in getters & setters file