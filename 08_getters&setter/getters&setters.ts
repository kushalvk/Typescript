// Getters & Setters

class Users {

    private _courceCount = 1
    protected _cource = 1

    readonly city: string = "Surat"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ) {
    }
    private deleteToken() {
        console.log("token deleted");
    }

    // getters
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courceCount(): number {
        return this._courceCount
    }

    // setters
    set courceCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("course count should be more then 1")
        }
        this._courceCount
    }
}

const kushal1 = new Users("k@vk.com", "kushal")
// kushal.city = "Ahmedabad" // error to cgange this
kushal1.city // you can access it (if public)
// kushal.name // you can't access it b/s it's private

// protected
class SubUser extends Users {
    isFamily: boolean = true
    changeCourceCount() {
        this._cource = 4 // it's protected
    }
}