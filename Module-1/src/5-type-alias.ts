{
 /**
 * 
 * Type Alas
 * 
 * - Object type alias
 * - Array type alias
 * - Variable type alias
 * - function type alias
 * 
 * Diffetents between type and interface
 * 
 * 
 * Feature                  | type alias             | interface
 * --------------------------------------------------------------
 * Object type              | ✅ Yes                | ✅ Yes
 * Primitive/Union types    | ✅ Yes                | ❌ No
 * Extending (inheritance)  | ✅ via & implement    | ✅ via extends
 * Declaration merging      | ❌ No                 | ✅ Yes
 * Reopening definition     | ❌ No                 | ✅ Yes
 * 
 * */ 

    // object type alias

    type Student = { 

        name:string,
        age:number,
        email:string,
        phoneNo?:string,
        isMarried?:boolean,
        address?:string,
    };


    const student1 : Student  ={
        name:'Shakil Ahmed',
        age:20,
        email:'ahmedshakil@gmail.com',
        phoneNo:'0170000000',
        isMarried:false,
        address:'Dhaka'
    };


    const student2 :Student  = {
        name:'Noyon Raham',
        age:22,
        email:'noyonrahman2003@gmail.com',
        address:'Dhala'
    }

    // array type alias

    type Person = {
        name:string,
        age:number
    };

    const persons :Person[] = [
        {name:'Shakil AHmed', age:20},
        {name:'Noyon Rahman', age:22},
        {name:'Nadim Hassan', age:21}
    ];



    // variable type alias

    type UserName = string;
    type IsAdmin = boolean;
    
    const username:UserName = 'Shakil Ahmed';
    const isAdmin : IsAdmin =false;
 

    // function type alias
    type Add = (n1:number, n2:number) => number;


    const add:Add = (n1, n2) => n1 + n2;
    
    // console.log(add(10, 20));
    // console.log(add(10, 20));




}


