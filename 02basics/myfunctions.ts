function addTwo(num: number): number{
    return num + 2;
}

addTwo(5);

function getUpper(val: string){
    return val.toUpperCase();
}

getUpper("harsh");

function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("harsh", "hg395005@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("harsh", "h@h.com");

// function getValue(myVal: number): boolean{ //if we give return type as boolean, then "return 200 ok" gets squigly lines and if we mention return type as "string" ,then "return true" will get squigly line 
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK";
// }

const getHello = (str: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero: string) => { //here i dont need to mention, because typescript is smart enough to know whats coming here
    // return `hero is ${hero}`;
    return 1; //but we want return type to be string , only then we can do something like this, watch next example
})

// heros.map((hero): string => {
//     return 1; //now it will give error 
// })

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}