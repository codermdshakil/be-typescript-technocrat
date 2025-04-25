{
    /**
     * 
     * Type vs Interface
     * 
     * type ->  (& for extends) You need to define primitive types, union, intersection, or tuples.
     * interface -> (extends keyword for extends) extends or implements , same named merged 
     * 
     * Using type and Interface 
     * 
     * - create object 
     * - create array
     * - create function
     * 
     * 
     * when type or interface
     * 
     * array, function -> type
     * object -> interface
     * 
     * */ 
    
    // using type

    type User1ByType = {
        name:string,
        age:number
    };

    // custom type union
    // type rollNumber = number;


    type userWithRoll = User1ByType & {role:string};

    const user1 :userWithRoll = {
        name:'Shakil Ahmed',
        age:20,
        role:'finance manager'
    };

     // using interface

     interface User2 {
        name:string;
        age:number
    };



    // interface userWithRoll2 extends User2  {
    //     role:string,
    //     jobTitle?:string,
    // };

    // interface can extends custom type 
    interface userWithRoll2 extends User1ByType  {
        role:string,
        jobTitle?:string,
    };
   

    const user2 : userWithRoll2 = {
        name:'Noyon Rahman',
        age:21,
        role:'Manager'
    };

    // console.log(user2);


    // Using type and interface create Array
    type RollsByType = number[];
    // const allRollByType : RollsByType= [2,3,4,5,6,7,8,9];

    interface RollsByInterface {
        [index:number] : number
    }

    const rollsByInterface : RollsByInterface = [1,2,3,4,5,6,7];
    // console.log(rollsByInterface);


    // using  type and interface declare function
    type Add = (num1:number, num2:number) => number;
 

    // function type using type
    // const add : Add = (num1, num2) => num1 + num1;

    // function type using interface
    interface Add2 {
        (num1:number, num2:number) : number;
    }

    const add2 : Add2 = (n1, n2) => n1+n2;
    // console.log(add2(10, 20));
}


// ts-node-dev --respawn --transpile-only 