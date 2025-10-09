const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number { //here we can pass number or boolean and return any of them
    return val;
}

function identityTwo(val: any): any { //here we can pass number but return string
    return val;
}

function identityThree<Type>(val: Type): Type { // as soon as we pass a value, the data type is locked so we have to return that type only
    return val;
}

identityThree("3");


//shortcut for identityThree

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

const result: Bottle = identityFour<Bottle>({brand: "puma", type: 4});

//generics part 2

function getSearchProducts<T>(products: T[]): T{ // here we are taking an array of T types, now T can be anything such as array of numbers
    const myIndex = 3;
    return products[myIndex];
}

//converting above fucntion to arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => { //<T> and <T,>, both means same
    const myIndex = 4;
    return products[myIndex];
}




//generic classes in ts, next video of above code

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: "qwerty", username: "harsh", password: "qwert123"});

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];
    addToCart(product: T){
        this.cart.push(product);
    }
}