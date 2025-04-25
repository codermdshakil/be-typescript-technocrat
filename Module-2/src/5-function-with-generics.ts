{
    /**
     * Function with generics
     * 
     * - recived function 1 dynamic params using generics
     * - recived function 2 dynamic params using generics
     * 
    */

   const createArray = (param: string) : string[] => {
    return [param];
   }

    // create array with generics
   const createArrayWithGeneric = <T>(param:T) : T[] => {

    return [param];
   }

// const res1 = createArray('BD');
// const resGeneric = createArrayWithGeneric<string>('Banlgadesh');
// console.log(resGeneric);

interface Person {
    name:string;
    age:number;
    gotHired:boolean;
}

const user1: Person = {
    name:'Shakil Ahmed',
    age:20,
    gotHired:false
}

//    const resGenericObj = createArrayWithGeneric<Person>(user1);
// console.log(resGenericObj);


// ## create array with tuple
const createArrayWithTuple = <T, Q>(param1:T, param2:Q) : [T, Q] => {
    return [param1, param2]
   }

const res3 = createArrayWithTuple<string, number>('Bangladesh', 200);
const res4 = createArrayWithTuple<string, Person>('Bangladesh', user1);
// console.log(res4);

const addCourseToStudent = <T>(student:T) => {
    const course = 'Next Level Web Development';
    return {
        ...student,
        course
    };
}

const res5 = addCourseToStudent<Person>(user1);
console.log(res5);

// result 
// {
//     name: 'Shakil Ahmed',
//     age: 20,
//     gotHired: false,
//     course: 'Next Level Web Development'
//   }
  

}

