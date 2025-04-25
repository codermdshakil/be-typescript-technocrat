
{
    /**
     * Generics with interface
     * 
     * - using generics with interface we can pass object properties dynamically
     * 
     * - create interface with generics
     * - genetics object optional properties
     * - using type create object types
     * - generics default value 
     * 
     * 
    */

    interface Developer<T, X = null>{
        name:string;
        computer:{
            name:string;
            model:string;
            realiseYear:number;
        };
        smartWatch:T;
        bike?:X;
    }

    type poorDevWatch = {
        brand:string;
        heartBitTrack:boolean;
        sleepTrack: boolean;
    }

    const poorDeveloper : Developer<poorDevWatch> = {
        name:'Shakil Ahmed',
        computer:{
            name:'HP',
            model:'HP elite Book g3',
            realiseYear:2012
        },
        smartWatch:{
            brand:'Jani na',
            heartBitTrack:true,
            sleepTrack:true,
        }
    };

    type richDevWatch = {

        brand:string;
        heartBitTrack:boolean;
        sleepTrack:boolean,
        waterProp:boolean,
        expensive:boolean,

    };

    type richDevBike = {
        name:string;
        color:string;
        price?:string;
    }

    const richDeveloper : Developer<richDevWatch, richDevBike> = {
        name:'Persian',
        computer:{
            name:'Apple',
            model:'Macbook Air',
            realiseYear:2022
        },
        smartWatch:{
            brand:'Apple',
            heartBitTrack:true,
            sleepTrack:true,
            waterProp:true,
            expensive:true,
        },
        bike:{
            name:'R15',
            color:'Black',
            // price: '5 lakh',
        },
    }

 



}

