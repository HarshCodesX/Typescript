let score: number | string = 33;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let harsh: User | Admin = {name: "harsh", id: 1234};
harsh = {username: "hg", id: 1234};

// function getDbId(id: string | number){
//     console.log(`Db id is ${id}`);
// }
// getDbId(4);
// getDbId("4");



function getDbId(id: string | number){
    // id.toLowerCase(); //as it can be number or string, so it gives error here, therefore we have to be sure, what is coming
    if(typeof id === "string"){
        id.toLowerCase();
    }
    else{
        id + 2;
    }
}

//array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

//if we want both numbers and strings inside array
// const data3: number[] | string[] = [1, 2, 3, "4"]; //no this is not the right syntax

const data3: (number | string)[] = [1, 2, 3, "4"];

//if we want some values to be very specific
let val:12.5 = 12.5;
// val = 5.6; //now this will give error


//usecase of this specific value
let seatAllotment: "aisle" | "window" | "middle";
seatAllotment = 'window';