abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string){

    }
    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}

// const harsh = new TakePhoto("test", "test"); //we can not make objects of this class now as we have used abstract keyword there

class Instagram extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia");
    }
}
const daksh = new Instagram("test", "test", 4);
daksh.getReelTime();