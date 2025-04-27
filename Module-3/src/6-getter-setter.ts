{
    /**
     * Topics: Getter and Setter
     * 
     * - Getter = A method to read (get) a property’s value.
     * - Setter = A method to update (set) a property’s value.
     * 
     * 
     * */ 

    class BankAccount{
        readonly id:number;
        private name:string;
        private _balance:number; 

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance  
        }

        // getBalance(){
        //     return console.log(`Current Balance is ${this._balance}`);
        // }

        // getter
        get balance(){
            return this._balance;
        }

        // setter
        set deposite(amount:number){
            this._balance = this._balance + amount;
        }

        // addMoney(amount:number){
        //     this._balance = this._balance + amount;
        //     return console.log(`Money Added ${amount} Successfully! Now, total balance is ${this._balance}`);
        // }

        // withDrawMoney(amount:number){
        //     if(amount < this._balance){
        //         this._balance = this._balance - amount;
        //         console.log(`Money withdraw ${amount} SuccessFully!`);
        //     }
        //     else{
        //         console.log("You don't have enough balance!");
        //     }
        // }
    }



    const goribManus = new BankAccount(1, 'Shakil Ahmed', 50);

    // goribManus.addMoney(600);
    // goribManus.withDrawMoney(610);
    // console.log(goribManus.getBalance()); 
    // // function ব্যাবহার করে করতে হচ্ছে ! আমরা চাই function এর মতো ব্যাবহার কিন্ত Access করব property এর মতো করে এই কারনে আমরা getter and setter ব্যাবহার করব!!

    // setter 
    goribManus.deposite = 100;

    // getter
    const myBalance = goribManus.balance; // function but work as property


    console.log(myBalance);

}