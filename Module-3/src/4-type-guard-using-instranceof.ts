{
    /**
     * Topic : instanceof guard
     * 
     * 
     * - type guard using instranceof / type narrowing
     * 
     * Type Guards
     * 
     * 1. typeof
     * 2. in -> for object
     * 3. instanceof -> for class , object
     * 
     * 
     * */
    
    class Animal {
        name:string;
        species:string;

        constructor(name:string,  species:string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('I am making sound!');
        }
    }

    class Dog extends Animal {
        constructor(name:string, species:string){
            super(name, species);
        }
        makeBark(){
            console.log('I am barking...');
        }
    }

    class Cat extends Animal {
        constructor(name:string, species:string){
            super(name, species);
        }
        makeMeaw(){
            console.log('I am meaw meawing...');
        }
    }

    



    // ## Normal way handle instanceof 

    // get Animal 
    // const getAnimal = (animal : Animal) => {

    //     // using intenceof guard check Dog 

    //     if(animal instanceof Dog){
    //         animal.makeBark();

    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeaw()

    //     }
    //     else{
    //         animal.makeSound()
    //     }

    // }


    // ## Smart way handle instanceof

    // check dog 
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    // check cat
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        // using intenceof guard check Dog \

        // here smartly called function
        if(isDog(animal)){
            animal.makeBark();

        }
        else if(isCat(animal)){
            animal.makeMeaw()

        }
        else{
            animal.makeSound()
        }

    }


    const jermanDog = new Dog('German Shephart', 'Dog');
    // jermanDog.makeBark();

    const deshiBilai = new Cat('Deshi Meaw', 'Cat');
    // deshiBilai.makeMeaw();


    // getAnimal(jermanDog);
    // getAnimal(deshiBilai);




}

