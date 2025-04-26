
{
    /**
     * Constrants using keyof
     * 
     * - keyof gets all the keys of an object as a type.
     * - contraints it's only allowed to be the key of a given object.
     * 
     *  Term                 | Meaning
     * -----------------------------------------
     * keyof T              | All keys of type T
     * K extends keyof T    | Only allow K to be one of the keys of T
     * 
    */

    type Vehical = {
        bike:string;
        car:string;
        ship:string;
    }

    type Owner = "Bike" | "Car" | "Ship"; // manually
    type Owner2 = keyof Vehical;

    // const person1:Owner = 'Bike'  
    // const person2:Owner2 = 'car';

    // Y  extends X object properties 
    const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y) => {
        return obj[key];
    }


    const user = {
        name:'Shakil Ahmed',
        email:'ahmedshakil@gmail.com',
        age:20
    };

    const car = {
        model:'Toyota 100',
        price:'25 lack'
    };

    // console.log(user.name);
    // console.log(user['email']);

    // const res1 = getPropertyValue(car, 'model');
    // console.log(res1);



    // Example - 2
const getPropertyV = <T,Q extends keyof T >(obj:T, key:Q) => {
    return obj[key];
}

type Person = {
    name:string;
    age:number;
    gotHired:boolean;
}

const p1 : Person = {
    name:'Nadim',
    age:21,
    gotHired:false
}


// const personAge = getPropertyV(p1, 'age');
// const personName = getPropertyV(p1, 'name');
// console.log(personAge);
// console.log(personName);











   
 
}

// ts-node-dev --respawn --transpile-only 