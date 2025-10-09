function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide Id");
        return;
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }
        else if(typeof strs === "string"){
            console.log(strs);
        }
    }
}

//next video "Instance and type predicates"

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}


type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){ //it will use the above function to identify whether it is a bird or fish
        pet //but if you hover over here, it will still be confused either it is a bird or fish, though it wont throw any error, but now we have mentioned in above function, that return type will be Fish, so now it wont be confused
        return "Fish food";
    }
    else {
        pet
        return "bird food";
    }
}