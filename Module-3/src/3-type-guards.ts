{
    /**
     * Type Guards
     * 
     * - type guard using typeof - 
     *   - Ex: if(typeof param1 === 'number' && typeof param2 === 'number')
     * 
     * - type guard using in guard object 
     *   - Ex: if('role' in user) 
     * 
     * */


    // 1. type guards using typeof 
    // - type guards mainly check types 

    type AlphaNumeric = number | string;


    const add = (param1:AlphaNumeric, param2:AlphaNumeric):AlphaNumeric =>{

        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }
    

    const res1 = add(5, 9);
    const res2 = add('10', 9);
    // console.log(res1); // 14
    // console.log(res2); // 109


    // type guard using in guard

    type NormalUser = {
        name:string;
    };

    type AdminUser = {
        name:string;
        role:string;
    };

    const getUser = (user:NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const adminUser = getUser({name:'Shakil Ahmed', role:'Senior Developer'});
    const user1 = getUser({name:'Mr. Normal vhai'});





}