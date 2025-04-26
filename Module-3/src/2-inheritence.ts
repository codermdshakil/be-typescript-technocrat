{
    /**
     * 
     * Topic: Inheritence of OOP
     * 
     * When use - Inheritenec
     *  
     * 1."Is a" relationship - Ex: Bike is a vehical
     * 
     * 
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


    const r15 = new Bike('R15',500000, 'Black',250, 2);
    // console.log(r15);
    // r15.getPrice()


 



}