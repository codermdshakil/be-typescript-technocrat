{
    /**
     * 
     * Conditional Types
     * 
     * - nested conditional type
     * - check object properties type
     * 
    */

    type a1 = null;
    type b1 = undefined;

    type x = a1 extends null ? true : false; // conditional type

    // nested conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;



    type Sheikh = {
        car:string;
        bike:string;
        ship:string;
    };

    // type CheckVehical<T> = T extends "car" | "bike" | "ship" ? true : false;

    // car ase kina / bike ase kina / ship ase kina 
    type CheckVehical<T> = T extends keyof Sheikh ? true : false

    type hasBike = CheckVehical<"car">;
    type hasShip = CheckVehical<"ship">;




}



