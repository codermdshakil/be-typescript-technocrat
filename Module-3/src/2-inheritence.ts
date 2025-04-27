{
    /**
     * 
     * Topic: Inheritence of OOP
     * 
     * When use - Inheritenec
     *  
     * 1.'Is a' relationship - Ex: Bike is a vehical
     * 
     * Concept | Analogy
     * 
     * 1. IS-A (Inheritance) -> Child inherits qualities from Parent 👨‍👧
     * 2. HAS-A (Composition) ->  Person owns Car, House, Phone 🚗🏠📱
     * 3. 'Can do' / 'Can have' ->	Composition
     * 
     * In shorts
     * 
     * 1. If B is a kind of A → IS-A (Inheritance).
     * 2. If B is part of A → HAS-A (Composition).
     * 
    */

    class Vehical {
        constructor(public name:string, protected price:number) {
            this.name = name;
            this.price = price;
        }

        getPrice(){
            console.log(`${this.name} price is ${this.price}`);
        }
    }

    // vehical inherit bike 
    class Bike extends Vehical{
        constructor(public name:string, protected price:number, public color:string, public hpower:number,public seat:number){
            super(name,price);
            this.color = color;
            this.hpower = hpower;
            this.seat = seat;
        }
    }

    // Bike is a Vehical - inheritence
    const r15 = new Bike('R15',500000, 'Black',250, 2);
    // console.log(r15);
    // r15.getPrice()


    class Student {
        constructor(public name:string, protected age:number, private address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(sleepHours:number){
            console.log(`${this.name} sleeped ${sleepHours}`);
        }
    };

    const std1 = new Student('Shakil Ahmed', 20, 'Gazipur');
    // std1.getSleep(7); // Shakil Ahmed sleeped 7 

    class Teacher {
        constructor(public name:string, protected age:number, private address:string, public desgination:string){
            this.name = name;
            this.age = age;
            this.address = address;
            this.desgination = desgination;
        }

        getSleep(sleepHours:number){
            console.log(`${this.name} sleeped ${sleepHours}`);
        }
        tuition(tuitionHour:number){
            console.log(`${this.name} sir tuition ${tuitionHour} hours per day!`);
        }
    };


    const monirSir = new Teacher('Monirud Zamman', 45, 'Kapasia','Senior Teacher');
    // monirSir.tuition(4);
    // console.log(monirSir);

 



}