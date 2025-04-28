{
    /**
     * 
     * Abstraction in OOP
     * 
     * Abstraction in OOP (using TypeScript) is hiding internal details and showing only essential features to the user.
     * 
     * 1. interface
     * 2. abstract
     * 
     * */

    // abstraction using interface

    interface Vehical1{

        // here hide implements details
        startEngine():void;
        stopEngine():void;
        move():void;
    }

    class Car implements Vehical1{
        
     // here use without implemet details
        startEngine(): void {
            console.log(`My name is ${this.name}. I'm starting car engine now`);
        }
        stopEngine(): void {
            console.log(`My name is ${this.name}. I'm stoping car engine now`);
        }

        move(): void {
            console.log(`My name is ${this.name}. I'm moving  now`);
        }


        // extra properties are abstraction
        name:string;
        model:number;
        
        constructor(name:string, model:number){
            this.name = name;
            this.model = model;
        }

    };

    const car1 = new Car('Toyota', 2000);
    const car2 = new Car('RR', 2000);
    const car3 = new Car('Mercedes-Bez', 2000);
    // car1.startEngine();
    // car2.startEngine();
    // car3.startEngine();



    

}