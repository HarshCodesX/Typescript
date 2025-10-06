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