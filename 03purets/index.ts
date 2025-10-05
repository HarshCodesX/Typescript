// class User {
//     email: string
//     name: string
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

// const harsh = new User("h@h.com", "harsh");
//console.log(harsh.city); //if we want this to be unaccessible , then we can make this property as private




//another way for declaring classes in typescript

class User {
    private _couseCount = 1;
    readonly city:string = "Jaipur"
    constructor (public email: string, public name: string, private userId: string){

    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courseCount(): number{
        return this._couseCount;
    }

    // set courseCount(courseNum): void{

    // }
    //we can not define return type in setters

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1");
        }
        else{
            this._couseCount = courseNum;
        }
    }
}

const daksh = new User("d@d.com", "daksh", "1234");
// daksh.deleteToken; //can not do that as this function is private

export {}