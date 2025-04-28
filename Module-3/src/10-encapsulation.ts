{
    /**
     *  
     * Encapsulation in OOP
     * 
     * Encapsulation in TypeScript means hiding the internal data of a class and protecting it by controlling access through methods.
     * 
     * OOP four Pillars
     * ---------------------------------------
     * - 1. Inheritance     ->  When multiple classes share common properties or methods, and you want to reuse code to avoid duplication. 
     *                      -> parent -> child
     * 
     * - 2. Polymorphism    ->  When you want to treat different classes uniformly through a common interface or parent class, but allow them t
     * behave differently.
     *                      -> বহুরপি 
     * 
     * - 3. Abstraction     ->  When you want to hide complex details and only expose essential parts — making your code easier to use and maintain.
     *                      -> hide implement details parent , child implments details
     * 
     * - Encapsulation   ->  When you want to protect your class data from unauthorized access or modification, ensuring that changes happen 
     * safely through controlled methods.
     *                   ->  protected our internal data from outer world
     * 
     * 
     * 
    */

    class BankAccount{
        private _balance:number = 0;
        getBalance(){
            return this._balance;
        }
        addBalance(amount:number){
            this._balance = this._balance + amount;
            console.log(`Successfully added ${amount} money . Now, Total Balance is ${this._balance}`);
        }

        withdrawMoney(amount:number){
            if(amount < this.getBalance()){
                this._balance = this._balance - amount;
                console.log(`Successfully withdraw money ${amount}. Current Balance is ${this._balance}`);
            }
            else{
                console.log(`You have no enough Balance!`);
            }
        }
    }

    const goribManus  = new BankAccount;
    // console.log(goribManus.getBalance()); 
    // goribManus.addBalance(100);
    // goribManus.withdrawMoney(65);

}