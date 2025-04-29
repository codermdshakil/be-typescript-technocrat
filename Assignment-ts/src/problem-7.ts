    const logString = (value:any):void => {

        // use type guard here
        if(typeof value != 'string'){
            console.log('Input is not a string.');
        }
        else{
            console.log(`"${value}"`);
        }

    }

    // logString("Hello, TypeScript!");
    // logString(false); // Input is not a string. 
    logString(42);
