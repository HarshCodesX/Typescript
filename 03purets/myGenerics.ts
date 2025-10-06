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