interface userr {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string //we can write it as this also
    startTrial(): string, //it also implies that startTrial is a function and it will return a string
    getCoupon(couponname: string, value: number): number 
}

//this is known as reopening of the interface
interface userr {
    githubToken: string
}

interface Adminn extends userr {
    role: "admin" | "ta" | "learner"
}

const daksh: userr = {
    dbId: 1234,
    email: "h@h.com",
    userId: 123,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "first50", val: 50) => {
        return 12;
    },
    githubToken: "1234hj"
}

daksh.email = "d@d.com";

const lakshay: Adminn = {
    dbId: 1234,
    email: "h@h.com",
    userId: 123,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "first50", val: 50) => {
        return 12;
    },
    githubToken: "1234hj",
    role: "ta"
}