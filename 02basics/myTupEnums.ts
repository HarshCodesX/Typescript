// const user: (string | number)[] = ["hg", 1];

//now suppose we want this array to be in a specific order, like string should be first and then number or number first and then string
//we can do that by converting that array into tuple

let user: [string, number, boolean];
user = ["hg", 1, true];

let rgb: [number, number, number] = [255, 255, 224];

type User = [number, string];
const newUser: User = [123, "harsh"]; //this is a tuple that contains number and string
newUser[1] = "h@h.com";
// newUser.push(true); //can not do this, as we have mentioned that only number and string is allowed

export {};