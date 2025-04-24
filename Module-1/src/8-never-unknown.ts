{

/**
 * Nullable type
 * 
 * - Nullable type
 * - unknown , typeof
 * - never 
 * 
 * 
 * */ 


// nullable type


const searchName = (value:string | null) =>{
    if(value){
        console.log('Searching..');
    }
    else{
        console.log('Here is nothing to search..');
    }
};


// searchName('Shakil Ahmed');
searchName(null);


// unknown , typeof

const getSpeedInMeterPerSecond = (value:unknown) => {

    if( typeof value === 'number'){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} m/s`);
    }
    else if(typeof value === 'string'){
        const valueInNumber = parseInt(value.split(' ')[0]);
        const convertedSpeed = (valueInNumber * 1000) / 3600;
        console.log(`Speed converted to ${valueInNumber} Km/h to  ${convertedSpeed} m/s`);

    }
    else{
        console.log('Wrong Input');
    }
}

// getSpeedInMeterPerSecond(20);
// getSpeedInMeterPerSecond('100 Km/h');
// getSpeedInMeterPerSecond(null);

// never

function throwError(msg:string):never{

    throw new Error(msg);
}

// throwError('Muskilse error hogaya!')




}