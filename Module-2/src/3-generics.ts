{

    /**
     * 
     * Generic type : make  dynamically reuseable type
     * 
     * - Genaralaise type
     * - using GenericArray create dynamically number, string, boolean, object arrays
     * 
     * using Generics - 
     * 
     * - create arrau
     * - create object
     * - create tuple
     * 
     * Summary: 
     * - Generics let you write flexible, reusable code while keeping type safety. ✅
     * - Generics are like labeled boxes—you can put anything inside, but always know what it is. 
     * 
     * */
    

    // Create array using Generics
    type GenericArray<T> = Array<T>;
    // recived type and use it dynamically


    // const numberArray : number[] = [12,2,3,4,5,6];
    // const numberArray1 : Array<number> = [12,2,3,4,5,6];
    const numberArray2 : GenericArray<number> = [12,2,3,4,5,6];

    // const stringArray : string[] = ['Shakil', 'Noyon','Nadim'];
    // const stringArray1 : Array<string> = ['Shakil', 'Noyon','Nadim'];
    const stringArray2 : GenericArray<string> = ['Shakil', 'Noyon','Nadim'];

    // const booleanArray : boolean[] = [false, true, false, true, true];
    const booleanArray1 : Array<boolean> = [false, true, false, true, true];
    const booleanArray2 : GenericArray<boolean> = [false, true, false, true, true];


    const friendsList : GenericArray<{name:string, age:number}> = [
        {
            name:'Shakil',
            age:20
        },
        {
            name:'Noyon',
            age:22
        },
        {
            name:'Nadim',
            age:21
        },
    ];

     // create object using Generics
     type GenericObject<N,A,G> = {
        name:N,
        age:A,
        gotHired:G
    };

    const per1:GenericObject<string,number, boolean> = {
        name:'Shakil Ahmed',
        age:20,
        gotHired: false
    };

    const per2:GenericObject<string,number, number> = {
        name:'Noyon Rahman',
        age:20,
        gotHired: 10000
    };



    // generic typle
    type GenericTuple<X, Y> = [X,Y]

    // const manus:[string, string] = ['Mr.X', 'Ms. Y'];
    const manus: GenericTuple<string, string> = ['Mr.X', 'Ms. Y'];
    const person : GenericTuple<string, number> = ['Shakil', 20];



   



 




}
