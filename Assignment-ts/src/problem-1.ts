
const repeatString = (stringValue:string, numberValue:number):void => {
    
    let result:string = "";

     if(stringValue === ""){

        console.log('Enter Valid String world or any sentence!');

     }else{

        for(let i:number = 1; i <= numberValue; i++ ){

            result = result + stringValue;
    
        }
    
        console.log(`"${result}"`);

     }
   

};

repeatString("Hello!", 3);
// repeatString("Shakil!", 5);


 





