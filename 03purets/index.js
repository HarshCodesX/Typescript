"use strict";
// class User {
//     email: string
//     name: string
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const harsh = new User("h@h.com", "harsh");
//console.log(harsh.city); //if we want this to be unaccessible , then we can make this property as private
//another way for declaring classes in typescript
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
    }
    return User;
}());
var daksh = new User("d@d.com", "daksh", "1234");
