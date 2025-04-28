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
    
    // getSleepingHours(person1);
    // getSleepingHours(person2);
    // getSleepingHours(person3);



    // Example - 2 of Polymorphisom

    class Shape{
        getArea():number{
            return 0;
        }
    }

    // Circle 
    class Circle extends Shape{
        radius:number;
        constructor(radius:number){
            super();
            this.radius = radius;
        }
        getArea():number {
             return Math.PI * (this.radius * this.radius);
        }
    };

    // Rectangle 
    class Rectangle extends Shape{
        height:number;
        widht:number;
        constructor(height:number, width:number){
            super();
            this.height = height;
            this.widht = width;
        }
        getArea():number {
            return Math.PI * this.height * this.widht ;
        }
    };


    const getShapeArea = (param:Shape) => {
        param.getArea();
    }

    const cirle1 = new Circle(10);
    const regtangle1 = new Rectangle(10, 8);
    console.log(cirle1.getArea());
    console.log(regtangle1.getArea());

 
 







}