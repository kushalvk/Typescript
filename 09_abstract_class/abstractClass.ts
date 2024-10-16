abstract class TakePhoto {
    
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void 
    getReelTime(): number {
        // some complex calculation
        return 8
    }
}

// const kushal = new TakePhoto("test", "test") // you can't create a object of abstract class

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia");
        
    }
}

const kushal = new Instagram("test", "test", 3) // you can create a clas which is inhariting it
kushal.getReelTime()