{
    /**
     * Utility Type
     * 
     * Partial<T> -> Make all properties optional
     * Required<T> -> Make all properties required
     * Readonly<T> -> Make all properties readonly
     * Pick<T, K> -> Pick some properties
     * Omit<T, K> -> Remove some properties
     * Record<K, T> -> Create a type with given keys and value type
     * Exclude<T, U> -> Exclude some types
     * Extract<T, U> -> Extract matching types
     * NonNullable<T> -> Remove null and undefined
     * 
    */


    type Person = {
        name:string;
        age:number;
        email?:string;
        phoneNo:string;
    }

    // Pick
    // type NameAndAge = Pick<Person, 'phoneNo' | 'age'>;
    // type NumberNo = Pick<Person, 'phoneNo'>;

    // Omit 
    // type contactInfo = Omit<Person, 'name'|'age'>;

    // Partial - make all person property optional
    type persobObj = Partial<Person>;
    
    
    // Required - make all person property must have required
    type persobObjRequired = Required<Person>;

    // ReadOnly - just can read the object can't modify
    type persobObjReadOnly = Readonly<Person>;

    // Record <key value> to create a new properties with value
    const userRoles: Record<string, string> = {
        name:'Shakil Ahmed',
        role:'Admin'
    }

    // 7. Exclude<UnionType, ExcludedMembers> 
    // - Removes specific members from a union - gives unique elements

    type removeDuplicate = Exclude<"a" | "b" | "c", "a">; // T = "b" | "c"


    // 8. Extract<UnionType, Members>
    // - Keeps only specific members from a union.

    type onlyDuplicateElements = Extract<"a" | "b" | "c", "a" | "b" >; // T = "a" | "b"





}