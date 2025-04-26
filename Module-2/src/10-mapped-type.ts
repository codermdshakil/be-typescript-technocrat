
{
    /**
     * Mapped type
     * 
     * - look up type
     * - mapped type
     * - mapped type with generic + look up type
     * 
     * * Mapped type
     * 
     * - recived dynamically string, number types
     * - T -> {height:string, width:number}
     * - T[key] -> T['height'] - string
     * - T[key] -> T['width']  - number
     * 
     * 
     *  type areaStringWithGeneric <T> = {        
     * 
        [key in keyof T]:T[key]; // generic with loop up type

        }
     *
    */

    const arrOfNumbers:number[] = [1,4,3,5,6];

    // const arrOfStrings:string[] = ['2', '3','5'];

    // const arrOfStrings2 : string[] = arrOfNumbers.map((item) => item.toString());
    const arrOfStrings2 : string[] = arrOfNumbers.map((item) => item.toString());
    // console.log(arrOfStrings2);

    type areaNumber = {
        height:number;
        width:number;
    }

    type Height = areaNumber['height'] // look up type

    // mapped type
    type areaString = {        
        // [key in "height" | "width"]:string; // static
        // [key in keyof areaNumber]:string; // dynamic
    }

    /**
     * Mapped type
     * 
     * - recived dynamically string, number types
     * - T -> {height:string, width:number}
     * - T[key] -> T['height'] - string
     * - T[key] -> T['width']  - number
     * 
     */

    type areaStringWithGeneric <T> = {        
        [key in keyof T]:T[key]; // generic with loop up type
    }

    const area1: areaStringWithGeneric<{height:string, width:number}> = {
        height:'100',
        width:10,
    };

    console.log(area1); // { height: '100', width: 10 }





}