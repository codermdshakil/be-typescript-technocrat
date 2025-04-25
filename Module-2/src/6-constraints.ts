{
    /**
     * Constraints - force must have some type
     * 
     * 
    */
   
    //  Use constraints   <T extends {id:number, name:string, email:string}> that means in object properties must have id, name, email

    const addCourseToStudent = <T extends {id:number, name:string, email:string}>(student: T) => {

        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    // const res1 = addCourseToStudent<object>({name:'Shakil Ahmed'});
    const res2 = addCourseToStudent<{

        id:number;
        name:string;
        email:string;
        jobTitle:boolean;

    }>({

        id:22,
        name:'Shakil Ahmned', 
        email:'shakil@gmail.com',
        jobTitle:false
    });

    const student1 = addCourseToStudent({
        id:11,
        name:'Noyon Rahman',
        email:'noyon@gmail.com',
        jobTitle:true,
        salary:10000
    });

    console.log(student1);

  


}