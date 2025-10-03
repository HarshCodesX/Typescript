const User = {
    name: "harsh",
    email: "h@h.com",
    isActive: true
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}){}
// createUser({name: "harsh", isPaid: false, email: "h@h.com"}); //here i am not able to pass any email as extra property, but now we will pass it

const newObj = {
    name: "harsh",
    isPaid: true,
    email: "h@h.com"
}

createUser(newObj);

function createCourse():{name: string, price: number}{ //if we want to return an object that contains a name and price for a course from a function 
    return {name: "typescript course", price: 200}
}

export {}