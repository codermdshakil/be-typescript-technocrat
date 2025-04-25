{

    /**
     * 1. Type Assertion -> that means as a developer i know better then typescript
     * When you 100% sure then use type assertion (as)
     * 
     * - // (anything as string)  // type assertion for string
     * - // (anything as number) // type assertion for number 
     *
     * 2. try/catch
     * 
     * */ 


    let anything : any;
    anything = "I am software engineer";
    // (anything as string)  // type assertion for string

    anything = 22345;
    // (anything as number) // type assertion for number

    const kgToGm = (value: string|number|undefined):string| number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        else if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result1 = kgToGm(100) as number; // type assertion for number
    const result2 = kgToGm('22') as string; // type assertion for string

    type CustomError = {
        message: string
    };

    try{

    }
    catch(err){
        console.log((err as CustomError).message);
    }



}