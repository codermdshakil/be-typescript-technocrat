"use strict";
{
    /**
     * Topics:
     *
     * 1. Spread Operator
     * 2. Rest operator
     * 3. Destructuring
     *
     * */
    // 1. Spread Operator in array
    const brothers1 = ['Sagor', 'Shakil', 'Saikot', 'Siam'];
    const brothers2 = ['Shahin Khan', 'Masum Mia'];
    // combine two array element
    // brothers1.push(...brothers2);
    // brothers1.push(...brothers2, 'Kamal', 'Jamal');
    // copy array element
    const copyArray = [...brothers2];
    // console.log(brothers2 === copyArray); // false because reference differents
    // Object Destructuring 
    const person = {
        name: 'Shakil Ahmed',
        age: 20,
        goal: 'CEO | Billioniare',
        currentTarget: 'Software Engineer'
    };
    // 1.2. Spread Operator in object
    const mentors1 = {
        ts: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    // combined two object in one
    const allMentors = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(allMentors);
    // 2. destucturing
    // - don't matter order
    const { age, goal, currentTarget } = person;
    // console.log(currentTarget);
    // Array destructuring 
    // - order matters
    const friends = ['Noyon', 'Nadim', 'Shakil',];
    const [first, second, third] = friends;
    // console.log(first); // Noyon
    // console.log(second); // Nadim
    // console.log(third); // Shakil
}
