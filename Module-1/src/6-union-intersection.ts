{
    
/**
 * Union and Intersection
 * 
 * Union -  | (work like || true or false )
 * Intersection - & (work like && must be true both)
 * 
 * 
 * */ 




// 1. Union types

let age:string | number;
age = '20';
age = 20;

// console.log(age);


// union type example's:
type FrontEndDev = "fakibazDeveloper" | 'juniorDeveloper';
type SeniorDev = "fakibazDeveloper" | 'expertDeveloper'
type Developer = FrontEndDev | SeniorDev;


const newDev : FrontEndDev = 'juniorDeveloper';
// console.log(newDev);

type User = {
    name:string;
    email:string;
    gender:"male" | "female"; // string type Literal using union
    age?:number,
    bloodGroup: "A+" | "AB+"| "O-" | "O+"; // string type Literal using union
};


const user1 :User = {
    name:'Shakil Ahmed',
    email:'ahmedshakil@gmail.com',
    age:20,
    gender:'male',
    bloodGroup:'A+',
};
 

// 2. intersection 

type FrontEndDeveloper = {
    skills:string[],
    desgination1:string,
}

type BackEndDeveloper = {
    skills:string[],
    desgination2:string,
}


// when both type must need then use intersection &
type FullStackDevelopers = FrontEndDeveloper & BackEndDeveloper;


const fullStackDev : FullStackDevelopers = {
    skills:['JS', 'TS', 'Node', 'Express'],
    desgination1:'Junior Developer',
    desgination2:'Full Stack Engineer'
};

// console.log(fullStackDev);






}


