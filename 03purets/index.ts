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
    readonly city:string = "Jaipur"
    constructor (public email: string, public name: string, private userId: string){

    }
}

const daksh = new User("d@d.com", "daksh", "1234");

export {}