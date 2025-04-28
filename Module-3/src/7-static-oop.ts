{
    /**
     * Topic: Statis in OOP
     * 
     * Static
     * 
     * - Static members are shared across all instances.
     * - Accessed directly using the class name, not through an object.
     * - Useful for utility functions, constants, or common data.
     * 
     * */ 

    class Counter {
        // count:number = 0; dynamically memory allocate
        static count:number = 0; // static memory allocate
        increment(){
            // this.count = this.count + 1; // dynamic
            Counter.count = Counter.count + 1; // static
        }

        decrement(){
            // this.count = this.count - 1; // dynamic
            Counter.count = Counter.count - 1; // static
        }
    }


    // Dynamically
    // ---------------

    // const instance1 = new Counter;
    // const instance2 = new Counter;
    // instance1.increment();
    // instance1.increment();
    // instance1.increment();
    // console.log(instance1.count); // 3

    // instance2.increment();
    // instance2.increment();
    // console.log(instance2.count); // 2

    // Static - here memory allocate only one
    // ---------------------------------------

    const ins1 = new Counter;
    const ins2 = new Counter;

    ins1.increment();
    ins1.increment();
    ins1.increment();
    ins2.increment();
    ins2.increment();
    ins2.increment();
    // Both increment one static count
    // console.log(Counter.count); // 6



}