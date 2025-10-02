let greetings : string = "Hello Harsh";
let mynum = 6; //typescipt will detect automatically that it is number
// mynum.toLowerCase(); //it wont allow us to do this
console.log(greetings);


//number
let userId: number = 224466.3;

//boolean
let isLoggedIn: boolean = false;

//type inference
//not necessary to tell that this is a number as it is too obvious and typescript is smart enough to know , 
//that okay it is a number and wont allow to use any methods that are used on strings or other data types

let num = 55.5;
// num.toUpperCase(); //if we uncomment this, it will give that squiggly line under toUpperCase method










//any keyword
let hero: string;
function getHero(){
    return "thor";
}

hero = getHero();

export {}