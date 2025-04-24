"use strict";
{
    /**
     *
     * Topics:
     *
     * 1. Ternary Operator { value ? 'true':'false'}
     * 2. Optional Chaining (?.)
     * 3. Nullish Coalsege (??) check null values
     *
     *
     * - ts-node-dev Install
     *
    */
    // 1. ternary operator
    const age = 15;
    // if(age >=18){
    //     console.log('Adult');
    // }
    // else{
    //     console.log('Not Adult!');
    // }
    // using ternary operator
    {
        age >= 18 ? console.log('Adult!') : console.log('Not Adult!');
    }
}
