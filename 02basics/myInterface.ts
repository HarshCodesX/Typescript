interface userr {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string //we can write it as this also
    startTrial(): string, //it also implies that startTrial is a function and it will return a string
    getCoupon(couponname: string, value: number): number 
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
}

daksh.email = "d@d.com";