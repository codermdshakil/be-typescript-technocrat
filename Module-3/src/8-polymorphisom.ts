{
    /**
     * Polymorphisom - বহুরপি
     * 
     *- here getSleeping method is a polymorphisom
     * 
    */

    class Person{
        getSleep(){
            console.log('I am a Person for 8 hours a day!');
        }
    }

    class Student extends Person{
        getSleep(){
            console.log('I am a Student sleeping for 7 hours a day!');
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log('I am a Developer sleeping for 6 hours a day!');
        }
    }

    // getSleepingHours funtion

    const getSleepingHours = (param:Person) => {
        param.getSleep();
    }

    const person1 = new Person;
    const person2 = new Student;
    const person3 = new Developer;
    
    // called getSleep house function

    // here getSleeping method is a polymorphisom
    
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);






}