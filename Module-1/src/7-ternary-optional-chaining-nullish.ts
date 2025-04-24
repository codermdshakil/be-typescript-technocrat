{
    
/**
 * 
 * Topics:
 * 
 * 1. Ternary Operator { value ? 'true':'false'}
 * 2. Optional Chaining (?.)
 * 3. Nullish Coalsege (??) check null / undefine values
 * 
 * 
 * - ts-node-dev Install 
 * 
*/


// 1. ternary operator
const age:number = 15;

// if(age >=18){
//     console.log('Adult');
// }
// else{
//     console.log('Not Adult!');
// }

// using ternary operator
// {age >= 18 ? console.log('Adult!') : console.log('Not Adult!')}




// 2 . Nullish coalescing Operator
// - null / undefine 

const isAuthenticated = "";

// set null / undefine default value
const result = isAuthenticated ?? "Guest";

// console.log(result);
const result2 = isAuthenticated ? isAuthenticated : 'Guest';
// console.log({result}, {result2});

// 3. Optional chaning ?.

type User = {
    name:string;
    email:string;
    phoneNo:string;
    address:{
        city:string;
        road:string;
        presentAddress:{
            villageName:string;
            holdingNumber:number;
        };
        permanentAddress?:string;
    }
}

const userShakil :User = {
    name:'Shakil Ahmed',
    email:'shakil@gmail.com',
    phoneNo:'0170000000',
    address:{
        city:'Gazipur',
        road:'Kapasia Road',
        presentAddress:{
            villageName:'Barigong',
            holdingNumber:456
        },
    },
};

// Optional Chaning using (?.)
// const permanentAddressOfShakil = userShakil?.address?.permanentAddress ? userShakil.address.permanentAddress : 'Permanent Address Not Found!';

// use Null Coalescing ??
const permanentAddressOfShakil = userShakil?.address?.permanentAddress ?? "Permanent address not found!";
console.log({permanentAddressOfShakil});





}

