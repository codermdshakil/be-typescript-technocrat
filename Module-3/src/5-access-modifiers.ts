{
    /**
     * Access Modifier 
     * 
     * public -> A public park — everyone can come.
     * private -> Your locked bedroom — only you can enter.
     * protected -> Your family’s kitchen — only family members can enter. 
     * readOnly -> just you can read! You can't reassign, redeclare values
     * 
     */


    class BankAccount{
        readonly id:number;
        private name:string;
        private _balance:number; 

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance  
        }

        getBalance(){
            return console.log(`Current Balance is ${this._balance}`);
        }

        addMoney(amount:number){
            this._balance = this._balance + amount;
            return console.log(`Money Added ${amount} Successfully! Now, total balance is ${this._balance}`);
        }

        withDrawMoney(amount:number){
            if(amount < this._balance){
                this._balance = this._balance - amount;
                console.log(`Money withdraw ${amount} SuccessFully!`);
            }
            else{
                console.log("You don't have enough balance!");
            }
        }
    }

    const goribManus = new BankAccount(1, 'Shakil Ahmed', 20);
    // goribManus.addMoney(600);
    // goribManus.withDrawMoney(610);
    // console.log(goribManus.getBalance());


}