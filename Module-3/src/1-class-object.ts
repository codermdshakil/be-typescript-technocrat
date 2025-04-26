
{
    /**
     * Topics
     * 
     * 
     * 
     * - class - is a blueprint to create objects
     * 
     * 
     * 
     * Modifier     | Meaning                                               | Where accessible
     * public       -> Default. Accessible everywhere.                      | Inside class + outside class
     * private      -> Accessible only inside the same class.               | Only inside the class
     * protected    -> Accessible inside the class and subclasses.          | Class + Subclass
     * readonly     -> Value can be read but cannot be changed after initialization. | Everywhere (but no modification)
     * 
     * - object
     * 
    */

    // create class   
    class Person {
        public name: string;        // can access from anywhere
        private age: number;        // only inside class
        protected address: string;  // inside class + subclasses
        readonly country: string;   // read-only, cannot modify after constructor
      
        constructor(name: string, age: number, address: string, country: string) {
          this.name = name;
          this.age = age;
          this.address = address;
          this.country = country;
        }
      
        getAge() {
          return this.age; // ✅ private access inside class
        }
      }
      
      const person = new Person("Alice", 25, "New York", "USA");
      
    //   console.log(person.name);      // ✅ public access
    //   console.log(person.country);   // ✅ readonly access
    //   person.country = "Canada";     // ❌ Error: Cannot assign to 'country' because it is a read-only property
    //   console.log(person.age);       // ❌ Error: Property 'age' is private
    //   console.log(person.address);   // ❌ Error: Property 'address' is protected
      

    // using class Person we can create multiple persons now

    // const person1 = new Person('Shakil Ahmed', 20);
    // const person2 = new Person('Noyon Rahman', 22);
    // const person3 = new Person('Nadim Hassan', 21);


   




}