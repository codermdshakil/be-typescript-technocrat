{
    /**
     * Type Guards
     * 
     * 
     * */


    // 1. type guards using typeof 
    // - type guards mainly check types 
    const add = (param1:number | string, param2:number|string):number | string =>{

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


}